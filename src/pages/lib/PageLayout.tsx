import {
	type ReactNode,
	type ReactElement,
	type ReactComponentElement,
	type JSX,
} from 'react';
import { type NextComponentType, type NextPageContext, type NextPage } from 'next';

import {
	type AppProps,
	type AppInitialProps,
	type AppContext,
	type AppType,
} from 'next/app';

import {
	type DefaultTheme,
	type ThemeProps,
	type ThemedStyledProps,
	type ThemeContext,
	type ThemeProviderProps,
	type StyledComponentProps,
	ThemeProvider,
	ThemeConsumer,
	AnyStyledComponent,
} from 'styled-components';
import { theme, GlobalStyle } from '@/components/global/Theme';

import StyledProvider from './StyledProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type CurrentPage = NextComponentType<
	NextPageContext,
	object,
	AnyStyledComponent | ReactNode
>;

type PageProps = AppProps<CurrentPage>;

// export default function PageLayout({ currentComponent }): PageProps<CurrentPage> {
// 	return (
// 		// <StyledProvider>
// 		// 	<GlobalStyle />

// 	);
// }

// </StyledProvider>
