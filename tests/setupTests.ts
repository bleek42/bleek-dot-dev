import '@testing-library/jest-dom';
import 'jest-styled-components';

import { configure } from '@testing-library/react';
import { styledRender } from './utils/styedRender';
import PageHeader from '@/components/PageHeader';

// beforeAll(() => {
//   const { container } = styledRender(<PageHeader />);
//   console.log(container);
// });

const setupConfig = configure({
  computedStyleSupportsPseudoElements: true,
  throwSuggestions: true,
  showOriginalStackTrace: true,
});


export { styledRender };

export default setupConfig;
