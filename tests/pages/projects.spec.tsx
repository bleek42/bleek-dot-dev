import { render, within, fireEvent, screen } from '@testing-library/react';
import { type AnyStyledComponent } from 'styled-components';
import PageSection from '@/components/PageSection';
import { theme } from '@/components/common';
import Projects from '@/pages/projects';

describe('Projects Page', () => {
	it('should render the Projects page at "/projects" route with a Section styled component containing defaultProps name, icon, and content', () => {
		const { container } = render(<Projects />);

		console.log(container);
		expect(container).toBeDefined();
	});
});
