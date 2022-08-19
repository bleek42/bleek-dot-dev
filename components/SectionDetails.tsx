import Image from 'next/image';
import { Fragment } from 'react';

type DetailsProps = {
	img: string;
};

const Details = ({ img }: DetailsProps): JSX.Element => {
	return (
		<Fragment>
			<details>
				<summary>Click to view screenshots</summary>
				<Image src={img} alt="some-img" />
			</details>
		</Fragment>
	);
};

export default SectionDetails;
