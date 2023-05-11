import type { BaseComponentProps } from '@prop-types/base.component.props';

import { BlkTxt } from '@global/Text';

import { List as Wrapper, Item } from './List';

type ListProps = BaseComponentProps & {
	items?: Array<string | Record<string, unknown>>;
};

export default function List(props: ListProps) {
	console.log('List:', props);

	return (
		<Wrapper>
			{!props.items ||
				(props.items.length <= 0 && <Item>No items to display in list component...</Item>)}
			{props?.items &&
				props.items.length > 0 &&
				props.items.map((item, idx) => (
					<Item key={item?.id || idx}>
						{item && <BlkTxt>{item.toString()}</BlkTxt>}
						{item?.url && (
							<BlkTxt>
								this is an item in the List component with a url prop:
								<a href={item.url} target="_blank" rel="noreferrer">
									{item?.text || 'click here'}
								</a>
							</BlkTxt>
						)}
						{!item.url && (
							<BlkTxt>
								this is an item in the List component with a text prop: {item.text}
							</BlkTxt>
						)}
					</Item>
				))}
		</Wrapper>
	);
}
