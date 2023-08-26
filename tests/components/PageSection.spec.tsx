import { render, within, fireEvent, screen } from '@testing-library/react';
import { type AnyStyledComponent } from 'styled-components';
import PageSection from '@/components/PageSection';
import { theme } from '@/components/common';

describe('PageSection', () => {
	it('should render a Section component with a name, icon, and content', () => {
		// fix this type error
		const { container } = render(
			<PageSection name="section-test" description=" section description test" />,
		);

		console.log(container);
		expect(container).toBeDefined();
	});
});
