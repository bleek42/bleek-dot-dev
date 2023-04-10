import type { StyledComponentProps, DefaultTheme, StyledComponent } from 'styled-components';
import type { ChangeEvent, ComponentType, RefObject } from 'react';

import { useState, useCallback } from 'react';

import useResizeObserver from '@hooks/useResizeObserver';
import { XTForm, XTLabel, XTBtnLabel, XTBtn, XTInput, XTCode, XTxtArea } from './XTerm';

interface XTermDimensions {
	width?: number | null;
	height?: number | null;
	cols?: number;
	rows?: number;
	area?: (cols: number, rows: number) => number;
	currentEntry?: ResizeObserverEntry;
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
	const [dimensions, setDimensions] = useState<XTermState>({});

	const handleResize = useCallback(
		(target: T, entry: ResizeObserverEntry) => {
			console.info('target:', target);
			console.info(entry);
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
			console.warn('resizing:', entry.borderBoxSize);
		},
		[dimensions]
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
			<XTBtnLabel id="xt-btns">
				<XTBtn
					id="xt-close"
					type="reset"
					// eslint-disable-next-line no-console
					onClick={(evt) => console.info('xterm-close clicked', evt.target)}>
					{'[\uf00d]'}
				</XTBtn>
				<XTBtn
					id="xt-maxmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt) => console.info('xterm-maxmz clicked', evt.target)}>
					{'[\ueb95]'}
				</XTBtn>
				<XTBtn
					id="xt-minmz"
					type="button"
					// eslint-disable-next-line no-console
					onClick={(evt) => console.info('xterm-minmz clicked', evt.target)}>
					{'[ \uf2d1 ]'}
				</XTBtn>
			</XTBtnLabel>
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
