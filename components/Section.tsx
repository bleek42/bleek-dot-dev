import type { FC } from 'react';

import { Fragment } from 'react';

import { Maybe } from '@graphql-tools/utils/types';
import type { BaseProps } from '@interfaces/BaseProps';
import type { Project } from '@interfaces/Project';

type SectionProps = BaseProps & Maybe<Project>

const Section: FC<SectionProps> = ({
  key,
  title,
  description,
  keywords,
  icon,
  items
}: SectionProps) => {
  return (
    <section key={key} className={`${title}-section`}>
      <h3>{title}</h3>
      {keywords && (
        <span>
          {keywords}
        </span>
      )}
      {description && (
        <article>
          <p>{description}</p>
        </article>
      )}
      {items && Array.isArray(items) && (
        items.map((item, idx) => (
        <Fragment >
          <article key={item?.id || idx}>
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
            <p>{item?.tech}</p>
          </article>
          <article>
            {item?.screenShots?.map((url, idx) => <img key={idx} src={url as string} alt={url as string} />)}
          </article>
          <aside>
            {item?.sourceCode.map((url, idx) => <a key={idx} href={url as string} target="_blank" />)}
            {item?.externalLinks.map((url, idx) => <a key={idx} href={url as string} target="_blank" />)}
          </aside>
        </Fragment>
        ))
      )}
    </section>
  );
}

export default Section;
