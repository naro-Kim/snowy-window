import * as THREE from 'three';
import snowSound from '../../public/audio/snowSound.wav';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Instances } from '@react-three/drei';
import { MathUtils } from 'three';
import { SnowBlock } from '@/components/SnowBlock';
import { useFrame, useThree } from '@react-three/fiber';

type AccumulationProps = {
  count?: number;
  position: THREE.Vector3;
};

const SnowAccumulation = ({ count = 20, position }: AccumulationProps) => {
	const ref = useRef<any>(null!);
	const vec = useMemo(() => new THREE.Vector3(), []);
	useFrame((gl, _dt) => {
		// 시간이 지나면 눈이 쌓입니다. 화면을 뒤덮을 정도로 쌓이지 않도록 elapsedTime으로 조절합니다.
		if (gl.clock.elapsedTime % 100 <= 0.02 && gl.clock.elapsedTime < 1000) {
			const curPos = ref.current.position.clone();
			ref.current.position.lerp(vec.set(curPos.x, curPos.y + 0.2, curPos.z),
				0.05);
		}
	});

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
