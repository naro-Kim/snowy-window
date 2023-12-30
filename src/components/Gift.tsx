import * as THREE from "three";
import React, { useCallback, useMemo, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { useSceneContext } from "@/context/SceneContext";

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
  const { camera, mouse } = useThree();
  const { zoom, setZoom } = useSceneContext() as any;

  const originPos = useMemo(() => {
    return camera.position.clone();
  }, [])
  const posVec = useMemo(() => new THREE.Vector3(), []);
  const lookVec = useMemo(() => new THREE.Vector3(), []);
  const giftVec = useMemo(() => new THREE.Vector3(0.908, 0.162, 0), []);

  const handlePointerUp = useCallback((e: ThreeEvent<PointerEvent>) => {
    setZoom(true);
  }, [])
  const handlePointerMissed = useCallback(() => {
    setZoom(false);
  }, []);

  useFrame(() => {
    if (zoom) {
      camera.position.lerp(posVec.set(giftVec.x, giftVec.y + 1.2, giftVec.z + 1.6), 0.06);
      camera.lookAt(lookVec.set(giftVec.x, giftVec.y, giftVec.z));
    } else {
      camera.position.lerp(posVec.set(originPos.x, originPos.y, originPos.z), 0.06);
      camera.lookAt(0, 1, 0);
    }
  }) 

  return (
    <group position={giftVec} onPointerUp={handlePointerUp} onPointerMissed={handlePointerMissed} {...props} dispose={null}>
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