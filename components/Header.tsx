import { ReactSVGElement } from 'react';

type HeaderProps = {
	icon?: ReactSVGElement;
	headerTitle?: string;
	headerDesc?: string;
};

const Header = ({ headerTitle, headerDesc }: HeaderProps): JSX.Element => {
	return (
		<div className="header">
			<header>
				<h4>Header: {headerTitle} </h4>
				<p>Description: {headerDesc} </p>
			</header>
		</div>
	);
};

export default Header;
