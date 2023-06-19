import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import type { ChangeEvent, ComponentType, RefObject } from 'react';
import type {
	StyledComponentProps,
	DefaultTheme,
	StyledComponent,
	AnyStyledComponent,
} from 'styled-components';

import useResizeObserver from '@/hooks/useResizeObserver';
import type { ResizeObserverDimensions } from '@/interfaces/ResizeObserverDimensions';
// import type { XTermComponentProps } from '@/props/base.component.props';
import { XTForm, XTLabel, XTBtns, XTInput, XTCode, XTxtArea } from './XTerm';
import { Btn, BtnClose, BtnMax, BtnMin } from '@/components/global/Button';
import { Component, XTermComponent } from '@/interfaces/Component';

type XTermState = XTermComponent;
type XTermViewportState = ResizeObserverDimensions;
type XTermProps = StyledComponentProps<
	'textarea',
	DefaultTheme,
	XTermComponent,
	string | number | symbol
> &
	XTermComponent;

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

	const handleResize = useCallback(
		<T extends Element>(target: T, entry: ResizeObserverEntry) => {
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
			console.table(entry.target);
		},
		[dimensions.width]
	);

	const { ref } = useResizeObserver(handleResize);

	// eslint-disable-next-line no-console
	console.info({ dimensions });
	// eslint-disable-next-line no-console
	console.info('ref+curr:', ref, ref?.current);

	const handleChange = (
		evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = evt.currentTarget;
		setXterm({ ...xterm, [name]: value });
	};

	return (
		<XTForm ref={ref as RefObject<HTMLFormElement>}>
			<XTBtns id="xt-btns">
				<BtnClose
					id="xt-close"
					type="reset"
					// eslint-disable-next-line no-console
					onClick={(evt) => console.info('xterm-close clicked', evt.target)}
				>
					{'[\uf00d]'}
				</BtnClose>
				<BtnMax
					id="xt-maxmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt) => console.info('xterm-maxmz clicked', evt.target)}
				>
					{'[\ueb95]'}
				</BtnMax>
				<BtnMin
					id="xt-minmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt) => console.info('xterm-minmz clicked', evt.target)}
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
				onSubmit={(evt) => {
					console.info('xterm-txt submit capture', evt.target);
					// ! TODO: backlog, execute text input, give output, use for something fun/playful to do on landing page, use in other projects..!
					setXterm((vals) => ({ ...vals, exec: true }));
				}}
			></XTxtArea>
			<XTLabel
				htmlFor="xt-prompt"
				// eslint-disable-next-line no-console
				onSubmitCapture={(evt) =>
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

{
	/* <span
className="xterm-row"
id="row-1">
<code>{'>'}</code>
</span>
<span
className="xterm-row"
id="row-2">
<code>{'>'}</code>
</span>
<span
className="xterm-row"
id="row-3">
<code>{'>'}</code>
</span>
<span
className="xterm-row"
				id="row-4">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-5">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-6">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-7">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-8">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-9">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-9">
			<code>{'>'}</code> */
}
{
	/* </span> */
}

{
	/* <section id="xterm-shell">
				<span id="xterm-shebang">
					<code>#!/usr/bin/env bash</code>
				</span>
				<span id="prompt">
					<code>
						{'<<<[visitor@https://bleek.dev:]>>> press Y to continue'}
					</code>
				</span> */
}
