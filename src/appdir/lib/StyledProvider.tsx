import React, { Fragment, ReactNode, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';

import {
	type DefaultTheme,
	type ThemeProps,
	type ThemedStyledProps,
	type ThemeContext,
	type ThemeProviderProps,
	type StyledComponentProps,
	ServerStyleSheet,
	StyleSheetManager,
	ThemeProvider,
	ThemeConsumer,
	AnyStyledComponent,
} from 'styled-components';
import { theme, GlobalStyle } from '@/components/global/Theme';

interface StyledChildrenProps {
	children: AnyStyledComponent | AnyStyledComponent[] | ReactNode | ReactNode[] | null;
	defaultTheme?: DefaultTheme;
}

export default function StyledProvider({
	children,
	defaultTheme = theme,
}: StyledChildrenProps) {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet, setStyledComponentsStyleSheet] = useState(
		() => new ServerStyleSheet()
	);
	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		console.log(styles);
		if (styles && styledComponentsStyleSheet.instance) {
			console.log(
				'styled provder instance loaded & OK!',
				styledComponentsStyleSheet.instance
			);
			console.log('instance.getStyleElement() value', styles);
			return <>{styles}</>;
		}
		styledComponentsStyleSheet.seal();
	});

	return (
		<Fragment>
			{typeof window !== 'undefined' && <>{children}</>}
			{window && (
				<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
					<ThemeProvider theme={defaultTheme}>
						<GlobalStyle />
						{children}
					</ThemeProvider>
				</StyleSheetManager>
			)}
		</Fragment>
	);
}
