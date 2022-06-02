import Image from 'next/image';
import { Fragment } from 'react';

type SectionDetailsProps = {
  screenShots?: Array<URL | string>;
};

const SectionDetails = ({ screenShots }: SectionDetailsProps): JSX.Element => {
  return (
    <Fragment>
      <details>
        <summary>Click to view screenshots</summary>
        {screenShots?.map((slug) => (
          <Image key={slug} src={slug} alt="some-img" />
        ))}
      </details>
    </Fragment>
  );
};

export default SectionDetails;
