import dynamic from 'next/dynamic';
import { SoundPlayer } from '@/components/SoundPlayer';
import { Loader } from '@/components/Loader';
import { Message } from '@/components/Message';
export default function Home() {
	const WindowCanvas = dynamic(() => import('@/components/'), {
		ssr: false,
		loading: () => <Loader />,
	});

	return (
		<main>
			<Message />
			<SoundPlayer />
			<WindowCanvas />
		</main>
	);
}
