import Image from 'next/image';
import { useRouter } from 'next/router';
import {
	useState,
	useCallback,
	type ChangeEvent,
	type FormEvent,
	type MutableRefObject,
	type SyntheticEvent,
	SetStateAction,
} from 'react';
// import { type DefaultTheme, type StyledComponentProps } from 'styled-components';

import useResizeObserver from '@/hooks/useResizeObserver';
import { XTForm, XTLabel, XTBtns, XTInput, XTCode, XTxtArea } from './XTerm';
import { BtnClose, BtnMax, BtnMin } from '@/components/common/Button';
import { type XTermComponent } from 'src/interfaces/Component';
import { type ResizeObserverDimensions } from '@/interfaces/ResizeObserverDimensions';

type XTermState = XTermComponent;
type XTermViewportState = ResizeObserverDimensions;

export default function XTerm() {
	const xtermState: XTermState = {
		id: 'tty0',
		name: '/dev/tty0',
		prompt: '[visitor@bleek.dev]λ->>',
		stdin: '',
		stdio: '',
		stderr: null,
		isExec: null,
	};

	const xtermViewportState: XTermViewportState = {
		area: 20 * 20,
	};

	const [xterm, setXterm] = useState<XTermState>(xtermState); // ? set execute state true, leave landing page to /home
	const [dimensions, setDimensions] = useState<XTermViewportState>(xtermViewportState);

	const router = useRouter();

	const handleChange = (
		evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = evt.currentTarget;
		setXterm({ ...xterm, [name]: value });
	};

	const handleContinueRoute = async (
		evt: FormEvent<HTMLTextAreaElement> | SyntheticEvent<HTMLElement>
	) => {
		console.log({ onClick: { ...evt } });
		await router.push('/home');
	};

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
					{'[ \uf2d1  ]'}
				</BtnMin>
			</XTBtns>
			<XTCode>{'[#!/usr/bin/bleek]'}</XTCode>
			<XTLabel
				htmlFor={xterm.id}
				form={'xt-form'}
				// eslint-disable-next-line no-console
				onSubmitCapture={(evt: SyntheticEvent<HTMLLabelElement>) => {
					evt.preventDefault();
					console.info('xterm-txt submit capture');
					console.log({ 'xt-submt-capt': evt.currentTarget });
				}}
			>
				<XTxtArea id={xterm.id} defaultValue={null} />
				<XTCode>
					{xterm.prompt.toString()}
					<XTInput
						id="xt-prompt"
						name="xt-prompt"
						onChange={handleChange}
						placeholder={'__'}
						// value={xterm.name}
					/>
				</XTCode>
			</XTLabel>
		</XTForm>
	);
}
