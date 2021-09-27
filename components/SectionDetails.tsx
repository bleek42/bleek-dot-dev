import Image from 'next/image';
import { Fragment } from 'react';

type ImageDropdownProps = {
	img: string;
};

const SectionDetails = ({ img }: ImageDropdownProps): JSX.Element => {
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
