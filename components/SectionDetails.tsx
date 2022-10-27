import Image from 'next/image';
import { Fragment } from 'react';

type DetailsProps = {
	img: string;
};

const SectionDetails = ({ img }: DetailsProps): JSX.Element => {
  return (
    <details>
      <summary>Click to view screenshots</summary>
      <Image
        src={img}
        alt="some-img"
      />
    </details>
  );
};

export default SectionDetails;
