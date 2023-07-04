import { useRouter } from 'next/router';
import {
	type ChangeEvent,
	type RefObject,
	useState,
	useCallback,
	MutableRefObject,
	SyntheticEvent,
	FormEvent,
} from 'react';
import {
	AnyStyledComponent,
	type DefaultTheme,
	type StyledComponentProps,
} from 'styled-components';

import { type XTermComponent } from '@/interfaces/Component';
import { type ResizeObserverDimensions } from '@/interfaces/ResizeObserverDimensions';
import { XTForm, XTLabel, XTBtns, XTInput, XTCode, XTxtArea } from './XTerm';
import useResizeObserver from '@/hooks/useResizeObserver';

import { Btn, BtnClose, BtnMax, BtnMin } from '@/components/global/Button';

type XTermState = XTermComponent;
type XTermViewportState = ResizeObserverDimensions;
type XTermProps = StyledComponentProps<
	'textarea',
	DefaultTheme,
	XTermState,
	string | number | symbol
>;

export default function XTerm(props: XTermProps) {
	const xtermState: XTermState = {
		name: '/dev/null/tty0',
		id: 'tty0',
		prompt: '[visitor@bleek.dev(v0.7)->/tty0]/λ->',
		isExec: null,
		stdin: '',
		stdio: '',
		stderr: '',
	};

	const xtermViewportState: XTermViewportState = {
		cols: 20,
		rows: 20,
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
			console.table(entry.devicePixelContentBoxSize);
		},
		[dimensions.width, dimensions.height]
	);

	const ref = useResizeObserver(handleResize) as MutableRefObject<HTMLFormElement>;

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
		<XTForm ref={ref}>
			<XTBtns id="xt-btns">
				<BtnClose
					id="xt-close"
					type="reset"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) =>
						console.info('xterm-close clicked', evt.target)
					}
				>
					{'[\uf00d]'}
				</BtnClose>
				<BtnMax
					id="xt-maxmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) =>
						console.info('xterm-maxmz clicked', evt.target)
					}
				>
					{'[\ueb95]'}
				</BtnMax>
				<BtnMin
					id="xt-minmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt: SyntheticEvent<HTMLButtonElement>) =>
						console.info('xterm-minmz clicked', evt.target)
					}
				>
					{'[ \uf2d1 ]'}
				</BtnMin>
			</XTBtns>
			{/* <span>
					<code>Area: {area?.toString()} </code>
				</span> */}
			<XTCode>[#!/usr/bin/bleek]</XTCode>
			<XTxtArea
				id="xt-textarea"
				name={xterm.name.toString()}
				// value={null}
				cols={dimensions.cols}
				rows={dimensions.rows}
				autoCapitalize="off"
				autoCorrect="off"
				spellCheck={false}
				// placeholder="Welcome to bleekDotDev: My name is Brandon C. Leek, & I am a FullStack Web Developer"
				// eslint-disable-next-line no-console
				onChange={handleChange}
				onSubmit={(evt: FormEvent<HTMLTextAreaElement>) => {
					console.info('xterm-txt submit capture', evt.target);
					// ! TODO: backlog, execute text input, give output, use for something fun/playful to do on landing page, use in other projects..!
					setXterm((vals) => ({ ...vals, exec: true }));
				}}
				onClickCapture={(evt: SyntheticEvent<HTMLTextAreaElement>) => {
					console.log({ onTouchMoveEvent: { ...evt } });
					router.push('/home');
				}}
			></XTxtArea>
			<XTLabel
				htmlFor="xt-prompt"
				// eslint-disable-next-line no-console
				onSubmitCapture={(evt: SyntheticEvent<HTMLLabelElement>) =>
					console.info('xterm-txt submit capture', evt.target)
				}
			>
				{/* {'[visitor@https://bleek.dev-$>'} */}
				<XTCode>{xterm.prompt.toString()}</XTCode>
				<XTInput
					type="text"
					id="xt-prompt"
					name="xt-prompt"
					// value={xterm.name}

					onChange={handleChange}
					placeholder={'press enter to continue'}
				/>
			</XTLabel>
		</XTForm>
	);
}
