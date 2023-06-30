import { type DefaultTheme, type StyledComponent } from 'styled-components';
import { type DetailsComponent } from '@/interfaces/Component.ts';

import { Details as Wrapper, Summary } from './Details.ts';
import { MdTxt } from '@/components/global/Text.ts';

type DetailsProps = StyledComponent<
	'details',
	DefaultTheme,
	DetailsComponent,
	string | number | symbol
>;
// icon?: '\ue456' | '\ue677';

export default function Details(props: DetailsProps) {
	console.log('Details Component:', props);

	return (
		<Wrapper>
			<Summary>
				<MdTxt>Details Component: Summary BlkTxt</MdTxt>
			</Summary>
		</Wrapper>
	);
}
