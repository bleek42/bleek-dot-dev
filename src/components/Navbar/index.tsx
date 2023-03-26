import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { VscMenu, VscFoldUp } from 'react-icons/vsc';

import {
	Nav,
	Toggle,
	ToggleBtn,
	ToggleTxt,
	NavList,
	NavItem,
} from './Navbar';
import { navLinks } from '../../constants/nav-links';

type ToggleProps = JSX.IntrinsicElements['span'] & {
	isToggled: boolean;
}

export default function Navbar({ links = navLinks }) {
	const [toggle, setToggle] = useState(false);

	const toggleMenu = () => setToggle(!!toggle);

	return (
		<Nav onMouseLeave={toggleMenu}>
			<Toggle>
				<ToggleTxt>Menu</ToggleTxt>
				<ToggleBtn
					onMouseOver={toggleMenu}
					onClick={toggleMenu}
					>

					{toggle ? <VscFoldUp /> : <VscMenu />}
				</ToggleBtn>
			</Toggle>
			<NavList>
				<Toggle isToggled={toggle}>

						{navLinks.map((link) => (
							<NavItem key={link.id}>
								<Link to={link.path}>
									<i>{link.icon}</i>
									<pre title={link.title}>{link.title}</pre>
								</Link>
							</NavItem>
						))}

				</Toggle>
			</NavList>
		</Nav>
	);
}
// <nav>
// </nav>

{/* <div className={toggle ? 'nav-open' : 'nav-close'}>
	<ul onMouseLeave={toggleMenu}>
		{links.map((link, idx) => (
			<li
				key={link.id || idx}
				id={`${link.title.toLowerCase()}-${link.id}`}
				className="nav-link">
			</li>
		))}
	</ul>
</div> */}
