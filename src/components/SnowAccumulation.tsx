import * as THREE from 'three';
import snowSound from '../../public/assets/snowSound.wav';
import { useCallback, useMemo, useRef } from 'react';
import { Box, Instances } from '@react-three/drei';
import { MathUtils } from 'three';

type AccumulationProps = {
	count?: number;
	position: THREE.Vector3;
};

const SnowAccumulation = ({ count = 50, position }: AccumulationProps) => {
	const ref = useRef(null!);
	const snowEffectSound = new Audio(snowSound);
	const points = useMemo(() => {
		const p = [];
		for (let i = 0; i < count; i++) {
			const x = (0.5 - Math.random()) * 3;
			const y = (0.5 - Math.random()) * 0.01;
			const z = (0.5 - Math.random()) * 0.2;
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
				<Box
					receiveShadow={false}
					castShadow={false}
					args={[1, 5, 0.5]}
					onPointerDown={(e) => handlePointEnter(e)}
					scale={0.1}
					key={i}
					position={pt}
				>
					<meshToonMaterial />
				</Box>
			))}
		</Instances>
	);
};

/**
 * 1-1. snow buffer geomtry
 * 	- buffer geometry로 flat하게 구현해둠
 * 	- 귀엽게 셀 텍스쳐 만들어서 씌워두는 방향으로 가야할 듯
 * 	- onClick event로 구현 -> points 객체에 묶어버리면 개별 buffer geomtry에 접할 수 없다.
 * 	-
 * 1-2. texture displacement mapping with onclick event
 * 	- glsl 사용해서 만들어야함 난이도 극악
 * 2. increase volume of the snow according to time
 * 3. canvas seperate ? or not?
 * 		- 현상태에선 캔버스를 쪼개지 않았음 = 쪼개면 성능 좋아질 지도
 *
 *
 */

export default SnowAccumulation;
