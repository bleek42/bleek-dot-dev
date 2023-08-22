import { render, within, fireEvent, screen } from '@testing-library/react';
import { type AnyStyledComponent } from 'styled-components';

import Meta from '@/components/common/Meta';

// import { describe, it } from 'node:test';

describe('PageFooter', () => {
	it('should render the styled PageFooter', () => {
		const { container } = render(<Meta />);
		console.log(container);
		expect(container).toBeTruthy();
	});
});
