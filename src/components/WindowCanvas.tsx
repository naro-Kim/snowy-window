'use client';

import { Canvas } from '@react-three/fiber';
import { useMemo } from 'react';
import { Euler, Vector3 } from 'three';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, HueSaturation, Vignette } from '@react-three/postprocessing'
import SnowInstances from '@/components/SnowInstances';
import SnowScene from '@/components/SnowScene';

export const WindowCanvas = () => {
	const aspect = window.innerWidth / window.innerHeight;
	const dist = useMemo(() => aspect / (2 * Math.tan((50 * Math.PI) / 360)), []);
	const pos = useMemo(() => new Vector3(0, 1.2, 2 + dist), [])
	return (
		<Canvas className={'w-full h-full'}>
			<EffectComposer>
				<DepthOfField focusDistance={0} focalLength={aspect / Math.PI} bokehScale={1} height={480} />
				<Bloom luminanceThreshold={0.8} luminanceSmoothing={0.9} height={240} />
				<Vignette eskil={false} offset={0.2} darkness={1.1} />
				<HueSaturation saturation={0.1} />
			</EffectComposer>
			<Environment preset='forest' />
			<PerspectiveCamera makeDefault position={pos} aspect={aspect} />
			<ambientLight intensity={2} position={[100, 5, 1]} />
			<hemisphereLight scale={10} position={[0, 0, 0]} ></hemisphereLight> 
			<SnowInstances />
			<SnowScene rotation={new Euler(0, Math.PI, 0)} />
		</Canvas>
	);
};
