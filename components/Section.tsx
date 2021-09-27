import Image from 'next/image';
import { ReactSVGElement } from 'react';

type SectionProps = {
	name: string;
	icon?: ReactSVGElement;
	description?: string;
	url?: string;
};

const Section = ({
	name,
	icon,
	description,
	url,
}: SectionProps): JSX.Element => {
	return (
		<div className="section">
			<section>
				<h4>
					icon: {icon} name: {name}
				</h4>
				<p>description: {description}</p>
				<a href={url}>Link</a>
			</section>
		</div>
	);
};

export default Section;
