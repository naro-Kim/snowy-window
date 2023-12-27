import * as THREE from 'three';
import snowSound from '../../public/assets/snowSound.wav';
import { useCallback, useMemo, useRef } from 'react';
import { Box, Instances } from '@react-three/drei';
import { MathUtils } from 'three';
import { SnowBlock } from './SnowBlock';

type AccumulationProps = {
	count?: number;
	position: THREE.Vector3;
};

const SnowAccumulation = ({ count = 20, position }: AccumulationProps) => {
	const ref = useRef(null!);
	const snowEffectSound = new Audio(snowSound);
	const points = useMemo(() => {
		const p = [];
		for (let i = 0; i < count; i++) {
			const x = (0.5 - Math.random()) * 3;
			const y = (0.5 - Math.random()) * 0.1;
			const z = (0.5 - Math.random()) * 0.01;
			p.push(new THREE.Vector3(x, y, z));
		}
		return p;
	}, [count]);

	const handlePointEnter = useCallback((e: any) => {
		e.stopPropagation();
		// 눈을 0.1씩 깎아 내림
		const t = e.eventObject.position.clone();
		e.eventObject.position.y = MathUtils.lerp(t.y, t.y - 0.2, 0.2);
		// 눈 치우는 소리 재생
		snowEffectSound.play();
	}, []);

	return (
		<Instances ref={ref} position={position} limit={count} range={count}>
			<boxGeometry />
			{points.map((pt, i) => ( 
				<SnowBlock
					scale={0.3}
					onPointerDown={(e) => handlePointEnter(e)}
					key={i}
					position={pt}
				/>
			))}
		</Instances>
	);
};
export default SnowAccumulation;
