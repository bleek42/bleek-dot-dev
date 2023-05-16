'use client';

import { type BaseComponent } from '@/interfaces/BaseComponent';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';

import { Theme, GlobalStyle } from '@/components/global';

type StyledChildrenProps = Pick<BaseComponent, 'children'>;

export default function StyledRegistry({ children }: StyledChildrenProps) {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
	console.log(styledComponentsStyleSheet);
	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.getStyleTags();
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
