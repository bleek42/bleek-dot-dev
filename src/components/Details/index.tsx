'use client';

import { Details as Wrapper, Summary } from './Details.ts';
import { MdTxt } from '@/components/global';

type DetailsProps = JSX.IntrinsicElements['details' & 'summary' & 'img'] & {
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
				<MdTxt>Details Component: Summary BlkTxt</MdTxt>
			</Summary>
		</Wrapper>
	);
}
