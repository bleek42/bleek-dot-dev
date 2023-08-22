import { render, within, fireEvent, screen } from '@testing-library/react';

import { SmTxt, MdTxt, LgTxt } from '@/components/common';
import { type AnyStyledComponent } from 'styled-components';

// import { describe, it } from 'node:test';

describe('Text', () => {
	it('should render the styled Text', () => {
		const { container } = render(<MdTxt />);
		// console.log(container);
		expect(container.style).toBeTruthy();
	});
});
