import { useRouter } from 'next/router';

export const routerMock = jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
