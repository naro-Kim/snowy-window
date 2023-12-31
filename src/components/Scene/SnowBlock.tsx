
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
type GLTFResult = GLTF & {
  nodes: {
    Snowball: THREE.Mesh;
  };
  materials: {
    SnowVolume: THREE.MeshStandardMaterial;
  };
};

export function SnowBlock(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/assets/block.glb") as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Snowball.geometry}
        material={materials.SnowVolume}
      />
    </group>
  );
}

useGLTF.preload("/assets/block.glb");