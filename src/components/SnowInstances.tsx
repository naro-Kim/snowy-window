import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";

const SnowInstances = ({ count = 10000 }) => {
  const particles = useRef<THREE.Points>(null!);
  const positionRef = useRef<THREE.BufferAttribute>(null!);
  const velocityRef = useRef<THREE.BufferAttribute>(null!);
  const [minRange, maxRange] = useMemo(() => [-2, 20], []);

  const points = useMemo(() => {
    const p = new Array(count)
      .fill(0)
      .map((v) => (0.5 - Math.random()) * maxRange);
    return new THREE.BufferAttribute(new Float32Array(p), 3);
  }, [count]);

  const velocities = useMemo(() => {
    const v = new Array(count * 3)
      .fill(0)
      .map(() => (Math.random() - 0.5) * 0.1);
    return new THREE.BufferAttribute(new Float32Array(v), 3);
  }, [count]);

  const flakeMaterial = useMemo(() => {
    const snowflakeMap = useLoader(
      THREE.TextureLoader,
      "/assets/snowflake.webp"
    );
    const mat = {
      size: 0.1,
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

  useFrame((_, dt) => {
    console.log(positionRef);
    const posArr = positionRef.current.array;
    const velArr = velocityRef.current.array;

    for (let i = 0; i < posArr.length; i += 3) {
      const x = i;
      const y = i + 1;
      const z = i + 2;

      const velX = Math.sin(dt * 0.1 * (i < 3 ? i + 1 : -(i + 1))) * 0.01;
      const velY = Math.cos(dt * 0.01 * velArr[y]) * 0.03;
      const velZ = Math.cos(dt * 0.01 * (i < 3 ? i + 1 : -(i + 1))) * 0.01;

      // positions[i] += Math.sin(clock.elapsedTime * 0.1) * 0.1; // Adjust the speed as needed
      // positions[i + 2] += Math.cos(clock.elapsedTime * 0.1) * 0.1; // Adjust the speed as needed

      posArr[x] += velX;
      posArr[y] -= velY;
      posArr[z] += velZ;

      // accumulation snow
      if (posArr[y] < minRange) {
        posArr[y] = maxRange - i * 0.01;
      }
      if (posArr[z] > maxRange) {
        posArr[z] = minRange - i * 0.01;
      }
      if (posArr[x] > maxRange) {
        posArr[x] = minRange - i * 0.01;
      }
    }

    positionRef.current.needsUpdate = true;
    velocityRef.current.needsUpdate = true;
  });

  return (
    <group position={[0, minRange, 0]}>
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute
            ref={positionRef}
            attach="attributes-position"
            {...points}
          />
          <bufferAttribute
            ref={velocityRef}
            attach="attributes-velocity"
            {...velocities}
          />
        </bufferGeometry>
        <pointsMaterial {...flakeMaterial} sizeAttenuation={true} />
      </points>
    </group>
  );
};

export default SnowInstances;
