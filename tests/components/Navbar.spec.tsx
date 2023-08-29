import { render, within, fireEvent, screen } from '@testing-library/react';
// import { } from '../setupTests';
import Navbar from '@/components/Navbar';
// import { describe, it } from 'node:test';

describe('Navbar', () => {
	// beforeAll(() => {

	// })
	it('should render a Navbar styled component instance', () => {
		const { container } = render(<Navbar />);
		console.log(container.style);
		expect(container.style).toBeTruthy();
	});
});
