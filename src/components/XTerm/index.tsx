import type { StyledComponentProps, DefaultTheme, StyledComponent } from 'styled-components';
import type { ChangeEvent, ComponentType, RefObject } from 'react';

import { useState, useCallback } from 'react';

import useResizeObserver from '@hooks/useResizeObserver';
import { XTForm, XTLabel, XTBtns, XTInput, XTCode, XTxtArea } from './XTerm';
import { Btn } from '@global/Button';

interface XTermDimensions {
	cols?: number;
	rows?: number;
	area?: number;
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

type XTermComponentProps = StyledComponentProps<
	'form' | 'input' | 'textarea' | 'button',
	DefaultTheme,
	ComponentType<any>,
	never
> &
	XTermDimensions;

type XTermState = XTermDimensions;

export default function XTerm() {
	const [values, setValues] = useState({ 'xt-textarea': '', 'xt-prompt': '' });
	const [dimensions, setDimensions] = useState<XTermState>({ cols: 20, rows: 20, area: 20 * 20 });

	const handleResize = useCallback(
		(target: T, entry: ResizeObserverEntry) => {
			console.info('target:', target);
			console.info(entry);
			const { borderBoxSize, contentRect, contentBoxSize, devicePixelContentBoxSize } = entry;
			const { width, height, top, bottom, left, right, x, y } = contentRect;
			// let cols: number;
			// let rows: number;
			// let area: number;

			const currentWidth = Math.round(width);
			const currentHeight = Math.round(height);
			console.log(currentWidth, currentHeight);

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

			console.warn('resizing:', contentRect);
		},
		[dimensions.cols, dimensions.rows, dimensions.area, dimensions.width]
	);

	const { ref } = useResizeObserver(handleResize);

	// eslint-disable-next-line no-console
	console.info('curr xt-dims. state:', dimensions);
	// eslint-disable-next-line no-console
	console.info('ref+curr:', ref, ref?.current);
	const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const { name, value } = evt.currentTarget;
		setValues({ ...values, [name]: value });
	};

	return (
		<XTForm ref={ref as RefObject<HTMLFormElement>}>
			<XTBtns id="xt-btns">
				<Btn
					id="xt-close"
					type="reset"
					// eslint-disable-next-line no-console
					onClick={(evt) => console.info('xterm-close clicked', evt.target)}>
					{'[\uf00d]'}
				</Btn>
				<Btn
					id="xt-maxmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt) => console.info('xterm-maxmz clicked', evt.target)}>
					{'[\ueb95]'}
				</Btn>
				<Btn
					id="xt-minmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt) => console.info('xterm-minmz clicked', evt.target)}>
					{'[ \uf2d1 ]'}
				</Btn>
			</XTBtns>
			{/* <span>
					<code>Area: {area?.toString()} </code>
				</span> */}
			<XTCode>[#!/usr/bin/bleek]</XTCode>
			<XTxtArea
				id="xt-textarea"
				name="xt-textarea"
				value={values['xt-textarea']}
				cols={dimensions.cols}
				rows={dimensions.rows}
				autoCapitalize="off"
				autoCorrect="off"
				spellCheck={false}
				placeholder="Welcome to bleekDotDev: My name is Brandon C. Leek, & I am a FullStack Web Developer"
				// eslint-disable-next-line no-console
				onSubmitCapture={(evt) => console.info('xterm-txt submit capture', evt.target)}
				onChange={handleChange}
			/>
			<XTLabel
				htmlFor="xt-prompt"
				// eslint-disable-next-line no-console
				onSubmitCapture={(evt) => console.info('xterm-txt submit capture', evt.target)}>
				{'[visitor@https://bleek.dev-$>'}
				<XTInput
					type="text"
					id="xt-prompt"
					name="xt-prompt"
					value={values['xt-prompt']}
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
