import * as THREE from "three";
import snowSound from "../../public/audio/snowSound.wav";
import { useCallback, useMemo, useRef } from "react";
import { Box, Instances } from "@react-three/drei";
import { MathUtils } from "three";

/**
 * @param {number} count : 초기 렌더링에 쌓이는 눈의 개수입니다.
 * @param {THREE.Vector3} position : 초기 렌더링에 눈 더미가 쌓일 위치입니다.
 */

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
          position={pt}>
          <meshToonMaterial />
        </Box>
      ))}
    </Instances>
  );
};

export default SnowAccumulation;
