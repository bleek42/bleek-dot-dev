import Image from 'next/image';
import { Fragment } from 'react';

interface DetailsProps {
  index: number;
	img: string;
};

const Details = ({ img, index }: DetailsProps): JSX.Element => {
	return (
		<Fragment key={index}>
			<details>
				<summary>Click to view screenshots</summary>
				<Image src={img} alt={`${img}-details`} />
			</details>
		</Fragment>
	);
};

export default Details;
