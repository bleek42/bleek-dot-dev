// import { trpc } from '@/trpc/client';
// import { ClientGreeting } from '@/trpc/client-greeting';}
import XTerm from '@/components/Form/UXTerm';
import { PageBg } from '@/components/common';
import { HydrateClient, trpc } from '@/trpc/init';
import RootLayout from './layout';

export default function Page() {
    void trpc.hello.prefetch();
    return (
        <HydrateClient>
            <RootLayout
                id={'layout-0'}
                title={'home'}
                keywords={'layout'}
                locale={'en_US'}
            >
                <p>... home.</p>
                {/* <ClientGreeting /> */}
                <PageBg>
                    <XTerm />
                </PageBg>
            </RootLayout>
        </HydrateClient>
    );
}
