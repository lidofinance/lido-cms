import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
  RefObject,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { CmsWidgetControlProps, CmsWidgetPreviewProps } from "decap-cms-core";

const visibilityElement = (
  display: "block" | "none",
  ref: RefObject<HTMLDivElement | null>,
) => {
  const { current } = ref;
  if (!current) return;
  const element = current.parentElement;
  if (!element) return;
  element.style.display = display;
};

const UuidControl = forwardRef(
  (
    {
      value,
      onChange,
      classNameWrapper,
      field,
    }: CmsWidgetControlProps<string | null>,
    refComponent,
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
      [],
    );

    useEffect(() => {
      if (value) return;
      const uuid = uuidv4();
      onChange(uuid);
    }, []);

    useEffect(() => {
      if (hide) {
        visibilityElement("none", ref);
      } else {
        visibilityElement("block", ref);
      }
    }, [hide]);

    return (
      <div ref={ref} className={classNameWrapper}>
        {value ?? ""}
      </div>
    );
  },
);

UuidControl.displayName = "UuidControl";

const UuidPreview = ({
  value,
  field,
}: CmsWidgetPreviewProps<string | null>) => {
  let hide = field.get("hide");
  let ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hide) {
      visibilityElement("none", ref);
    } else {
      visibilityElement("block", ref);
    }
  }, [hide]);

  return <div ref={ref}>{value ?? ""}</div>;
};

export const registerUuidWidget = () =>
  CMS.registerWidget("uuid", UuidControl, UuidPreview);
