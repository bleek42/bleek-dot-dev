import { within, fireEvent, screen } from '@testing-library/react';

import PageFooter from '@/components/PageFooter';
import { theme } from '@/components/common';
import { styledRender } from '../setupTests';

describe('PageFooter component', () => {
	beforeEach(() => {
		styledRender(<PageFooter />);
	});
	it('should render a PageFooter styled component instance', () => {
		screen.debug();
		screen.queryByDisplayValue('footer');
	});
});
