"use client";

import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import { Euler, Vector3 } from "three";
import {
  PerspectiveCamera,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import SnowInstances from "@/components/SnowInstances";
import SnowScene from "@/components/SnowScene";
import CameraRig from "@/components/CameraRig";
export const WindowCanvas = () => {
  const aspect = window.innerWidth / window.innerHeight;
  const dist = useMemo(() => aspect / (2 * Math.tan((50 * Math.PI) / 360)), []);
  const pos = useMemo(() => new Vector3(0, 1.2, 2 + dist), []);

  return (
    <Canvas className={"w-full h-full"}>
      <Environment preset="forest" />
      <PerspectiveCamera makeDefault position={pos} aspect={aspect} />
      <ambientLight intensity={2} position={[100, 5, 1]} />
      <hemisphereLight scale={10} position={[0, 0, 0]} />
      <SnowInstances />
      <SnowScene rotation={new Euler(0, Math.PI, 0)} />
      {/* <CameraRig /> */}
      <OrbitControls />
    </Canvas>
  );
};
