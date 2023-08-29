import { render, within, fireEvent, screen } from '@testing-library/react';
import PageSection from '@/components/PageSection';
import { theme } from '@/components/common';
import { styledRender } from '../setupTests';

describe('PageSection', () => {
	beforeEach(() =>
		styledRender(
			<PageSection name="section-test" description=" section description test" />,
		),
	);
	it('should render a Section component with a name, icon, and content', () => {
		// fix this type error

		screen.debug();
		screen.queryByDisplayValue('section');
		// expect(container.style).toBeTruthy();
	});
});
