import Image from 'next/image';
import { ReactSVGElement } from 'react';

type SectionProps = {
	icon?: ReactSVGElement;
	sectionTitle?: string;
	sectionDesc?: string;
	sectionLink?: string;
};

const Section = ({
	icon,
	sectionTitle,
	sectionDesc,
	sectionLink,
}: SectionProps): JSX.Element => {
	return (
		<div className="section">
			<section>
				<h4>
					icon: {icon} title: {sectionTitle}
				</h4>
				<p>description: {sectionDesc}</p>
				<a href={sectionLink}>link</a>
			</section>
		</div>
	);
};
