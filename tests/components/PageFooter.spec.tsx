import { render, within, fireEvent, screen } from '@testing-library/react';
// import { } from '../setupTests';
import { type AnyStyledComponent } from 'styled-components';
import PageFooter from '@/components/PageFooter';
import { theme } from '@/components/common';

describe('PageFooter component', () => {
	it('should render a PageFooter styled component instance', () => {
		const { container } = render(<PageFooter theme={theme} />);
		console.log(container.style);
		expect(container.style).toBeTruthy();
	});
});
