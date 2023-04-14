import Link, { type LinkProps } from 'next/link';
import styled, { StyledComponent, type AnyStyledComponent, DefaultTheme } from 'styled-components';

import type { NavLinkProps } from '@prop-types/navbar.props';
import { forwardRef, useId } from 'react';

const NextLink = styled(Link)`
	font-family: 'MonocraftNF', 'Courier New', Courier, monospace;
	font-size: 14px;
	font-weight: 500;
	text-align: center;
	color: ${({ theme }) => theme.palette.secondary.green};
	text-shadow: rgb(99, 104, 99) 3px 2px 3px;
	&:hover,
	&:focus,
	&:is('a') {
		filter: brightness(2.6);
		color: rgb(12, 205, 160);
	}

	&:visited {
		filter: brightness(0.9);
		color: rgb(44, 8, 250);
	}
`;

const LinkIcon = styled.i`
	font-size: 16px;
	font-weight: 850;
	text-align: center;
	color: ${({ theme }) => theme.palette.secondary.linear};
	text-shadow: ${({ theme }) => `${theme.palette.secondary.gray} 3px 2px 3px`};
	&:hover,
	&:focus,
	&:is('a') {
		filter: brightness(2.6);
		color: rgb(12, 205, 160);
	}

	&:visited {
		filter: brightness(0.9);
		color: rgb(44, 8, 250);
	}
`;

export const NavLink = forwardRef<AnyStyledComponent, NavLinkProps<LinkProps>>(({ href }) => {
	const navId = useId();
	return (
		<NextLink href={href} passHref key={navId} id={`navlink-${navId}`}>
			<LinkIcon></LinkIcon>
		</NextLink>
	);
});
