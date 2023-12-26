import * as THREE from 'three';
import { useMemo, useRef } from 'react';

type AccumulationProps = {
	count?: number;
	position: THREE.Vector3;
};

export const SnowAccumulation = ({ count = 50, position }: AccumulationProps) => {
	const particles = useRef<THREE.Points>(null!);
	const positionRef = useRef<THREE.BufferAttribute>(null!);
	const indices = useMemo(() => {
		return new Uint16Array(Array.from({ length: count }, (_, index) => index + 1));
	}, [count]);
	const points = useMemo(() => {
		const p = [];

		for (let i = 0; i < count; i++) {
			const x = (0.5 - Math.random()) * 10;
			const y = (0.5 - Math.random()) * 0.2;
			const z = 0; // Set the z-coordinate to 0 for a flat geometry
			p.push(x, y, z);
		}

		return new THREE.BufferAttribute(new Float32Array(p), 3);
	}, [count]);

	return (
		<group position={position}>
			<points
				onClick={(e) => {
					e.stopPropagation();
					console.log(e.target);
					console.log(e.y);
				}}
				ref={particles}
			>
				<bufferGeometry attach={'geometry'}>
					<bufferAttribute ref={positionRef} attach="attributes-position" {...points} />
					<bufferAttribute attach="index" array={indices} count={count} itemSize={1} />
				</bufferGeometry>
				<pointsMaterial side={THREE.DoubleSide} color={'0xffccee'} />
			</points>
		</group>
	);
};

/**
 * 1-1. snow buffer geomtry
 * 	- buffer geometry로 flat하게 구현해둠
 * 	- 귀엽게 셀 텍스쳐 만들어서 씌워두는 방향으로 가야할 듯
 * 	- onClick event로 구현
 * 1-2. texture displacement mapping with onclick event
 * 	- glsl 사용해서 만들어야함 난이도 극악
 * 2. increase volume of the snow according to time
 * 3. canvas seperate ? or not?
 * 		- 현상태에선 캔버스를 쪼개지 않았음 = 쪼개면 성능 좋아질 지도
 *
 *
 */
