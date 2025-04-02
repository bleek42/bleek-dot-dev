import { useRouter } from 'next/router';
import { useCallback, useState, type ChangeEvent, type FormEvent, type SyntheticEvent } from 'react';

import useResizeObserver from '@/hooks/useResizeObserver';
import { Form, Label, Btns, Input, Code, TextArea } from './Form';
import { Btn, BtnClose, BtnMax, BtnMin } from '@/components/universal/Button';

import {
	XTForm,
	XTLabel,
	XTBtns,
	XTInput,
	XTCode,
	XTxtArea,
	XTIcon,
	XTPrompt,
} from './Form';
import { Btn } from '@/components/common';
import { type XTermComponent } from '@/interfaces/Component';

type XTermState = XTermComponent;

export default function XTerm() {
	const xtermState: XTermState = {
		id: 'tty0',
		name: '/dev/tty0',
		prompt: Symbol(' [ visitor@bleek.dev]  ﬦ'),
		stdin: '',
		stdio: '',
		stderr: null,
		isExec: null,
	};

interface UXTermDimensions {
	cols: number;
	rows: number;
	area: number;
	width?: number;
	height?: number;
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
	x?: number;
	y?: number;
}

type T = Element;

type UXTermComponentProps = StyledComponentProps<
	'form' | 'input' | 'tearea' | 'button',
	DefaultTheme,
	ComponentType<any>,
	never
> &
	UXTermDimensions;

type UXTermState = UXTermDimensions;

export default function UXTerm() {
	const [values, setValues] = useState({ '-tearea': '', '-prompt': '' });
	const [dimensions, setDimensions] = useState<UXTermState>({ cols: 20, rows: 20, area: 20 * 20 });
	const [xterm, setXterm] = useState<XTermState>(xtermState); // ? set execute state true, leave landing page to /home
	const router = useRouter();

	const handleChange = (
		evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {

			const currentWidth = Math.round(width);
			const currentHeight = Math.round(height);

			if (currentWidth < 481) {
				setDimensions((prev) => ({
					...prev,
					width: currentWidth,
					height: currentHeight,
					top,
					bottom,
					left,
					right,
					x,
					y,
				}));
			}
			if (currentWidth < 1024 && currentWidth > 480) {
				setDimensions((prev) => ({
					...prev,
					cols: 60,
					rows: 60,
					area: 60 * 60,
					width: currentWidth,
					height: currentHeight,
					top,
					bottom,
					left,
					right,
					x,
					y,
				}));
			}

			if (currentWidth >= 1024) {
				setDimensions((prev) => ({
					...prev,
					cols: 80,
					rows: 36,
					area: 80 * 36,
					width: currentWidth,
					height: currentHeight,
					top,
					bottom,
					left,
					right,
					x,
					y,
				}));
			}

			console.warn('resizing:', currentWidth, currentHeight);
			console.table(entry.borderBoxSize);
			console.table(entry.contentRect);
			console.table(entry.contentBoxSize);
			console.table(entry.devicePixelContentBoxSize);
			console.table(entry.target);
		}
		// [dimensions?.width]
	}


	const { ref } = useResizeObserver(handleResize);

	// eslint-disable-ne-line no-console
	console.info('curr -dims. state:', dimensions);
	// eslint-disable-ne-line no-console
	console.info('ref+curr:', ref, ref?.current);
	const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const { name, value } = evt.currentTarget;
		setXterm({ ...xterm, [name]: value });
	};

	const handleRouteHome = async (
		evt:
			| FormEvent<HTMLFormElement | HTMLTextAreaElement>
			| SyntheticEvent<HTMLElement>,
	) => {
		// console.log({ onClick: { ...evt } });
		await router.push('/home');
	};

	return (
		<Form ref={ref as RefObject<HTMLFormElement>}>
			<Btns id="-btns">
				<BtnClose
					id="-close"
					type="reset"
					// eslint-disable-ne-line no-console
					onClick={(evt) => console.info('erm-close clicked', evt.target)}>
					{'[\uf00d]'}
				</BtnClose>
				<BtnMax
					id="-maxmz"
					type="button"
					// eslint-disable-ne-line no-console
					onClick={(evt) => console.info('erm-maxmz clicked', evt.target)}>
					{'[\ueb95]'}
				</BtnMax>
				<BtnMin
					id="-minmz"
					type="button"
					// eslint-disable-ne-line no-console
					onClick={(evt) => console.info('erm-minmz clicked', evt.target)}>
					{'[ \uf2d1 ]'}
				</BtnMin>
			</Btns>
			{/* <span>
					<code>Area: {area?.toString()} </code>
				</span> */}
			<Code>[#!/usr/bin/bleek]</Code>
			<TextArea
				id="-tearea"
				name="-tearea"
				value={values['-tearea']}
				cols={dimensions.cols}
				rows={dimensions.rows}
				autoCapitalize="off"
				autoCorrect="off"
				spellCheck={false}
				placeholder="Welcome to bleekDotDev: My name is Brandon C. Leek, & I am a FullStack Web Developer"
				// eslint-disable-ne-line no-console
				onSubmitCapture={(evt: SubmitEvent) => console.info('UXTerm-text submit capture', evt.target)}
				onChange={handleChange}
			/>
			<Label
				htmlFor="-prompt"
				// eslint-disable-ne-line no-console
				>
				{'[visitor@https://bleek.dev-$>'}
				<Input
					type="te"
					id="-prompt"
					name="-prompt"
					value={values['-prompt']}
					onChange={handleChange}
					onSubmitCapture={(evt: SubmitEvent) => console.info('UXTerm-input submit capture', evt.target)}
					placeholder={'press enter to continue'}
				/>
			</Label>
		</Form>
	);
}

{
	/* <span
className="erm-row"
id="row-1">
<code>{'>'}</code>
</span>
<span
className="erm-row"
id="row-2">
<code>{'>'}</code>
</span>
<span
className="erm-row"
id="row-3">
<code>{'>'}</code>
</span>
<span
className="erm-row"
				id="row-4">
				<code>{'>'}</code>
				</span>
				<span
				className="erm-row"
				id="row-5">
				<code>{'>'}</code>
				</span>
				<span
				className="erm-row"
				id="row-6">
				<code>{'>'}</code>
				</span>
				<span
				className="erm-row"
				id="row-7">
				<code>{'>'}</code>
				</span>
				<span
				className="erm-row"
				id="row-8">
				<code>{'>'}</code>
				</span>
				<span
				className="erm-row"
				id="row-9">
				<code>{'>'}</code>
				</span>
				<span
				className="erm-row"
				id="row-9">
			<code>{'>'}</code> */
}
{
	/* </span> */
}

{
	/* <section id="erm-shell">
				<span id="erm-shebang">
					<code>#!/usr/bin/env bash</code>
				</span>
				<span id="prompt">
					<code>
						{'<<<[visitor@https://bleek.dev:]>>> press Y to continue'}
					</code>
				</span> */
}
>>>>>>> 7f40928 (renamed xterm to form component; changed components/globol to univversal; updated & moved deps to opt install block;):src/components/Form/index.tsx
