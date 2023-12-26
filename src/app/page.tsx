import dynamic from 'next/dynamic';
import { SoundPlayer } from '@/components/SoundPlayer';
export default function Home() {
	const WindowCanvas = dynamic(() => import('@/components/'), {
		ssr: false,
		loading: () => <div className='w-full text-center'><p>Loading...</p></div>,
	});

	return (
		<main className="grid min-h-content grid-flow-row gap-24">
			<SoundPlayer />
			<WindowCanvas /> 
		</main>
	);
}
