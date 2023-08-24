import { render, within, fireEvent, screen } from '@testing-library/react';

import { SmTxt, MdTxt, LgTxt } from '@/components/common';
import { type AnyStyledComponent } from 'styled-components';

// import { describe, it } from 'node:test';

describe('Text Components', () => {
	it('should render one each of the styled Text components', () => {
		const { container } = render(<MdTxt />);
		// console.log(container);
		expect(container.style).toBeTruthy();
	});
});
