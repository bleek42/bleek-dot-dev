import { render, within, fireEvent, screen } from '@testing-library/react';
// import { } from '../setupTests';
import Navbar from '@/components/Navbar';
import { styledRender } from '@/tests/utils/styedRender';

describe('Navbar component', () => {
	// ! Render the Navbar component before all tests
	beforeAll(() => {
		styledRender(<Navbar />);
	});

	it('should render a Navbar styled component instance', () => {
		screen.debug();
		screen.queryByDisplayValue('form');

		expect(screen.getByDisplayValue('form')).toBeInTheDocument();
	});

	it('should render Navbar component styled component with default props', () => {
		// ! Assert that the NavBar is rendered
		expect(screen.getByTestId('navbar')).toBeInTheDocument();

		// ! Assert that the ToggleBtn is rendered
		expect(screen.getByTestId('toggle-btn')).toBeInTheDocument();

		// ! Assert that the NavList is rendered
		expect(screen.getByTestId('nav-list')).toBeInTheDocument();
	});

	it('should toggle the menu when the ToggleBtn is clicked', () => {
		// Render the Navbar component

		// Get the ToggleBtn element
		const toggleBtn = screen.getByTestId('toggle-btn');

		// Click the ToggleBtn
		fireEvent.click(toggleBtn);

		// Assert that the menu is toggled on
		expect(screen.getByTestId('nav-list')).toBeInTheDocument();

		// Click the ToggleBtn again
		fireEvent.click(toggleBtn);

		// Assert that the menu is toggled off
		expect(screen.queryByTestId('nav-list')).not.toBeInTheDocument();
	});

	it('should show the menu when the mouse hovers over the NavBar', () => {
		// Render the Navbar component

		// Get the NavBar element
		const navBar = screen.getByTestId('navbar');

		// Hover over the NavBar
		fireEvent.mouseOver(navBar);

		// Assert that the menu is shown
		expect(screen.getByTestId('nav-list')).toBeInTheDocument();
	});

	it('should hide the menu when the mouse leaves the NavBar', () => {
		// Render the Navbar component

		// Get the NavBar element
		const navBar = screen.getByTestId('navbar');

		// Hover over the NavBar
		fireEvent.mouseOver(navBar);

		// Assert that the menu is shown
		expect(screen.getByTestId('nav-list')).toBeInTheDocument();

		// Move the mouse away from the NavBar
		fireEvent.mouseLeave(navBar);

		// Assert that the menu is hidden
		expect(screen.queryByTestId('nav-list')).not.toBeInTheDocument();
	});

	it('should render menu items when the toggle is true', () => {
		// Render the Navbar component with toggle set to true

		// Assert that the menu items are rendered
		expect(screen.getByTestId('nav-home')).toBeInTheDocument();
		expect(screen.getByTestId('nav-about')).toBeInTheDocument();
		expect(screen.getByTestId('nav-projects')).toBeInTheDocument();
		expect(screen.getByTestId('nav-contact')).toBeInTheDocument();
	});
});
