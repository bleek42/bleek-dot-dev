import '@testing-library/jest-dom';
import 'jest-styled-components';

import { configure } from '@testing-library/react';
// beforeAll(() => {
//   const { container } = styledRender(<PageHeader />);
//   console.log(container);
// });

const setupConfig = () =>
  configure({
    computedStyleSupportsPseudoElements: true,
    throwSuggestions: true,
    showOriginalStackTrace: true,
  });

export default setupConfig;
