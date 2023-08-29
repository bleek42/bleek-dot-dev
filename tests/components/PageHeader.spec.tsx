import { within, fireEvent, screen } from '@testing-library/react';

import { theme } from '@/components/common';
import PageHeader from '@/components/PageFooter';
import styled from 'styled-components';
import { styledRender } from '../setupTests';
// import { styledRender } from '../utils/styedRender';

describe('PageHeader Component', () => {
	beforeEach(() => {
		styledRender(<PageHeader />);
	});

	it('should render a PageHeader styled component instance', () => {
		// const { container } = styledRender(<PageHeader />);
		screen.debug();
		screen.queryByTitle('bleekDotDev');
	});
});
