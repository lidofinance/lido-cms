import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
} from "react";
import { CmsWidgetControlProps, CmsWidgetPreviewProps } from "decap-cms-core";
import styled from "styled-components";

const ReadOnlyField = styled.div`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #666;
  font-family: inherit;
  font-size: 14px;
  position: relative;

  &::after {
    content: "🔒 Read-only";
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 11px;
    color: #999;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007acc;
    box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.2);
  }
`;

const ReadonlyAfterCreationControl = forwardRef(
  (
    {
      value,
      onChange,
      classNameWrapper,
      field,
    }: CmsWidgetControlProps<string | null>,
    refComponent,
  ) => {
    const [inputValue, setInputValue] = useState(value || "");
    const [hasValidationError, setHasValidationError] = useState(false);

    const [isExisting] = useState(() => Boolean(value));

    const pattern = field.get("pattern");
    const hint = field.get("hint");
    const required = field.get("required");

    const validateInput = (val: string) => {
      if (required && !val.trim()) {
        return false;
      }

      if (pattern && pattern.length >= 1) {
        const regex = new RegExp(pattern[0]);
        return regex.test(val);
      }

      return true;
    };

    useImperativeHandle(refComponent, () => ({
      isValid: () => {
        const valid = validateInput(inputValue);
        setHasValidationError(!valid);
        return valid;
      },
    }));

    useEffect(() => {
      setInputValue(value || "");
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);

      onChange(newValue);

      if (hasValidationError) {
        setHasValidationError(false);
      }
    };

    if (isExisting) {
      return (
        <div className={classNameWrapper}>
          <ReadOnlyField
            title={hint || "This field cannot be changed after creation"}
          >
            {value}
          </ReadOnlyField>
        </div>
      );
    }

    return (
      <div className={classNameWrapper}>
        <InputField
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={hint || "Enter value..."}
          style={{
            borderColor: hasValidationError ? "#ff6b6b" : "#ddd",
          }}
        />
        {hasValidationError && pattern && pattern.length >= 2 && (
          <div style={{ color: "#ff6b6b", fontSize: "12px", marginTop: "4px" }}>
            {pattern[1]}
          </div>
        )}
      </div>
    );
  },
);

ReadonlyAfterCreationControl.displayName = "ReadonlyAfterCreationControl";

const ReadonlyAfterCreationPreview = ({
  value,
}: CmsWidgetPreviewProps<string | null>) => {
  return <span>{value || ""}</span>;
};

export const registerReadonlyAfterCreationWidget = () =>
  CMS.registerWidget(
    "readonly-after-creation",
    ReadonlyAfterCreationControl,
    ReadonlyAfterCreationPreview,
  );
