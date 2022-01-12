import { ReactSVGElement } from 'react';

type HeaderProps = {
	icon?: ReactSVGElement;
	title?: string;
	description?: string;
};

const Header = ({ icon, title, description }: HeaderProps): JSX.Element => {
	return (
		<div className="header">
			<header>
				<h4>Header: {title} </h4>
				<p>Description: {description} </p>
			</header>
		</div>
	);
};

export default Header;
