import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createTRPCContext } from '@/server/init';
import { appRouter } from '@/server/routers/app';
const handler = (req: Request) => {
  // fetchRequestHandler({
    // endpoint: '/api/trpc',
    // req,
    // router: appRouter,
    // createContext: createTRPCContext,
  };
export { handler as GET, handler as POST };
