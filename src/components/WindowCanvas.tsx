"use client";

import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import { Euler, Vector3 } from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import SnowInstances from "@/components/SnowInstances";
import { SnowScene } from "@/components/SnowScene";
import CameraRig from "@/components/CameraRig";
import Background from "@/components/Background";
import SnowAccumulation from "@/components/SnowAccumulation";
import GithubPoster from "@/components/GithubPoster";

/**
 * @returns 눈이 내리는 풍경이 담긴 캔버스 컴포넌트를 렌더링합니다.
 */
export const WindowCanvas = () => {
  const aspect = (window.innerWidth / window.innerHeight) * 1.5;
  const dist = useMemo(() => {
    let temp = aspect / (2 * Math.tan((50 * Math.PI) / 360));
    return temp > 2.5 ? (temp = 2.2) : temp < 1 ? temp + 1 : temp;
  }, []);
  const pos = useMemo(() => {
    return dist < 2
      ? new Vector3(0, 2, 2 + 2 * dist)
      : new Vector3(0, 2, 2 + 2 * dist);
  }, []);
  const accumPos = useMemo(() => {
    return dist < 2
      ? new Vector3(0, 1.2, 1 + 2 * dist)
      : new Vector3(0, 1.2, 0.6 + 2 * dist);
  }, []);

  console.log(dist);

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: pos, fov: 45, aspect: aspect }}>
      {/* Postprocessing */}
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0}
          mipmapBlur
          luminanceSmoothing={0.2}
          intensity={1}
        />
      </EffectComposer>
      {/* Envirounment Settings */}
      <group>
        <Background />
        <hemisphereLight
          intensity={5}
          position={[0, 0, 0]}
          groundColor="black"
        />
        <directionalLight intensity={1} position={[10, 100, 0]} />
      </group>
      <color attach={"background"} args={["#000000"]} />
      <fog attach="fog" color="#000000" near={1} far={20} />
      {/* Snowy scene objects */}
      <SnowInstances count={300} velocity={0.015} />
      <SnowAccumulation position={accumPos} />
      <GithubPoster />
      <SnowScene rotation={new Euler(0, Math.PI, 0)} />
      {/* Camera movements */}
      <CameraRig />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};
