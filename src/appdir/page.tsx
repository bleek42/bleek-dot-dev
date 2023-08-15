import StyledProvider from 'src/pages/lib/StyledProvider';
import XTerm from '@/components/XTerm/index.tsx';
<<<<<<< HEAD
import { MainPage } from '@/components/common/MainPage.ts';
=======
import { Main } from '@/components/common/Main.ts';
>>>>>>> origin/main

export default function Page() {
	return (
		<StyledProvider>
			<MainPage>
				<XTerm />
			</MainPage>
		</StyledProvider>
	);
}
