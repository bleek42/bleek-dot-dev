import Image from 'next/image';
import { FC, Fragment } from 'react';

const SectionDetails: FC = (): JSX.Element => {
  return (
    <Fragment>
      <details>
        <summary>Click to view screenshots</summary>
        {/* {screenShots?.map((key) => (
          <Image key={key} alt="some-img" />
        ))} */}
      </details>
    </Fragment>
  );
};

export default SectionDetails;
