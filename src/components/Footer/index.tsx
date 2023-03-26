import { Wrapper } from "./Footer";
import { BlkTxt } from "../global";

type FooterProps = JSX.IntrinsicElements["footer"] & {
	id: number | string;
	name: string;
	icon?: "\ue450" | "\ue233" | "\ue344" | null;
};

export default function Footer({ id, name, icon }: FooterProps) {
	console.log("Footer:", id, name, icon);

	return (
		<Wrapper>
			<i>{"<NoIcon />"}</i>
			<BlkTxt>version 0.4.4 by bleek42</BlkTxt>
		</Wrapper>
	);
}
