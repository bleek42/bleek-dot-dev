import type { PageLink } from '@interfaces/PageLink';
import type { HeaderProps } from '@props/header.props';

import Navbar from '@components/Navbar';
import { pageLinks } from '@constants/page-links';
import { Header as Wrapper } from './Header';
import { BlkMd, CyLg } from '@global/Text';

export default function Header({ id, name, content, icon }: HeaderProps) {
	console.log('Header component:', id, name, content, icon);

	return (
		<Wrapper>
			<CyLg>Brandon Leek</CyLg>
			<BlkMd>bleek.dev</BlkMd>
			{icon && <i>{icon}</i>}
			<Navbar pageLinks={pageLinks} toggle={false} />
		</Wrapper>
	);
}
