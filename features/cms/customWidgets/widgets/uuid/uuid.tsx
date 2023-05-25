import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
  RefObject,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { CmsWidgetControlProps, CmsWidgetPreviewProps } from "netlify-cms-core";

const hideElement = (
  ref: RefObject<HTMLDivElement>,
  hideParentElement: boolean = false
) => {
  const { current } = ref;
  if (!current) return;
  const element = hideParentElement ? current.parentElement : current;
  if (!element) return;
  element.style.display = "none";
};

const UuidControl = forwardRef(
  (
    {
      value,
      onChange,
      classNameWrapper,
      field,
    }: CmsWidgetControlProps<string | null>,
    refComponent
  ) => {
    let hide = field.get("hide");
    let ref = useRef<HTMLDivElement | null>(null);

    const isValid = () => {
      return true;
    };

    useImperativeHandle(
      refComponent,
      () => ({
        isValid,
      }),
      []
    );

    useEffect(() => {
      if (hide) hideElement(ref, true);

      if (value) return;
      const uuid = uuidv4();
      onChange(uuid);
    }, []);

    return (
      <div ref={ref} className={classNameWrapper}>
        {value ?? ""}
      </div>
    );
  }
);

const UuidPreview = ({
  value,
  field,
}: CmsWidgetPreviewProps<string | null>) => {
  let hide = field.get("hide");
  let ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hide) hideElement(ref);
  }, []);

  return <div ref={ref}>{value ?? ""}</div>;
};

export const registerUuidWidget = () =>
  CMS.registerWidget("uuid", UuidControl, UuidPreview);
