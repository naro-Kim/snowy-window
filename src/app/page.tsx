// import dynamic from 'next/dynamic';

import { WindowCanvas } from '@/components/WindowCanvas';

export default function Home() {
	// const WindowCanvas = dynamic(() => import('@/components/'), {
	// 	ssr: false,
	// 	loading: () => <p>Loading...</p>,
	// });

	return (
		<main className="grid min-h-content grid-flow-row gap-24">
			<WindowCanvas />
			{/* <WindowScene /> */}
		</main>
	);
}
