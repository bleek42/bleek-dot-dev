import { Details as Wrapper, Summary } from './Details';
import { BlkTxt } from '../global';

type DetailsProps = JSX.IntrinsicElements['details'] & {
	id: number | string;
	name: string;
	content: string | Array<string>;
	icon?: '\ue456' | '\ue677';
};

export default function Details({ id, name, content, icon }: DetailsProps) {
	console.log('Details Component:', id, name, content, icon);

	return (
		<Wrapper>
			<Summary>
				<BlkTxt>Details Component: Summary BlkTxt</BlkTxt>
			</Summary>
		</Wrapper>
	);
}
