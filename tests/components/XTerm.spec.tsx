import { render, within, fireEvent, screen } from '@testing-library/react';
// import {  } from '../setupTests';
import { theme } from '@/components/common';
import XTerm from '@/components/XTerm';
// import { describe, it } from 'node:test';

describe('XTerm', () => {
	it('should render the styled XTerm component', () => {
		const { container } = render(<XTerm />);
		console.log(container.style);
		expect(container.style).toBeTruthy();
	});
});
