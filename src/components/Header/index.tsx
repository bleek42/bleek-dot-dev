import type { HeaderProps } from '@props/header.props';

import Navbar from '@components/Navbar';
import { pageLinks } from '@constants/page-links';
import { Header as Wrapper } from './Header';
import { BlkMd, CyLg } from '@global/Text';
import { GrnMd } from '../global/Text';

export default function Header({ id, name, title }: HeaderProps) {
	console.log('Header component:', id, name, title);

	return (
		<Wrapper>
			<CyLg>Brandon Leek</CyLg>
			<GrnMd>bleek.dev</GrnMd>
			<BlkMd>{title}</BlkMd>
			<Navbar pageLinks={pageLinks} />
		</Wrapper>
	);
}
