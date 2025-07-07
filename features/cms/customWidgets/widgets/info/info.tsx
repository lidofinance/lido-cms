import React, { useImperativeHandle, forwardRef, ReactNode } from "react";
import { CmsWidgetControlProps } from "decap-cms-core";

import { Wrapper, Block, Text, Link } from "./infoStyles";

const InfoControl = forwardRef(
  (
    { classNameWrapper, field }: CmsWidgetControlProps<string | null>,
    refComponent
  ) => {
    let data = field.get("data");

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

    return (
      <Wrapper className={classNameWrapper}>
        {data &&
          data.map((infoBlock: any) => {
            if (!infoBlock) return null;

            const descriptionData = infoBlock.get("description");
            const linksData = infoBlock.get("links");

            const description = descriptionData ? (
              <Text>{descriptionData ?? ""}</Text>
            ) : null;

            const links: ReactNode[] = [];
            linksData?.forEach((link: any) => {
              const label = link.getIn([0]);
              const href = link.getIn([1]);

              if (!label || !href) return null;

              links.push(<Link href={href}>{label}</Link>);
            });

            return description || links.length ? (
              <Block>
                {description}
                {links}
              </Block>
            ) : null;
          })}
      </Wrapper>
    );
  }
);

InfoControl.displayName = "InfoControl";

export const registerInfoWidget = () => CMS.registerWidget("info", InfoControl);
