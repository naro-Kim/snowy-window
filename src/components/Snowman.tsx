import * as THREE from "three";
import React, { useCallback, useState } from "react";
import { Html } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
type GLTFResult = GLTF & {
  nodes: {
    Branch001: THREE.Mesh;
    Mouse: THREE.Mesh;
    Santa_hat_1: THREE.Mesh;
    Santa_hat_2: THREE.Mesh;
    Snow_part001: THREE.Mesh;
    Snowman001: THREE.Mesh;
    Snowman002: THREE.Mesh;
    Snowman003: THREE.Mesh;
  };
  materials: {
    branch: THREE.MeshStandardMaterial;
    Snowman_eyes: THREE.MeshStandardMaterial;
    white_decor: THREE.MeshStandardMaterial;
    red_decor: THREE.MeshStandardMaterial;
    snow: THREE.MeshBasicMaterial;
    Snowman: THREE.MeshPhysicalMaterial;
    Snowman_nose: THREE.MeshStandardMaterial;
  };
};

export function Snowman(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/assets/Snowman.glb") as GLTFResult;
  const [showUI, setShowUI] = useState<boolean>(false);
  const handlePointerUp = useCallback(() => {
    setShowUI(!showUI);
  }, []);

  const handlePointerMissed = useCallback(() => {
    setShowUI(false);
  }, []);

  return (
    <> 
      <Html position={[0, 2.1, 0]} scale={0.15} className={`transition-all duration-500 ${showUI ? "opacity-100" : "opacity-0"}`} transform center distanceFactor={5}>
        <div className="transform scale-1000 text-center text-pretty border-2 border-solid rounded-lg bg-[rgba(0,0,0,0.2)] border-[rgba(0,0,0,0.1)] p-2">
            <h1 className="font-bold text-[0.5rem] leading-4">
              {'Cheers to 2024!'}
            </h1>
            <p className="text-[0.3rem] text-slate-300">
              {'Embrace the New Year with'}<br />
              {'joy, hope, and endless possibilities!'}
            </p>
          </div>
      </Html> 
      <group {...props} dispose={null} onPointerUp={handlePointerUp} onPointerMissed={handlePointerMissed}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Branch001.geometry}
        material={materials.branch}
        position={[0, 0.102, 0]}
        rotation={[0.223, 0, 0]}
        scale={0.099}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mouse.geometry}
        material={materials.Snowman_eyes}
        position={[0.022, 1.086, -0.235]}
        rotation={[-0.19, 0, 0]}
        scale={0.019}
      />
      <group
        position={[-0.038, 1.35, 0.025]}
        rotation={[1.788, 0.208, 1.976]}
        scale={[1.248, 1.357, 1.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Santa_hat_1.geometry}
          material={materials.white_decor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Santa_hat_2.geometry}
          material={materials.red_decor}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Snow_part001.geometry}
        material={materials.snow}
        position={[-0.006, 0.103, 0]}
        scale={0.047}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Snowman001.geometry}
        material={materials.Snowman}
        position={[0, 0.102, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.381, -0.365, -0.381]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Snowman002.geometry}
        material={materials.Snowman_eyes}
        position={[0, 0.102, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.381, -0.365, -0.381]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Snowman003.geometry}
        material={materials.Snowman_nose}
        position={[0, 0.102, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.381, -0.365, -0.381]}
      />
    </group>
    </>
  );
}

useGLTF.preload("/assets/Snowman.glb");
