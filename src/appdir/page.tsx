import StyledProvider from 'src/pages/lib/StyledProvider';
import XTerm from '@/components/XTerm/index.tsx';
import { Main } from '@/components/common/Main.ts';

export default function Page() {
	return (
		<StyledProvider>
			<Main>
				<XTerm />
			</Main>
		</StyledProvider>
	);
}
