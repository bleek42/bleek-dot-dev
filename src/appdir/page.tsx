import StyledProvider from 'src/pages/lib/StyledProvider';
import XTerm from '@/components/XTerm/index.tsx';
import { MainPage } from '@/components/common/MainPage.ts';

export default function Page() {
	return (
		<StyledProvider>
			<MainPage>
				<XTerm />
			</MainPage>
		</StyledProvider>
	);
}
