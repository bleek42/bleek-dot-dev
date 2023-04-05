import type { StyledComponentProps, DefaultTheme, StyledComponent } from 'styled-components';
import type { ChangeEvent, ComponentType } from 'react';

import { useRef, useState, useEffect, useCallback } from 'react';

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
// import useResizeObserver from '@hooks/useResizeObserver';

// type XTermCols = 120 | 100 | 80 | 60 | 40 | 20 | 0;
// type XTermRows = 100 | 90 | 80 | 70 | 60 | 50 | 40 | 0;

interface XTermDimensions {
	cols: number;
	rows: number;
	area?: (cols: number, rows: number) => number;
}

type XTermState = StyledComponentProps<
	'form' | 'textarea',
	DefaultTheme,
	ComponentType<unknown>,
	never
> &
	XTermDimensions;
export default function XTerm() {
	const [values, setValues] = useState({ 'xt-textarea': '', 'xt-prompt': '' });

	const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const { name, value } = evt.currentTarget;
		setValues({ ...values, [name]: value });
	};

	return (
		<XTMain>
			<XTerminal>
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
					cols={30}
					rows={30}
					autoCapitalize="off"
					autoCorrect="off"
					spellCheck={false}
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
		</XTMain>
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
