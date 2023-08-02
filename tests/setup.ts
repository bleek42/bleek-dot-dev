import * as dotenv from 'dotenv';
import { render, within, configure, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { Btn } from '@/components/common';

const setupConfig = configure({ computedStyleSupportsPseudoElements: true });
