import Navbar from '../Navbar';
import { navLinks, NavLink } from '../../constants/nav-links';
import { Wrapper } from './Header';
import { BlkMd, CyLg } from "../../global";
import { NavItem } from '../Navbar/Navbar';

type HeaderProps = JSX.IntrinsicElements['header'] & {
	id: number | string;
	name: string;
	content: string | Array<string>;
	icon?: '\ue456' | '\ue677' | null;
};

export default function Header({ id, name, content, icon }: HeaderProps) {
	console.log('Header component:', id, name, content, icon);

	return (
		<Wrapper>
			<CyLg>Brandon Leek</CyLg>
			<BlkMd>bleek.dev</BlkMd>
			{icon && <i>{icon}</i>}
			<Navbar links={navLinks} />
		</Wrapper>
	);
}

{
	/* <h1>Brandon Leek</h1>
<h2>bleek.dev</h2> */
}
// <span className="NavItem-header">
// 	<h6>{name || 'unknown header'}</h6>
// 	<p>{content || 'no header content'} </p>
// </span>
// <header id={id ? `hedr-${id}` : 'hedr-0'}>
// </header>
