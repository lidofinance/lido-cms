import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

export const uppy = new Uppy()
  .use(XHRUpload, {
    endpoint: "/api/media/upload",
    fieldName: "file",
  })
  .on("complete", async (result) => {
    console.log(result);
  });
