import { render, within, fireEvent, screen } from '@testing-library/react';

import PageFooter from '@/components/PageFooter';
import { AnyStyledComponent } from 'styled-components';
// import { describe, it } from 'node:test';

describe('PageFooter', () => {
	it('should render the styled PageFooter', () => {
		const { container } = render(<PageFooter />);
		console.log(container);
		expect(container.firstChild).toMatchSnapshot();
	});
});
