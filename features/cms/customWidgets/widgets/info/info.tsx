import { CmsWidgetControlProps } from 'decap-cms-core'
import React, { forwardRef, ReactNode } from 'react'
import styles from './infoStyles.module.css'

const InfoControl = forwardRef(
  (
    { classNameWrapper, field, value }: CmsWidgetControlProps<string | null>,
    refComponent
  ) => {
    let data = field.get("data");
    return (
      <div ref={refComponent} className={styles.wrapper}>
        {data &&
          data.map((infoBlock: any) => {
            if (!infoBlock) return null;

            const descriptionData = infoBlock.get("description");
            const linksData = infoBlock.get("links");

            const description = descriptionData ? (
              <p className={styles.text}>{descriptionData ?? ""}</p>
            ) : null;

            const links: ReactNode[] = [];
            linksData?.forEach((link: any) => {
              const label = link.getIn([0]);
              const href = link.getIn([1]);

              if (!label || !href) return null;

              links.push(<a target="_blank" className={styles.link} href={href}>{label}</a>);
            });

            return description || links.length ? (
              <div className={styles.block}>
                {description}
                {links}
              </div>
            ) : null;
          })}
      </div>
    );

  }
);


export const registerInfoWidget = () => {
  //console.log(CMS.registerWidget)
  CMS.registerWidget("info", InfoControl);
}
