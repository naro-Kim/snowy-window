import dynamic from 'next/dynamic';
import { SoundPlayer } from '@/components/SoundPlayer';
import { Loader } from '@/components/Loader';
import { GuideMessage } from '@/components/GuideMessage';
export default function Home() {
	const WindowCanvas = dynamic(() => import('@/components/'), {
		ssr: false,
		loading: () => <Loader />,
	});


	return (
		<main>   
			<GuideMessage />
			<SoundPlayer />
			<WindowCanvas />
		</main>
	);
}
