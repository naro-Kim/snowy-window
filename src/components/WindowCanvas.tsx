"use client";

import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import { Euler, Vector3 } from "three";
import { 
  Environment,
  SoftShadows,
} from "@react-three/drei";
import SnowInstances from "@/components/SnowInstances";
import SnowScene from "@/components/SnowScene";
import CameraRig from "@/components/CameraRig";
import { Background } from "./Background";
import { Bloom, DepthOfField, EffectComposer } from "@react-three/postprocessing";


export const WindowCanvas = () => {
  const aspect = window.innerWidth / window.innerHeight;
  const dist = useMemo(() => aspect / (2 * Math.tan((50 * Math.PI) / 360)), []);
  const pos = useMemo(() => new Vector3(0, 2, 2 + 2 * dist), []);

  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: pos, fov: 45, aspect: aspect }} className={"w-full h-full"}>
      {/* Postprocessing */}
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.2} intensity={1} />
        <DepthOfField target={[0, 0, 20]} focalLength={0.1} bokehScale={4} height={200} />
      </EffectComposer>
      {/* Envirounment Settings */}
      <group>
        <Background />
        <hemisphereLight intensity={5} position={[0, 0, 0]} groundColor="black" />
        <directionalLight intensity={1} position={[10, 100, 0]} />
      </group>
      <color attach={"background"} args={["#000000"]} />
      <fog attach="fog" color="#000000" near={1} far={20} />
      {/* Snowy scene objects */}
      <SnowInstances count={300} velocity={0.015} />
      <SnowScene rotation={new Euler(0, Math.PI, 0)} />
      {/* Camera movements */}
      <CameraRig /> 
    </Canvas>
  );
};
