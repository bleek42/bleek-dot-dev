// import '../styles/XTerm.scss';
import type { FC } from 'react';

import { BaseProps } from '../types/interfaces/BaseProps.ts'

type XTermProps = BaseProps & {
	id: number;
	cols: Array<40 | 60 | 80 | 100>;
	rows: Array<40 | 60 | 80 | 100>;
	content?: string;
};

export default function XTerm<FC<XTermProps>>({ id, cols, rows, content }: XTermProps): JSX.Element {
	return (
		<main>
			<div id='xterm-container'>
				<section id='xterm-top'>
					<span id='xterm-btns'>
						<button
							id='xterm-close'
							type='reset'
							onClick={(e) => console.info('xterm-close clicked', evt.target)}>
							{'[X]'}
						</button>
						<button
							id='xterm-maxmz'
							type='button'
							onClick={(evt) => console.info('xterm-maxmz clicked', evt.target)}>
							{'[O]'}
						</button>
						<button
							id='xterm-minmz'
							type='button'
							onClick={(e) => console.info('xterm-minmz clicked', evt.target)}>
							{'[_]'}
						</button>
					</span>
				</section>
				<section id='xterm-shell'>
					<span id='xterm-shebang'>
						<code>#!/usr/bin/env bash</code>
					</span>
					<span id='prompt'>
						<code>{'<<<[visitor@https://bleek.dev:]>>> press Y to continue'}</code>
					</span>
					<textarea
						name='xterm-txt'
						id='xterm-txt'
						cols={cols}
						rows={rows}
						autoCapitalize='off'
						autoCorrect='off'
						spellCheck={false}
						onSubmitCapture={(evt) =>
							console.info('xterm-txt submit capture', evt.target)
						}
						onChange={(evt) => console.info('xterm-txt changed', evt.target)}></textarea>
				</section>
				{/* <span
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
				<code>{'>'}</code> */}
				{/* </span> */}
			</div>
		</main>
	);
}
