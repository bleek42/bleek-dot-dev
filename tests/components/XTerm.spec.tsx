import { within, fireEvent, screen } from '@testing-library/react';
import { styledRender } from '@/tests/utils/styedRender';
import XTerm from '@/components/XTerm';
import { routerMock } from '@/tests/mocks/router.mock';

describe('XTerm Component', () => {
	beforeEach(async () => {
		const mockNextRouter = jest.mock('next/router', () => ({
			useRouter: jest.fn(),
		}));

		const instance = styledRender(<XTerm />);
		instance.debug();

		// return { mockNextRouter, instance };
		// const { useRouter } = await import('next/router');
		// useRouter().mockReturnValue();
	});

	// Test that the XTerm component renders with the default values and prompts
	it('should render XTerm styled component instance', () => {
		// Render the XTerm component
		screen.debug();
		screen.queryByDisplayValue('form');

		// Assert that the XTForm is rendered
		expect(screen.getByLabelText('xt-form')).toBeInTheDocument();

		// Assert that the XTBtns are rendered
		expect(screen.getByLabelText('xt-btns')).toBeInTheDocument();

		// Assert that the XTCode is rendered with the correct text
		expect(screen.getByText('[#!/usr/bin/bleek]')).toBeInTheDocument();

		// Assert that the XTLabel is rendered
		expect(screen.getByLabelText('xt-prompt')).toBeInTheDocument();
	});

	it('should render XTerm styled component instance with default state/props', () => {
		// Assert that the XTxtArea is rendered with the default value
		expect(screen.getByLabelText('xt-txt-tty0')).toHaveValue(
			" \n \n Hey there \uf4a2 \n \n  I'm Brandon: a Full Stack Web Developer!  \n \n \n  \ue736  \ue749  \ue718  \ue69d  \ue7ba  \n \n  \ue662  \ufab2  \ue712  \uebca  \ue702  \n \n \n  Click | Touch to proceed to...  \n \n \n \ue617  \uea9c  bleek.dev/home",
		);

		// Assert that the XTPrompt is rendered with the correct text
		expect(screen.getByText(' [ visitor@bleek.dev]  ﬦ')).toBeInTheDocument();

		// Assert that the XTInput is rendered with the default value
		expect(screen.getByLabelText('xt-prompt')).toHaveValue('  ');
	});
});
