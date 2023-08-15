import { Header, type HeaderProps } from './PageHeader';
import { LgTxt, MdTxt } from '@/components/common/Text';
import Navbar from '@/components/Navbar';

export default function Header({ id, name, title, children = Navbar }: HeaderProps) {
	console.log('Header component:', id, name, title);
	// const pageId = useId();
	return (
		<Header id={`header-${name || 'noname'}${id}`}>
			<LgTxt font="Birdman" color="green" shadow="black">
				Brandon Leek
			</LgTxt>
			<MdTxt font="Birdman" color="neon" shadow="steel">
				bleekDotDev
			</MdTxt>
			<MdTxt font="Birdman" color="red" shadow="steel">
				{title}
			</MdTxt>
			{children}
		</Header>
	);
}
