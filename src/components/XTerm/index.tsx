import { useRouter } from 'next/router';
import { useState, type ChangeEvent, type FormEvent, type SyntheticEvent } from 'react';

import {
	XTForm,
	XTLabel,
	XTBtns,
	XTInput,
	XTCode,
	XTxtArea,
	XTIcon,
	XTPrompt,
} from './XTerm';
import { Btn } from '@/components/common';
import { type XTermComponent } from '@/interfaces/Component';

type XTermState = XTermComponent;

export default function XTerm() {
	const xtermState: XTermState = {
		id: 'tty0',
		name: '/dev/tty0',
		prompt: ' [ visitor@bleek.dev]  ﬦ',
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
		evt:
			| FormEvent<HTMLFormElement | HTMLTextAreaElement>
			| SyntheticEvent<HTMLElement>,
	) => {
		// console.log({ onClick: { ...evt } });
		await router.push('/home');
	};

	return (
		<XTForm id={xtermState.id}>
			<XTBtns id="xt-btns">
				<Btn
					id="xt-close-tty0"
					name="xt-close"
					type="reset"
					$colorPalette="secondary"
					$color="orange"
					$shadow="black"
					$align="center"
					$size="2.4em"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) => {
						evt.preventDefault();
						// console.info('xterm-close clicked');
						// console.log({ 'cls-btn': evt.target });
					}}
				>
					{'[ \uf00d ]'}
				</Btn>
				<Btn
					id="xt-maxmz-tty0"
					name="xt-maxmz"
					$colorPalette="secondary"
					$color="cyan"
					$shadow="black"
					$align="center"
					$size="2.4em"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) => {
						evt.preventDefault();
						// console.info('xterm-maxmz clicked');
						// console.log({ 'max-btn': evt.target });
					}}
				>
					{'[ \ueb95 ]'}
				</Btn>
				<Btn
					id="xt-minmz"
					type="button"
					$colorPalette="secondary"
					$color="green"
					$shadow="black"
					$align="center"
					$size="2.4em"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) => {
						evt.preventDefault();
						// console.info('xterm-minmz clicked');
						// console.log({ 'min-btn': evt.target });
					}}
				>
					{'[ \ueacc ]'}
				</Btn>
			</XTBtns>
			<XTCode>{'[#!/usr/bin/bleek]'}</XTCode>
			<XTLabel
				htmlFor={xterm.id}
				form={'xt-form'}
				// eslint-disable-next-line no-console
				onClick={handleRouteHome}
				onSubmitCapture={(evt: SyntheticEvent<HTMLLabelElement>) => {
					// evt.preventDefault();
					console.info('xterm-txt submit capture');
					console.log({ 'xt-submt-capt': evt.currentTarget });
				}}
			>
				<XTIcon $colorPalette={'secondary'} $color={'green'} $shadow={'black'}>
					{'\ue683'}
				</XTIcon>
				<XTxtArea
					id={xterm.id}
					defaultValue={
						" \n \n Hey there \uf4a2 \n \n  I'm Brandon: a Full Stack Web Developer!  \n \n \n  \ue736  \ue749  \ue718  \ue69d  \ue7ba  \n \n  \ue662  \ufab2  \ue712  \uebca  \ue702  \n \n \n  Click | Touch to proceed to...  \n \n \n \ue617  \uea9c  bleek.dev/home"
					}
				/>
				<XTPrompt>
					{xterm.prompt}
					<XTInput
						id={`xt-prompt-${xterm.id}`}
						name="xt-prompt"
						onChange={handleChange}
						defaultValue={'  '}
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
// 		// console.info({ target });
// 		// console.info({ entry });

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

// 		// console.warn('resizing:', currentWidth, currentHeight);
// 		// console.table(entry.borderBoxSize);
// 		// console.table(entry.devicePixelContentBoxSize);
// 	},

// 	[dimensions.width, dimensions.height]
// );

// const ref = useResizeObserver(handleResize) as MutableRefObject<HTMLTextAreaElement>;

// eslint-disable-next-line no-console
// // console.info({ dimensions });
// eslint-disable-next-line no-console
// // console.info('ref+curr:', ref, ref?.current);
