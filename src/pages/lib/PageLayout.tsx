import { Children, Component, Fragment, ReactNode, useRef } from 'react';
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

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AppProps } from 'next/app';
import Meta from '@/components/global/Meta';
import { Main } from '@/components/global/Main';

export default function PageLayout({ children }: { children: ReactNode }) {
	return (
		<Fragment>
			<Meta />
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Fragment>
	);
}
