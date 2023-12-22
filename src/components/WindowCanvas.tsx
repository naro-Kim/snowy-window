'use client';

import { OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMemo } from 'react';
import { Vector3 } from 'three';
import SnowInstances from '@/components/SnowInstances';

export const WindowCanvas = () => {
	const aspect = window.innerWidth / window.innerHeight;
	const dist = useMemo(() => 500 / (2 * Math.tan((50 * Math.PI) / 360)), []);
	const pos = useMemo(() => new Vector3(0, 0, 240 + dist), []);
	return (
		<Canvas className={'w-full h-full'}>
			{/* <PerspectiveCamera aspect={aspect} position={pos} zoom={-10} /> */}
			<OrbitControls />
			<SnowInstances />
		</Canvas>
	);
};
