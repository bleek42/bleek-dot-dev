import { render, within, fireEvent, screen } from '@testing-library/react';
// import { } from '../setupTests';
import Navbar from '@/components/Navbar';
import { styledRender } from '../setupTests';

describe('Navbar', () => {
	beforeEach(() => {
		styledRender(<Navbar />);
	});

	it('should render a Navbar styled component instance', () => {
		screen.debug();
		screen.queryByDisplayValue('form');
	});
});
