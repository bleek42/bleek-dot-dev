import { BaseComponentProps } from '@/props/base.component.props.ts';
import { Details as Wrapper, Summary } from './Details.ts';
import { MdTxt } from '@/components/global/Text.ts';

type DetailsProps = BaseComponentProps<'details'>;
// icon?: '\ue456' | '\ue677';

export default function Details({ id, name, content, icon }: DetailsProps) {
	console.log('Details Component:', id, name, content, icon);

	return (
		<Wrapper>
			<Summary>
				<MdTxt>Details Component: Summary BlkTxt</MdTxt>
			</Summary>
		</Wrapper>
	);
}
