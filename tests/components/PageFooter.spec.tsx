import { render, within, fireEvent, screen } from '@testing-library/react';

import { type AnyStyledComponent } from 'styled-components';
import PageFooter from '@/components/PageFooter';
// import { describe, it } from 'node:test';

describe('PageFooter component', () => {
	it('should render the styled PageFooter', () => {
		const { container } = render(<PageFooter />);
		console.log(container);
		expect(container.firstChild).toBeTruthy();
	});
});
