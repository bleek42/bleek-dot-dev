import { styledRender } from '../setup';
import { render, within, fireEvent, screen } from '@testing-library/react';
import PageSection from '@/components/PageSection';
import { theme } from '@/components/common';

describe('PageSection', () => {
	beforeEach(() =>
		styledRender(
			<PageSection name="section-test" description="section description test" />,
		),
	);
	it('should render a Section component with a name, icon, and content', () => {
		screen.debug();
		screen.queryByDisplayValue('section');
		// Render the PageSection component with props

		// Assert that the section is rendered
		expect(screen.getByTestId('section')).toBeInTheDocument();

		// Assert that the title is rendered
		expect(screen.getByText('section-test')).toBeInTheDocument();

		// Assert that the icon is rendered
		expect(screen.getByTestId('icon')).toBeInTheDocument();

		// Assert that the content is rendered
		expect(screen.getByText('section description test')).toBeInTheDocument();
	});

	it('should render an about section with an image', () => {
		// Render the PageSection component with props for an about section

		// Assert that the section is rendered
		expect(screen.getByTestId('section')).toBeInTheDocument();

		// Assert that the image is rendered
		expect(screen.getByAltText('brandon-mask')).toBeInTheDocument();
	});

	it('should render a contact section with icons and contact information', () => {
		// Render the PageSection component with props for a contact section

		// Assert that the section is rendered
		expect(screen.getByTestId('section')).toBeInTheDocument();

		// Assert that the icons are rendered
		expect(screen.getByTestId('contact-email-icon')).toBeInTheDocument();
		expect(screen.getByTestId('contact-linkedin-icon')).toBeInTheDocument();
		expect(screen.getByTestId('contact-github-icon')).toBeInTheDocument();

		// Assert that the contact information is rendered
		expect(screen.getByText(`Email: ${props.content.at(0)}`)).toBeInTheDocument();
		expect(
			screen.getByText(`LinkedIn: ${props.content.at(1)?.replace('https://', '')}`),
		).toBeInTheDocument();
		expect(
			screen.getByText(`GitHub: ${props.content.at(2)?.replace('https://', '')}`),
		).toBeInTheDocument();
	});

	it('should render a section without a title or content', () => {
		// Render the PageSection component with props without a title or content

		// Assert that the section is rendered
		expect(screen.getByTestId('section')).toBeInTheDocument();

		// Assert that the title is not rendered
		expect(screen.queryByText(props.name)).not.toBeInTheDocument();

		// Assert that the content is not rendered
		expect(screen.queryByText(props.content)).not.toBeInTheDocument();
	});

	it('should render a section with an empty string as content', () => {
		// Render the PageSection component with props and an empty string as content

		// Assert that the section is rendered
		expect(screen.getByTestId('section')).toBeInTheDocument();

		// Assert that the content is rendered as an empty string
		expect(screen.getByText('')).toBeInTheDocument();
	});

	it('should render a section with an array of empty strings as content', () => {
		// Render the PageSection component with props and an array of empty strings as content

		// Assert that the section is rendered
		expect(screen.getByTestId('section')).toBeInTheDocument();

		// Assert that each empty string in the array is rendered
		// props.content.forEach((content) => {
		// 	expect(screen.getByText(content)).toBeInTheDocument();
		// });
	});

});
