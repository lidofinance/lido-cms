import React, {
  ReactNode,
  useEffect,
  useState,
  FC,
  ComponentType,
} from "react";
import { StyleSheetManager } from "styled-components";
import { PreviewTemplateComponentProps } from "decap-cms-core";

interface StyleInjectorProps {
  children: ReactNode;
}

const StyleInjector = ({ children }: StyleInjectorProps) => {
  const [iframeRef, setIframeRef] = useState<HTMLHeadElement | null>(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName("iframe")[0];
    const iframeHeadElem = iframe?.contentDocument?.head;
    iframeHeadElem && setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    )
  );
};

export const withStyledComponentsRendered = (
  Comp: ComponentType<PreviewTemplateComponentProps>,
): FC<PreviewTemplateComponentProps> => {
  return (props) => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
};
