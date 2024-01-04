import { useSceneContext } from '@/context/SceneContext';
import { useEffect } from 'react';

export const MessageModal = () => {
	const { isShowUI, setShowUI } = useSceneContext() as any;
	const modalRemove = () => {
		setTimeout(() => {
			setShowUI(false);
		}, 1000);
	};

	useEffect(() => {
		modalRemove();
	}, [modalRemove]);

	return (
		<div
			className={`rounded-xl bg-[rgba(0,0,0,0.5)] z-10 absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 p-4 text-white transition-all duration-1000 ${
				isShowUI ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<p>{'Thank you for your thoughtful comment!'}</p>
		</div>
	);
};
