import { useState } from 'react';

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
	XTPrompt,
	XTxtArea,
} from './XTerm';

type XTermCols = 120 | 100 | 80 | 60 | 40 | 20 | 0;
type XTermRows = 100 | 90 | 80 | 70 | 60 | 50 | 40 | 0;

interface XTermSize {
	cols?: XTermCols;
	rows?: XTermRows;
	area?: (cols: XTermCols, rows: XTermRows) => number;
}

type XTermProps = JSX.IntrinsicElements['textarea'] & XTermSize;

export default function XTerm({ cols = 80, rows = 100, area }: XTermProps) {
	console.log(area, cols, rows);
	return (
		<XTMain>
			<XTerminal>
				<XTBtns id="xterm-btns">
					<Close
						id="xterm-close"
						type="reset"
						onClick={(evt) => console.info('xterm-close clicked', evt.target)}>
						{'[\ueb99]'}
					</Close>
					<Maxmz
						id="xterm-maxmz"
						type="button"
						onClick={(evt) => console.info('xterm-maxmz clicked', evt.target)}>
						{'[O]'}
					</Maxmz>
					<Minmz
						id="xterm-minmz"
						type="button"
						onClick={(evt) => console.info('xterm-minmz clicked', evt.target)}>
						{'[_]'}
					</Minmz>
				</XTBtns>
				<span>
					<code>Area: {area?.toString()} </code>
				</span>
				<XTLabel htmlFor="xt-1">
					<XTInput type="text" name="xt-1" placeholder="https://bleek.dev" />
				</XTLabel>
				<XTLabel htmlFor="shebang">
					`"${'SHELL'}":` <XTCode> #!/usr/bin/env bleek42</XTCode>
					<XTInput type="text" name="shebang" placeholder={'press enter to continue'} />
				</XTLabel>
				<XTxtArea
					name="xterm-txt"
					id="xterm-txt"
					cols={cols}
					rows={rows}
					autoCapitalize="off"
					autoCorrect="off"
					spellCheck={false}
					onSubmitCapture={(evt) => console.info('xterm-txt submit capture', evt.target)}
					onChange={(evt) => console.info('xterm-txt changed', evt.target)}
				/>
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
