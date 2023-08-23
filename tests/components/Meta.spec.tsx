import { render, within, fireEvent, screen } from '@testing-library/react';

import Meta from '@/components/common/Meta';

describe('Meta Component', () => {
	it('should render a Meta component using Next/Head', () => {
		const { container } = render(<Meta />);
		console.log(container);
		expect(container).toBeTruthy();
	});
});
