import { within, fireEvent, screen } from '@testing-library/react';

import PageFooter from '@/components/PageFooter';
import { theme } from '@/components/common';
import { styledRender } from '@/tests/utils/styedRender';


describe('PageFooter component', () => {
	beforeEach(() => {
		styledRender(
			<PageFooter
				name="test-footer"
				description="this is a PageFooter test description"
			/>,
		);
	});
	it('should render a PageFooter styled component instance', () => {
		screen.debug();
		screen.queryByDisplayValue('footer');
	});
});
