import '@testing-library/jest-dom';
import 'jest-styled-components';

import { type RenderOptions, configure, render } from '@testing-library/react';
import {
	ThemeProvider,
	type ThemeProviderComponent,
	type AnyStyledComponent,
	type DefaultTheme,
	type StyledComponentProps,
} from 'styled-components';

import Meta from '@/components/common/Meta';
import PageLayout from '@/pages/lib/PageLayout';
import { theme, GlobalStyle } from '@/components/common';

import { ReactElement, ReactNode } from 'react';
// import { Component } from '@/interfaces/Component';
const setupConfig = configure({
	computedStyleSupportsPseudoElements: true,
	throwSuggestions: true,
	showOriginalStackTrace: true,
});

export const PageProviders = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<Meta />
			<GlobalStyle />
			<PageLayout>{children}</PageLayout>
		</ThemeProvider>
	);
};

const styledRender = (
	ui: ReactElement<
		StyledComponentProps<
			AnyStyledComponent,
			DefaultTheme,
			object,
			string | number | symbol
		>
	>,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: PageProviders, ...options });

export * from '@testing-library/react';
export { styledRender as render };

export default setupConfig;
