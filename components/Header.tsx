import { ReactSVGElement } from 'react';

import styles from '../styles/Header.module.scss';

interface HeaderProps {
	icon?: ReactSVGElement;
	title?: string;
	description?: string;
};

const Header = ({ icon, title, description }: HeaderProps): JSX.Element => {
	return (
		<header className={`${title}-header`}>
			<span>{icon}</span>
			<h2>{title}</h2>
			<h3>{description}</h3>
		</header>
	);
};

export default Header;
