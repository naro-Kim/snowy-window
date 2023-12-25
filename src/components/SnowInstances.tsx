import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";

const SnowInstances = ({ count = 200, velocity = 0.01 }) => {
  const particles = useRef<THREE.Points>(null!);
  const positionRef = useRef<THREE.BufferAttribute>(null!);
  const velocityRef = useRef<THREE.BufferAttribute>(null!);
  const [minRange, maxRange] = useMemo(() => [-8, 8], []);

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

  const shader = {
    uniforms: {
      texture: { value: new THREE.TextureLoader().load("/assets/snowflake.webp") },
    },
    vertexShader: `
      attribute vec3 position;
      attribute vec3 offset;
      uniform float time;
      varying vec2 vUv;
      
      void main() {
        vec3 newPosition = position + offset;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        vUv = uv;
      }
    `,
    fragmentShader: `
      uniform sampler2D texture;
      varying vec2 vUv;

      void main() {
        gl_FragColor = texture2D(texture, vUv);
      }
    `,
  };

  useFrame((_, dt) => { 
    const posArr = positionRef.current.array;
    const velArr = velocityRef.current.array;

    for (let i = 0; i < posArr.length; i += 3) {
      const x = i;
      const y = i + 1; 

      const velX = Math.sin(dt * velArr[x] * (i < 4 ? i + 1 : -(i + 1))) * 0.01;
      let velY = Math.cos(dt * 0.01 * velArr[y]) * velocity;

      posArr[x] += velX;
      posArr[y] -= velY; 

      // accumulation snow
      if (posArr[y] < minRange) {
        posArr[y] = (1 - Math.random()) * maxRange * 0.01
        velY = 0;
      } 
      if (posArr[x] > maxRange || posArr[x] < minRange) {
        posArr[x] = (1 - Math.random()) * maxRange * 0.01
      }
    }

    positionRef.current.needsUpdate = true;
    velocityRef.current.needsUpdate = true;
  });

  return (
    <group position={[0, maxRange, 0]}>
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
