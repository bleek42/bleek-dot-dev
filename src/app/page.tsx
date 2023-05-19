import StyledProvider from '@/lib/StyledProvider';
import XTerm from '@/components/XTerm/index.tsx';
import { Main } from '@/components/global/Main.ts';

export default function Page() {
	return (
		<StyledProvider>
			<Main>
				<XTerm />
			</Main>
		</StyledProvider>
	);
}
