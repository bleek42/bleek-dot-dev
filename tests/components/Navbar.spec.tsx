import { type AnyStyledComponent } from 'styled-components';
import { render, within, fireEvent, screen } from '@testing-library/react';

import Navbar from '@/components/Navbar';
// import { describe, it } from 'node:test';

describe('Navbar', () => {
	it('should render the styled Navbar component', () => {
		const { container } = render(<Navbar />);
		console.log(container);
		expect(container).toBeTruthy();
	});
});
