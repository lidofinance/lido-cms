import { createElement } from "react";
import { createRoot } from "react-dom/client";

import { Modal } from "./Modal/Modal";
import { modalEvents } from "./Modal/modalEvents/modalEvents";

const media = {
  create: (insertHandler: any) => {
    let div = document.createElement("div");
    div.id = "media-library";
    document.body.append(div);

    const root = createRoot(div);
    const modalComponent = createElement(Modal, { handler: insertHandler });
    root.render(modalComponent);
  },
  show: () => modalEvents.emit("show"),
  hide: () => modalEvents.emit("hide"),
};

async function init({ options: { config }, handleInsert }: any) {
  media.create(handleInsert);

  return {
    show: media.show,
    hide: media.hide,
    enableStandalone: () => true,
  };
}

export const mediaLibrary = { name: "test", init };
