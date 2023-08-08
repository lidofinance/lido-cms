import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { notificationBanners } from "features/cms/initialize/collections/notificationBanners/notificationBanners";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import { Wrapper } from "./notificationBannersStyles";

type Data = {
  text: string;
  link: string;
};

export const NotificationBannersPreview = ({
  entry,
}: PreviewTemplateComponentProps) => {
  const { text, link }: Data = entry.getIn(["data"]).toJS();

  return (
    <>
      <Wrapper href={link}>{text}</Wrapper>
    </>
  );
};

export const registerNotificationBannersPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    notificationBanners.name,
    withStyledComponentsRendered(NotificationBannersPreview)
  );
};
