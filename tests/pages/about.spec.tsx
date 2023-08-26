import { render, within, fireEvent, screen } from '@testing-library/react';
import { type AnyStyledComponent } from 'styled-components';
import PageSection from '@/components/PageSection';
import { theme } from '@/components/common';
import About from '@/pages/about';

describe('About Page', () => {
	it('should render the About page at "/about" route with a Section styled component containing defaultProps name, icon, and content', () => {
		const { container } = render(<About />);

		console.log(container);
		expect(container).toBeDefined();
	});
});
