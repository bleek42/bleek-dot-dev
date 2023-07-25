import { useRouter } from 'next/router';
import {
	useState,
	useCallback,
	type ChangeEvent,
	type FormEvent,
	type MutableRefObject,
	type SyntheticEvent,
} from 'react';
import { type DefaultTheme, type StyledComponentProps } from 'styled-components';

import useResizeObserver from '@/hooks/useResizeObserver';
import { XTForm, XTLabel, XTBtns, XTInput, XTCode, XTxtArea } from './XTerm';
import { BtnClose, BtnMax, BtnMin } from '@/components/common/Button';

import { type XTermComponent } from '@/interfaces/Component';
import { type ResizeObserverDimensions } from '@/interfaces/ResizeObserverDimensions';

type XTermState = XTermComponent;
type XTermViewportState = ResizeObserverDimensions;

export default function XTerm() {
	const xtermState: XTermState = {
		id: 'tty0',
		name: '/dev/tty0',
		prompt: '[visitor@bleek.dev(v0.7)->/tty0]/λ->',
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

	const handleResize = useCallback(
		<T extends HTMLElement>(target: T, entry: ResizeObserverEntry) => {
			console.info({ target });
			console.info({ entry });

			const { width, height, top, bottom, left, right, x, y } = entry.contentRect;

			const currentWidth = Math.round(width);
			const currentHeight = Math.round(height);

			if (width < 1024 && width >= 481) {
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

			if (width >= 1024) {
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

			if (width < 481) {
				setDimensions((prev) => ({
					...prev,
					cols: 20,
					rows: 20,
					area: 20 * 20,
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
			console.table(entry.devicePixelContentBoxSize);
		},

		[dimensions.width, dimensions.height]
	);

	const ref = useResizeObserver(handleResize) as MutableRefObject<HTMLTextAreaElement>;

	// eslint-disable-next-line no-console
	// console.info({ dimensions });
	// eslint-disable-next-line no-console
	console.info('ref+curr:', ref, ref?.current);

	const handleChange = (
		evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = evt.currentTarget;
		setXterm({ ...xterm, [name]: value });
	};

	return (
		<XTForm>
			<XTBtns id="xt-btns">
				<BtnClose
					id="xt-close"
					type="reset"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) =>
						console.info('xterm-close clicked', evt.target)
					}
				>
					{'[ \uf00d ]'}
				</BtnClose>
				<BtnMax
					id="xt-maxmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) =>
						console.info('xterm-maxmz clicked', evt.target)
					}
				>
					{'[ \ueb95 ]'}
				</BtnMax>
				<BtnMin
					id="xt-minmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) =>
						console.info('xterm-minmz clicked', evt.target)
					}
				>
					{'[ \uf2d1  ]'}
				</BtnMin>
			</XTBtns>
			{/* <span>
					<code>Area: {area?.toString()} </code>
				</span> */}
			<XTCode>{'[#!/usr/bin/bleek]'}</XTCode>
			<XTLabel
				htmlFor={xterm.id}
				form={'xt-form'}
				// eslint-disable-next-line no-console
				onSubmitCapture={(evt: SyntheticEvent<HTMLLabelElement>) =>
					console.info('xterm-txt submit capture', evt.target)
				}
			>
				<XTxtArea
					ref={ref}
					id={xterm.id}
					value={xterm.stdin || xterm.stdio}
					onChange={handleChange}
					// placeholder="Welcome to bleekDotDev: My name is Brandon C. Leek, & I am a FullStack Web Developer"
					// eslint-disable-next-line no-console
					// onSubmit={(evt: FormEvent<HTMLTextAreaElement>) => {
					// 	console.info('xterm-txt submit capture', evt.target);
					// 	// ! TODO: backlog, execute text input, give output, use for something fun/playful to do on landing page, use in other projects..!
					// 	setXterm((vals) => ({ ...vals, isExec: true }));
					// }}
					// onClickCapture={(evt: SyntheticEvent<HTMLTextAreaElement>) => {
					// 	console.log({ onTouchMoveEvent: { ...evt } });
					// 	router.push('/home');
					// }}
				></XTxtArea>
				<XTCode>{xterm.prompt.toString()}</XTCode>
				<XTInput
					id="xt-prompt"
					type="text"
					name="xt-prompt"
					// value={xterm.name}

					onChange={handleChange}
					placeholder={'press enter to continue'}
				/>
				{/* {'[visitor@https://bleek.dev-$>'} */}
			</XTLabel>
		</XTForm>
	);
}
