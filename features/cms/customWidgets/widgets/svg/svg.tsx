import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import Uppy, { UppyFile } from "@uppy/core";
import { DragDrop } from "@uppy/react";
import { CmsWidgetControlProps, CmsWidgetPreviewProps } from "netlify-cms-core";

import "@uppy/core/dist/style.css";
import "@uppy/core/dist/style.min.css";
import "@uppy/drag-drop/dist/style.min.css";

import { Wrapped, ImageWrapper, Image, Button } from "./svgStyles";

const readFile = (file: UppyFile): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) =>
      event.target && typeof event.target.result === "string"
        ? resolve(event.target.result)
        : reject("svg loading error");
    reader.onerror = reject;
    reader.readAsText(file.data);
  });
};

const validationDimensionsSvg = (svgContent: string, options: any): boolean => {
  let check = true;

  const width = options?.get("size")?.get("width")?.toString();
  const height = options?.get("size")?.get("height")?.toString();

  if (!width && !height) return check;

  const parser = new DOMParser();
  const doc = parser.parseFromString(svgContent, "image/svg+xml");
  const svg = doc.getElementsByTagName("svg")[0];

  let svgWidth = svg.getAttribute("width");
  let svgHeight = svg.getAttribute("height");

  if (!svgWidth || !svgHeight) {
    const viewBox = svg.getAttribute("viewBox");
    if (viewBox) {
      const parts = viewBox.split(" ");
      svgWidth = svgWidth || parts[2];
      svgHeight = svgHeight || parts[3];
    }
  }

  if (width && width !== svgWidth) check = false;
  if (height && height !== svgHeight) check = false;

  if (!check)
    alert(
      `The image dimensions must be: 
${width ? `width: ${width}px` : ""}
${height ? `height: ${height}px` : ""}`
    );

  return check;
};

const clearUppy = (uppy: Uppy | null) => {
  uppy?.getFiles().forEach((file) => {
    uppy.removeFile(file.id);
  });
};

const SvgControl = forwardRef(
  (
    {
      field,
      value,
      onChange,
      classNameWrapper,
    }: CmsWidgetControlProps<string | null>,
    ref
  ) => {
    const [uppy, setUppy] = useState<null | Uppy>(null);

    let options = field.get("options");

    const isValid = () => {
      return true;
    };

    const deleteImage = () => {
      onChange(null);
      clearUppy(uppy);
    };

    useImperativeHandle(
      ref,
      () => ({
        isValid,
      }),
      []
    );

    useEffect(() => {
      const uppyInstance = new Uppy({
        restrictions: {
          allowedFileTypes: ["image/svg+xml"],
        },
        autoProceed: false,
      });

      uppyInstance.on("file-added", async (file) => {
        const content = await readFile(file);

        let base64Svg = encodeURIComponent(content);
        let dataUri = `data:image/svg+xml,${base64Svg}`;

        if (validationDimensionsSvg(content, options)) {
          onChange(dataUri);
        } else {
          clearUppy(uppyInstance);
        }
      });

      setUppy(uppyInstance);

      return () => {
        uppyInstance.close();
      };
    }, []);

    if (!uppy) {
      return null;
    }

    return (
      <div className={classNameWrapper}>
        {value ? (
          <Wrapped>
            <ImageWrapper>
              <Image src={value} />
            </ImageWrapper>
            <Button onClick={deleteImage}>Delete</Button>
          </Wrapped>
        ) : (
          <DragDrop uppy={uppy} height={"150px"} />
        )}
      </div>
    );
  }
);

const SvgPreview = ({ value }: CmsWidgetPreviewProps<string | null>) => {
  if (!value) return null;
  return <img style={{ maxWidth: "100%" }} src={value} alt={"svg-image"} />;
};

export const registerSvgWidget = () =>
  CMS.registerWidget("svg", SvgControl, SvgPreview);
