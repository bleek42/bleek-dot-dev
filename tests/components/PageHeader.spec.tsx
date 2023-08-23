import { render, within, fireEvent, screen } from '@testing-library/react';

import { type AnyStyledComponent } from 'styled-components';
import PageHeader from '@/components/PageFooter';

describe('PageHeader Component', () => {
	it('should render the styled PageHeader', () => {
		const { container } = render(<PageHeader />);
		console.log(container);
		expect(container.style).toBeTruthy();
	});
});
