import { render, within, fireEvent, screen } from '@testing-library/react';

import { type AnyStyledComponent } from 'styled-components';
import PageFooter from '@/components/PageFooter';

describe('PageFooter component', () => {
	it('should render a PageFooter styled component', () => {
		const { container } = render(<PageFooter />);
		console.log(container);
		expect(container).toBe(PageFooter);
	});
});
