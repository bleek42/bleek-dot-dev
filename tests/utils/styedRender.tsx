import { render, type RenderOptions } from '@testing-library/react';

import {
	ThemeProvider,
	type ThemeProviderComponent,
	type AnyStyledComponent,
	type DefaultTheme,
	type StyledComponentProps,
} from 'styled-components';
// import {  } from '@testing-library/react';

import Meta from '@/components/common/Meta';
import PageLayout from '@/pages/lib/PageLayout';
import { theme, GlobalStyle } from '@/components/common';

import { ReactElement, ReactNode } from 'react';

export const StyledThemeProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<PageLayout>{children}</PageLayout>
		</ThemeProvider>
	);
};

export const styledRender = (
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
