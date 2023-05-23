import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import Uppy, { UppyFile } from '@uppy/core';
import { DragDrop } from '@uppy/react';
import { CmsWidgetControlProps, CmsWidgetPreviewProps } from "netlify-cms-core"

import '@uppy/core/dist/style.css';
import '@uppy/core/dist/style.min.css';
import '@uppy/drag-drop/dist/style.min.css';

import { Wrapped, ImageWrapper, Image, Button } from "./svgStyles";

const readFile = (file: UppyFile): Promise<string>  => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => event.target && typeof event.target.result === "string"  ? resolve(event.target.result) : ""
    reader.onerror = (err) => reject(err);
    reader.readAsText(file.data);
  });
}

const SvgControl = forwardRef(({ value, onChange, classNameWrapper }: CmsWidgetControlProps<string | null>, ref) => {
  const [uppy, setUppy] = useState<null | Uppy>(null);

  const isValid = () => {
    return true;
  };

  const clearUppy = () => {
    if (uppy) {
      uppy.getFiles().forEach(file => {
        uppy.removeFile(file.id);
      });
    }
  }

  const deleteImage = () => {
    onChange(null); 
    clearUppy()
  }

  useImperativeHandle(ref, () => ({
    isValid
  }), []);

  useEffect(() => {
    const uppyInstance = new Uppy({
      restrictions: {
        allowedFileTypes: ['image/svg+xml']
      },
      autoProceed: false,
    });

    uppyInstance.on('file-added', (file) => {
      readFile(file).then((content) => {
        let base64Svg = encodeURIComponent(content)
        let dataUri = `data:image/svg+xml,${base64Svg}`;
        onChange(dataUri);
      });
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
          <DragDrop 
            uppy={uppy}
            height={150}
          />
       )}
    </div>
  )
})

const SvgPreview = ({ value }: CmsWidgetPreviewProps<string | null>) => {
  if (!value) return null;
  return <img style={{maxWidth: "100%"}} src={value} alt={"svg-image"}/>
}


export const registerSvgWidget = () => CMS.registerWidget('svg', SvgControl, SvgPreview);
