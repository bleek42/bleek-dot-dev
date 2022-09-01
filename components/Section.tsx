import type { FC } from 'react';
import type { IconBaseProps } from 'react-icons';

import { Fragment } from 'react';

import type { SectionProps } from '@/types/interfaces/section.props';

const Section: FC<SectionProps<IconBaseProps>> = ({
  key,
  name,
  content,
  icon,
  item,
}: SectionProps<IconBaseProps>): JSX.Element => {
  return (
    <section key={key} className={`${name}-section`}>
      {icon && (
        <span>
          {icon}
        </span>
      )}
      {content && (
        <article>
          <p>{content}</p>
        </article>
      )}
      {item && Array.isArray(item) && (
        <Fragment key={item?.id}>
          <article>
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
      )}
    </section>
  );
}

export default Section;
