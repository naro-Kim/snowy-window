import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
// import Snowflake from './Snowflake';

const SnowInstances = ({ count = 1000 }) => {
	const particles = useRef<THREE.Points>(null!);
	const positionRef = useRef<THREE.BufferAttribute>(null!);
	const velocityRef = useRef<THREE.BufferAttribute>(null!);

	const points = useMemo(() => {
		const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 20);
		return new THREE.BufferAttribute(new Float32Array(p), 3);
	}, [count]);

	const velocities = useMemo(() => {
		const v = new Array(count * 3).fill(0).map(() => (Math.random() - 0.5) * 0.1);
		return new THREE.BufferAttribute(new Float32Array(v), 3);
	}, [count]);

	const flakeMaterial = useMemo(() => {
		const snowflakeMap = useLoader(THREE.TextureLoader, '/assets/snowflake.webp');
		const mat = {
			size: 1,
			color: 0xffffff,
			vertexColors: false,
			map: snowflakeMap,
			transparent: true,
			// opacity: 0.5,
			fog: true,
			depthWrite: false,
		};
		return mat;
	}, []);

	const { camera, mouse } = useThree();
	const [minRange, maxRange] = useMemo(() => [0, 20], []);

	useFrame((_, dt) => {
		const posArr = positionRef.current.array;
		const velArr = velocityRef.current.array;

		for (let i = 0; i < posArr.length; i += 3) {
			const x = i;
			const y = i + 1;
			// const z = i + 2;

			const velX = Math.sin(dt * 0.001 * velArr[x]) * 0.1;
			const velY = Math.cos(dt * 0.0015 * velArr[y]) * 0.02;

			posArr[x] += velX;
			posArr[y] -= velY;
			// posArr[z] += velZ;

			// accumulation snow
			if (posArr[y] < -minRange) {
				posArr[y] = maxRange;
			}
		}

		positionRef.current.needsUpdate = true;
		velocityRef.current.needsUpdate = true;
	});

	return (
		<group position={[0, 0, 0]}>
			<points ref={particles}>
				<bufferGeometry>
					<bufferAttribute ref={positionRef} attach="attributes-position" {...points} />
					<bufferAttribute ref={velocityRef} attach="attributes-velocity" {...velocities} />
				</bufferGeometry>
				<pointsMaterial {...flakeMaterial} sizeAttenuation={true} />
			</points>
		</group>
	);
};

export default SnowInstances;
