import { useRouter } from 'next/router';
import {
	useState,
	useCallback,
	type ChangeEvent,
	type FormEvent,
	type SyntheticEvent,
} from 'react';

import { type XTermComponent } from '@/interfaces/Component';
import {
	type XTermProps,
	XTForm,
	XTLabel,
	XTBtns,
	XTInput,
	XTCode,
	XTxtArea,
	XTIcon,
	XTPrompt,
} from './XTerm';
import { BtnClose, BtnMax, BtnMin, Icon } from '@/components/common';
// import { printIntrospectionSchema } from 'graphql';
// import { type DefaultTheme, type StyledComponentProps } from 'styled-components';
// import { type ResizeObserverDimensions } from '@/interfaces/ResizeObserverDimensions';
// import useResizeObserver from '@/hooks/useResizeObserver';

type XTermState = XTermComponent;
// type XTermViewportState = ResizeObserverDimensions;

export default function XTerm() {
	const xtermState: XTermState = {
		id: 'tty0',
		name: '/dev/tty0',
		prompt: '  [ visitor@bleek.dev]   ﬦ ', //  [visitor@bleek.dev]λ->>
		stdin: '',
		stdio: '',
		stderr: null,
		isExec: null,
	};

	const [xterm, setXterm] = useState<XTermState>(xtermState); // ? set execute state true, leave landing page to /home

	const router = useRouter();

	const handleChange = (
		evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		const { name, value } = evt.currentTarget;
		setXterm({ ...xterm, [name]: value });
	};

	const handleRouteHome = async (
		evt: FormEvent<HTMLTextAreaElement> | SyntheticEvent<HTMLElement>,
	) => {
		console.log({ onClick: { ...evt } });
		await router.push('/home');
	};

	return (
		<XTForm>
			<XTBtns id="xt-btns">
				<BtnClose
					id="xt-close"
					type="reset"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) => {
						evt.preventDefault();
						console.info('xterm-close clicked');
						console.log({ 'cls-btn': evt.target });
					}}
				>
					{'[ \uf00d ]'}
				</BtnClose>
				<BtnMax
					id="xt-maxmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) => {
						evt.preventDefault();
						console.info('xterm-maxmz clicked');
						console.log({ 'max-btn': evt.target });
					}}
				>
					{'[ \ueb95 ]'}
				</BtnMax>
				<BtnMin
					id="xt-minmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) => {
						evt.preventDefault();
						console.info('xterm-minmz clicked');
						console.log({ 'min-btn': evt.target });
					}}
				>
					{'[ \uf2d1 ]'}
				</BtnMin>
			</XTBtns>
			<XTCode>{'[#!/usr/bin/bleek]'}</XTCode>
			<XTLabel
				htmlFor={xterm.id}
				form={'xt-form'}
				// eslint-disable-next-line no-console
				onClick={handleRouteHome}
				onSubmitCapture={(evt: SyntheticEvent<HTMLLabelElement>) => {
					evt.preventDefault();
					console.info('xterm-txt submit capture');
					console.log({ 'xt-submt-capt': evt.currentTarget });
				}}
			>
				<XTIcon
					size={'40px'}
					colorPalette={'secondary'}
					color={'green'}
					shadow={'black'}
				>
					{'\ue683'}
				</XTIcon>
				<XTxtArea
					id={xterm.id}
					defaultValue={
						" \n \n Hey there \uf4a2 \n \n I'm Brandon: a Full Stack Web Dev! \n \n \n  \ue736  \ue749  \ue718  \ue69d  \ue7ba  \n \n  \ue662  \ufab2  \ue712  \uebca  \ue702  \n \n \n  Click | Touch here to proceed to . . .  \n \n \n  \uea9c  \ue617  \n \n  bleek.dev/home  "
					}
				/>
				<XTPrompt>
					{xterm.prompt}
					<XTInput
						id="xt-prompt"
						name="xt-prompt"
						value={xterm.name}
						onChange={handleChange}
						// defaultValue={'\ue691'}
					/>
				</XTPrompt>
			</XTLabel>
		</XTForm>
	);
}

// const xtermViewportState: XTermViewportState = {
// 	area: 20 * 20,
// };
// const [dimensions, setDimensions] = useState<XTermViewportState>(xtermViewportState);

// const handleResize = useCallback(
// 	<T extends HTMLElement>(target: T, entry: ResizeObserverEntry) => {
// 		console.info({ target });
// 		console.info({ entry });

// 		const { width, height, top, bottom, left, right, x, y } = entry.contentRect;

// 		const currentWidth = Math.round(width);
// 		const currentHeight = Math.round(height);

// 		if (width < 1024 && width >= 481) {
// 			setDimensions(
// 				(prev): ResizeObserverDimensions => ({
// 					...prev,
// 					cols: 60,
// 					rows: 60,
// 					area: 60 * 60,
// 					width: currentWidth,
// 					height: currentHeight,
// 					top,
// 					bottom,
// 					left,
// 					right,
// 					x,
// 					y,
// 				})
// 			);
// 		}

// 		if (width >= 1024) {
// 			setDimensions((prev) => ({
// 				...prev,
// 				cols: 80,
// 				rows: 36,
// 				area: 80 * 36,
// 				width: currentWidth,
// 				height: currentHeight,
// 				top,
// 				bottom,
// 				left,
// 				right,
// 				x,
// 				y,
// 			}));
// 		}

// 		if (width < 481) {
// 			setDimensions((prev) => ({
// 				...prev,
// 				cols: 20,
// 				rows: 20,
// 				area: 20 * 20,
// 				width: currentWidth,
// 				height: currentHeight,
// 				top,
// 				bottom,
// 				left,
// 				right,
// 				x,
// 				y,
// 			}));
// 		}

// 		console.warn('resizing:', currentWidth, currentHeight);
// 		console.table(entry.borderBoxSize);
// 		console.table(entry.devicePixelContentBoxSize);
// 	},

// 	[dimensions.width, dimensions.height]
// );

// const ref = useResizeObserver(handleResize) as MutableRefObject<HTMLTextAreaElement>;

// eslint-disable-next-line no-console
// console.info({ dimensions });
// eslint-disable-next-line no-console
// console.info('ref+curr:', ref, ref?.current);
