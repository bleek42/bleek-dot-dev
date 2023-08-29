import { render, within, fireEvent, screen } from '@testing-library/react';

import { theme } from '@/components/common';
import PageHeader from '@/components/PageFooter';

describe('PageHeader Component', () => {
	it('should render a PageHeader styled component instance', () => {
		const { container } = render(<PageHeader theme={theme} />);
		console.log(container.style);

		expect(container.style).toBeTruthy();
	});
});
