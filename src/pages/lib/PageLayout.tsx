import { Children, Component, ReactNode, useRef } from 'react';
import { NextComponentType, NextPageContext, type NextPage } from 'next';
import { type DocumentNode, GraphQLError } from 'graphql';
import {
	type DefaultTheme,
	type StyledComponentProps,
	ThemeProvider,
} from 'styled-components';
import {
	type ThemedStyledProps,
	type ThemeProviderProps,
	type ThemeContext,
	ThemeProps,
	type ThemeConsumer,
} from 'styled-components';
import { Theme, GlobalStyle } from '@/components/global/Theme';

import StyledProvider from './StyledProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AppProps } from 'next/app';

export default function PageLayout({ children }: { children: ReactNode }) {
	return (
		<StyledProvider theme={Theme}>
			<GlobalStyle />
			<Header />
			{children}
			<Footer />
		</StyledProvider>
	);
}
