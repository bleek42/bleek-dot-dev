import type { StyledComponentProps, DefaultTheme, StyledComponent } from 'styled-components';
import type { ChangeEvent, ComponentType, RefObject } from 'react';

import { useState, useCallback } from 'react';

import useResizeObserver from '@hooks/useResizeObserver';
import {
	XTMain,
	XTerminal,
	XTLabel,
	XTInput,
	XTCode,
	XTBtns,
	Close,
	Minmz,
	Maxmz,
	XTxtArea,
} from './XTerm';

interface XTermDimensions {
	currentEntry: ResizeObserverEntry;
	width: number;
	height: number;
	cols: number;
	rows: number;
	area?: (cols: number, rows: number) => number;
}

type T = Element;

type XTermComponent = StyledComponentProps<
	'form' | 'textarea',
	DefaultTheme,
	ComponentType<any>,
	never
>;

type XTermState = XTermDimensions;

export default function XTerm() {
	const [values, setValues] = useState({ 'xt-textarea': '', 'xt-prompt': '' });
	const [dimensions, setDimensions] = useState<ResizeObserverEntry>();

	const handleResize = useCallback(
		(target: T, entry: ResizeObserverEntry) => {
			const { width, height } = entry.contentRect;
			let cols: number;
			let rows: number;

			if (width <= 480) {
				cols = 20;
				rows = 20;
				setDimensions((prev) => ({
					...prev,
					...entry,
					cols,
					rows,
					arear: (cols, rows) => cols * rows,
				}));
			}

			if (width >= 480 || width <= 1024) {
				cols = 60;
				rows = 60;
				setDimensions((prev) => ({
					...prev,
					...entry,
					cols,
					rows,
					area: (cols, rows) => cols * rows,
				}));
			}
			if (width > 1024) {
				cols = 80;
				rows = 36;
				setDimensions((prev) => ({
					...prev,
					...entry,
					cols,
					rows,
					area: (cols, rows) => cols * rows,
				}));
			}
		},
		[dimensions]
	);

	const { ref } = useResizeObserver(handleResize);

	console.log(dimensions);
	const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const { name, value } = evt.currentTarget;
		setValues({ ...values, [name]: value });
	};

	return (
		<XTerminal ref={ref as RefObject<HTMLFormElement>}>
			<XTBtns id="xterm-btns">
				<Close
					id="xterm-close"
					type="reset"
					onClick={(evt) => console.info('xterm-close clicked', evt.target)}>
					{'[\uf00d]'}
				</Close>
				<Maxmz
					id="xterm-maxmz"
					type="button"
					onClick={(evt) => console.info('xterm-maxmz clicked', evt.target)}>
					{'[\ueb95]'}
				</Maxmz>
				<Minmz
					id="xterm-minmz"
					type="button"
					onClick={(evt) => console.info('xterm-minmz clicked', evt.target)}>
					{'[ \uf2d1 ]'}
				</Minmz>
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
				onSubmitCapture={(evt) => console.info('xterm-txt submit capture', evt.target)}
				onChange={handleChange}
			/>
			<XTLabel
				htmlFor="xt-prompt"
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
		</XTerminal>
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
