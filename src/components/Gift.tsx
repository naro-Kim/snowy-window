import * as THREE from "three";
import React, { useCallback, useMemo, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Present_cube_decor_1: THREE.Mesh;
    Present_cube_decor_2: THREE.Mesh;
    Present_cube_decor_3: THREE.Mesh;
  };
  materials: {
    ["red_decor.001"]: THREE.MeshStandardMaterial;
    present_decor: THREE.MeshPhysicalMaterial;
    ["forest green"]: THREE.MeshStandardMaterial;
  };
};

export function Gift(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/assets/gift.glb") as GLTFResult;

  const handlePointerUp = useCallback((e: ThreeEvent<PointerEvent>) => {
  }, [])

  return (
    <group position={[0.908, 0.162, 0]} onPointerUp={handlePointerUp} {...props} dispose={null}>
      <group
        rotation={[1.541, -0.024, -1.143]}
        scale={2.31}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Present_cube_decor_1.geometry}
          material={materials["red_decor.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Present_cube_decor_2.geometry}
          material={materials.present_decor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Present_cube_decor_3.geometry}
          material={materials["forest green"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/gift.glb");