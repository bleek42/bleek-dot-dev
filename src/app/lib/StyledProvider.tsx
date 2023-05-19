'use client';

import { type BaseComponent } from '@/interfaces/BaseComponent';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';

import { Theme, GlobalStyle } from '@/components/global/Theme';

type StyledChildrenProps = Pick<BaseComponent<'styled-provider'>, 'children'>;

export default function StyledProvider({ children }: StyledChildrenProps) {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
	console.log(styledComponentsStyleSheet);
	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		console.log(styles);
		styledComponentsStyleSheet.seal();
		return <>{styles}</>;
	});

	if (typeof window !== 'undefined') return <>{children}</>;

	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</StyleSheetManager>
	);
}
