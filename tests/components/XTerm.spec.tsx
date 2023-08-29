import { render, within, fireEvent, screen } from '@testing-library/react';
// import {  } from '../setupTests';
import { theme } from '@/components/common';
import XTerm from '@/components/XTerm';
import { styledRender } from '../setupTests';
// import { describe, it } from 'node:test';

describe('XTerm', () => {
	beforeAll(() => {
		jest.mock('next/router');
	});

	beforeEach(() => {
		styledRender(<XTerm />);
	});
	it('should render the styled XTerm component', () => {
		screen.debug();
		screen.queryByDisplayValue('form');
	});
});
