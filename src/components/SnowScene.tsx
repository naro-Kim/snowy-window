/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plateau: THREE.Mesh;
    Cylinder054: THREE.Mesh;
    Cylinder057: THREE.Mesh;
    Cylinder058: THREE.Mesh;
    Cylinder059: THREE.Mesh;
    Cylinder060: THREE.Mesh;
    Cylinder061: THREE.Mesh;
    Cylinder062: THREE.Mesh;
    Cylinder063: THREE.Mesh;
    Cylinder064: THREE.Mesh;
    Cylinder065: THREE.Mesh;
    Cylinder066: THREE.Mesh;
    Cylinder068: THREE.Mesh;
    Cylinder069: THREE.Mesh;
    Cylinder070: THREE.Mesh;
    Cylinder071: THREE.Mesh;
    Cylinder096: THREE.Mesh;
    Cylinder097: THREE.Mesh;
    Cylinder098: THREE.Mesh;
    Cylinder099: THREE.Mesh;
    Cylinder100: THREE.Mesh;
    Cylinder101: THREE.Mesh;
    Cylinder102: THREE.Mesh;
    Cylinder104: THREE.Mesh;
    Cylinder111: THREE.Mesh;
    Cylinder112: THREE.Mesh;
    Cylinder113: THREE.Mesh;
    Cylinder114: THREE.Mesh;
    Cylinder115: THREE.Mesh;
    Cylinder116: THREE.Mesh;
    Cylinder117: THREE.Mesh;
    Cylinder118: THREE.Mesh;
    Cylinder119: THREE.Mesh;
    Cylinder042: THREE.Mesh;
    Cylinder043: THREE.Mesh;
    Cylinder044: THREE.Mesh;
    Cylinder045: THREE.Mesh;
    Cylinder046: THREE.Mesh;
    Cylinder047: THREE.Mesh;
    Cylinder120: THREE.Mesh;
    Cylinder121: THREE.Mesh;
    Cylinder122: THREE.Mesh;
    Cylinder123: THREE.Mesh;
    Cylinder124: THREE.Mesh;
    Cylinder125: THREE.Mesh;
    Cylinder048: THREE.Mesh;
    Cylinder049: THREE.Mesh;
    Cylinder050: THREE.Mesh;
    Cylinder051: THREE.Mesh;
    Cylinder052: THREE.Mesh;
    Cylinder053: THREE.Mesh;
    Cylinder072: THREE.Mesh;
    Cylinder073: THREE.Mesh;
    Cylinder074: THREE.Mesh;
    Cylinder075: THREE.Mesh;
    Cylinder076: THREE.Mesh;
    Cylinder077: THREE.Mesh;
    Cylinder078: THREE.Mesh;
    Cylinder079: THREE.Mesh;
    Cylinder080: THREE.Mesh;
    Cylinder081: THREE.Mesh;
    Cylinder082: THREE.Mesh;
    Cylinder083: THREE.Mesh;
    Cylinder084: THREE.Mesh;
    Cylinder085: THREE.Mesh;
    Cylinder086: THREE.Mesh;
    Cylinder087: THREE.Mesh;
    Cylinder088: THREE.Mesh;
    Cylinder089: THREE.Mesh;
    Bush_winter_010: THREE.Mesh;
    Bush_winter_010001: THREE.Mesh;
    Bush_winter_010002: THREE.Mesh;
    Bush_winter_010003: THREE.Mesh;
    Pine3_Snow001: THREE.Mesh;
    Pine3_Snow002: THREE.Mesh;
    Pine2_Snow001: THREE.Mesh;
    Pine2_Snow002: THREE.Mesh;
    Branch001: THREE.Mesh;
    Mouse: THREE.Mesh;
    Snow_part001: THREE.Mesh;
    Snowman001: THREE.Mesh;
    Snowman002: THREE.Mesh;
    Snowman003: THREE.Mesh;
    Santa_hat_1: THREE.Mesh;
    Santa_hat_2: THREE.Mesh;
    Present_big_decor_1: THREE.Mesh;
    Present_big_decor_2: THREE.Mesh;
    Present_long_1: THREE.Mesh;
    Present_long_2: THREE.Mesh;
    Present_long_3: THREE.Mesh;
    Christmast_tree_1: THREE.Mesh;
    Christmast_tree_2: THREE.Mesh;
    baubles_decor: THREE.Mesh;
    baubles_decor_1: THREE.Mesh;
    baubles_decor_2: THREE.Mesh;
    baubles_decor_3: THREE.Mesh;
    Present_cube_decor_1: THREE.Mesh;
    Present_cube_decor_2: THREE.Mesh;
    Present_cube_decor_3: THREE.Mesh;
    Bricks: THREE.Mesh;
    Wall: THREE.Mesh;
  };
  materials: {
    ["Material #25.010"]: THREE.MeshStandardMaterial;
    ["tree.007"]: THREE.MeshStandardMaterial;
    ["tree_.009"]: THREE.MeshStandardMaterial;
    stone: THREE.MeshStandardMaterial;
    ["Evergreen.002"]: THREE.MeshStandardMaterial;
    branch: THREE.MeshStandardMaterial;
    Snowman_eyes: THREE.MeshStandardMaterial;
    snow: THREE.MeshBasicMaterial;
    Snowman: THREE.MeshPhysicalMaterial;
    Snowman_nose: THREE.MeshStandardMaterial;
    white_decor: THREE.MeshStandardMaterial;
    red_decor: THREE.MeshStandardMaterial;
    green_forest: THREE.MeshStandardMaterial;
    ["red_decor.001"]: THREE.MeshStandardMaterial;
    ["present_decor.001"]: THREE.MeshPhysicalMaterial;
    ["green_forest.001"]: THREE.MeshPhysicalMaterial;
    brown_picture_frame: THREE.MeshPhysicalMaterial;
    brown_decor: THREE.MeshStandardMaterial;
    papir_flaska: THREE.MeshPhysicalMaterial;
    ["candy_white.002"]: THREE.MeshStandardMaterial;
    present_decor: THREE.MeshPhysicalMaterial;
    ["forest green"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    wall: THREE.MeshStandardMaterial;
  };
};

export function SnowScene(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/assets/SnowScene.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plateau.geometry}
        material={materials["Material #25.010"]}
        position={[0.968, -0.019, 0.942]}
        rotation={[Math.PI / 2, 0, 0.667]}
        scale={0.004}
      />
      <group
        position={[-3.053, -0.07, 4.363]}
        rotation={[-0.047, 1.177, 0.079]}
        scale={3.018}
      >
        <group position={[1.157, 1.239, -0.014]} scale={0.028}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder054.geometry}
            material={materials["tree.007"]}
            position={[0, -44.579, 0]}
            scale={2.004}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder057.geometry}
            material={materials["tree.007"]}
            position={[1.454, -28.071, 0.86]}
            rotation={[0, -0.534, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder058.geometry}
            material={materials["tree.007"]}
            position={[0.047, -25.371, -1.689]}
            rotation={[0, 1.543, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder059.geometry}
            material={materials["tree.007"]}
            position={[1.689, -9.721, 0]}
            rotation={[0, 0, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder060.geometry}
            material={materials["tree.007"]}
            position={[-1.689, -13.871, 0.049]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder061.geometry}
            material={materials["tree.007"]}
            position={[-0.083, -22.148, 1.687]}
            rotation={[-Math.PI, -1.522, 2.183]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder062.geometry}
            material={materials["tree.007"]}
            position={[0.047, -13.871, -1.689]}
            rotation={[0, 1.543, -0.959]}
            scale={0.842}
          />
        </group>
      </group>
      <group
        position={[-1.238, -0.147, 0.899]}
        rotation={[2.999, 1.03, -3.019]}
        scale={3.131}
      >
        <group
          position={[1.185, 1.239, -0.037]}
          rotation={[2.884, -1.161, 2.973]}
          scale={0.028}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063.geometry}
            material={materials["tree.007"]}
            position={[0, -44.579, 0]}
            scale={2.004}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder064.geometry}
            material={materials["tree.007"]}
            position={[1.689, -37.748, 0]}
            rotation={[0, 0, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder065.geometry}
            material={materials["tree.007"]}
            position={[-1.689, -35.662, 0.049]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder066.geometry}
            material={materials["tree.007"]}
            position={[1.454, -28.071, 0.86]}
            rotation={[0, -0.534, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder068.geometry}
            material={materials["tree.007"]}
            position={[1.689, -9.721, 0]}
            rotation={[0, 0, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder069.geometry}
            material={materials["tree.007"]}
            position={[-1.689, -13.871, 0.049]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder070.geometry}
            material={materials["tree.007"]}
            position={[-0.083, -22.148, 1.687]}
            rotation={[Math.PI, -1.522, 2.183]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder071.geometry}
            material={materials["tree.007"]}
            position={[0.047, -13.871, -1.689]}
            rotation={[0, 1.543, -0.959]}
            scale={0.842}
          />
        </group>
      </group>
      <group
        position={[6.849, -0.344, 1.397]}
        rotation={[-3.138, 0.329, -3.136]}
        scale={3.321}
      >
        <group
          position={[1.287, 1.352, -0.042]}
          rotation={[-3.136, 0.379, -3.13]}
          scale={0.028}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder096.geometry}
            material={materials["tree.007"]}
            position={[0, -44.579, 0]}
            scale={2.004}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder097.geometry}
            material={materials["tree.007"]}
            position={[1.689, -37.748, 0]}
            rotation={[0, 0, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder098.geometry}
            material={materials["tree.007"]}
            position={[-1.689, -35.662, 0.049]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099.geometry}
            material={materials["tree.007"]}
            position={[1.454, -28.071, 0.86]}
            rotation={[0, -0.534, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder100.geometry}
            material={materials["tree.007"]}
            position={[0.047, -25.371, -1.689]}
            rotation={[0, 1.543, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder101.geometry}
            material={materials["tree.007"]}
            position={[1.689, -9.721, 0]}
            rotation={[0, 0, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder102.geometry}
            material={materials["tree.007"]}
            position={[-1.689, -13.871, 0.049]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder104.geometry}
            material={materials["tree.007"]}
            position={[0.047, -13.871, -1.689]}
            rotation={[0, 1.543, -0.959]}
            scale={0.842}
          />
        </group>
      </group>
      <group
        position={[4.022, -0.103, 5.848]}
        rotation={[-3.121, 0.542, -3.117]}
        scale={3.018}
      >
        <group position={[1.163, 1.242, 0]} scale={0.028}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111.geometry}
            material={materials["tree.007"]}
            position={[0.047, -13.871, -1.689]}
            rotation={[0, 1.543, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder112.geometry}
            material={materials["tree.007"]}
            position={[-1.09, -22.123, 2.295]}
            rotation={[-Math.PI, -1.522, 2.183]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder113.geometry}
            material={materials["tree.007"]}
            position={[-1.689, -13.871, 0.049]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder114.geometry}
            material={materials["tree.007"]}
            position={[1.689, -9.721, 0]}
            rotation={[0, 0, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder115.geometry}
            material={materials["tree.007"]}
            position={[0.047, -25.371, -1.689]}
            rotation={[0, 1.543, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder116.geometry}
            material={materials["tree.007"]}
            position={[1.454, -28.071, 0.86]}
            rotation={[0, -0.534, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder117.geometry}
            material={materials["tree.007"]}
            position={[-1.689, -35.662, 0.049]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder118.geometry}
            material={materials["tree.007"]}
            position={[1.689, -37.748, 0]}
            rotation={[0, 0, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119.geometry}
            material={materials["tree.007"]}
            position={[0, -44.579, 0]}
            scale={2.004}
          />
        </group>
      </group>
      <group
        position={[0.494, -0.217, -2.868]}
        rotation={[-0.074, -1.171, -0.087]}
        scale={2.768}
      >
        <group
          position={[1.408, 1.448, 0.087]}
          rotation={[-Math.PI, 1.054, -Math.PI]}
          scale={[0.028, 0.031, 0.028]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder042.geometry}
            material={materials["tree.007"]}
            position={[0, -44.579, 0]}
            scale={[1.385, 2.004, 1.385]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder043.geometry}
            material={materials["tree.007"]}
            position={[1.689, -37.748, 0]}
            rotation={[0, 0, -0.959]}
            scale={0.586}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder044.geometry}
            material={materials["tree.007"]}
            position={[0.755, -28.541, 0.947]}
            rotation={[0, -0.534, -0.959]}
            scale={0.598}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder045.geometry}
            material={materials["tree.007"]}
            position={[-0.18, -16.804, -0.582]}
            rotation={[0, 1.543, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder046.geometry}
            material={materials["tree.007"]}
            position={[1.689, -9.721, 0]}
            rotation={[0, 0, -0.959]}
            scale={0.57}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047.geometry}
            material={materials["tree.007"]}
            position={[-1.386, -21.878, 0.129]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.598}
          />
        </group>
      </group>
      <group
        position={[-2.006, 0.243, 6.893]}
        rotation={[-0.098, 1.271, 0.075]}
        scale={2.768}
      >
        <group
          position={[1.433, 1.43, -0.028]}
          rotation={[0.095, -0.843, 0.046]}
          scale={[0.028, 0.031, 0.028]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder120.geometry}
            material={materials["tree.007"]}
            position={[-1.386, -21.878, 0.129]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.598}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder121.geometry}
            material={materials["tree.007"]}
            position={[1.689, -9.721, 0]}
            rotation={[0, 0, -0.959]}
            scale={0.57}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder122.geometry}
            material={materials["tree_.009"]}
            position={[-0.18, -16.804, -0.582]}
            rotation={[0, 1.543, -0.959]}
            scale={0.842}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder123.geometry}
            material={materials["tree.007"]}
            position={[0.755, -28.541, 0.947]}
            rotation={[0, -0.534, -0.959]}
            scale={0.598}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder124.geometry}
            material={materials["tree.007"]}
            position={[1.211, -37.254, -0.121]}
            rotation={[0.074, -0.022, -1.306]}
            scale={0.586}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder125.geometry}
            material={materials["tree.007"]}
            position={[0, -44.579, 0]}
            scale={[1.385, 2.004, 1.385]}
          />
        </group>
      </group>
      <group
        position={[-2.715, -0.385, -1.285]}
        rotation={[-0.004, 0.155, 0.019]}
        scale={2.944}
      >
        <group
          position={[2.043, 1.457, 0.044]}
          rotation={[Math.PI, -0.65, Math.PI]}
          scale={[0.028, 0.031, 0.028]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048.geometry}
            material={materials["tree.007"]}
            position={[0, -44.579, 0]}
            scale={[0.665, 2.004, 0.665]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder049.geometry}
            material={materials["tree.007"]}
            position={[0.587, -37.765, 0.038]}
            rotation={[0, 0, -0.959]}
            scale={0.343}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder050.geometry}
            material={materials["tree.007"]}
            position={[-0.18, -12.169, -0.582]}
            rotation={[Math.PI, 0.857, 2.183]}
            scale={0.626}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder051.geometry}
            material={materials["tree.007"]}
            position={[-0.18, -26.016, -0.582]}
            rotation={[0, 1.543, -0.959]}
            scale={0.626}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder052.geometry}
            material={materials["tree.007"]}
            position={[0.592, -9.547, 0.07]}
            rotation={[0, 0, -0.959]}
            scale={0.287}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder053.geometry}
            material={materials["tree.007"]}
            position={[-0.553, -21.792, 0.22]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.372}
          />
        </group>
      </group>
      <group
        position={[-3.038, 0.05, 4.284]}
        rotation={[0, 0.153, 0]}
        scale={2.695}
      >
        <group
          position={[1.74, 1.43, 0]}
          rotation={[Math.PI, -0.65, Math.PI]}
          scale={[0.028, 0.031, 0.028]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder072.geometry}
            material={materials["tree.007"]}
            position={[0, -44.579, 0]}
            scale={[0.665, 2.004, 0.665]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder073.geometry}
            material={materials["tree.007"]}
            position={[0.587, -37.765, 0.038]}
            rotation={[0, 0, -0.959]}
            scale={0.343}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder074.geometry}
            material={materials["tree.007"]}
            position={[-0.18, -12.169, -0.582]}
            rotation={[-Math.PI, 0.857, 2.183]}
            scale={0.626}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder075.geometry}
            material={materials["tree.007"]}
            position={[-0.18, -26.016, -0.582]}
            rotation={[0, 1.543, -0.959]}
            scale={0.626}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder076.geometry}
            material={materials["tree.007"]}
            position={[0.592, -9.547, 0.07]}
            rotation={[0, 0, -0.959]}
            scale={0.287}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder077.geometry}
            material={materials["tree.007"]}
            position={[-0.553, -21.792, 0.22]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.372}
          />
        </group>
      </group>
      <group
        position={[-1.591, -0.27, 2.037]}
        rotation={[0, 0.153, 0]}
        scale={2.469}
      >
        <group
          position={[1.727, 1.684, -0.001]}
          rotation={[Math.PI, -0.65, Math.PI]}
          scale={[0.028, 0.031, 0.028]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder078.geometry}
            material={materials["tree.007"]}
            position={[0, -44.579, 0]}
            scale={[0.665, 2.004, 0.665]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder079.geometry}
            material={materials["tree.007"]}
            position={[0.587, -37.765, 0.038]}
            rotation={[0, 0, -0.959]}
            scale={0.343}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder080.geometry}
            material={materials["tree.007"]}
            position={[-0.18, -12.169, -0.582]}
            rotation={[Math.PI, 0.857, 2.183]}
            scale={0.626}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder081.geometry}
            material={materials["tree.007"]}
            position={[-0.18, -26.016, -0.582]}
            rotation={[0, 1.543, -0.959]}
            scale={0.626}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082.geometry}
            material={materials["tree.007"]}
            position={[0.592, -9.547, 0.07]}
            rotation={[0, 0, -0.959]}
            scale={0.287}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder083.geometry}
            material={materials["tree.007"]}
            position={[-0.553, -21.792, 0.22]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.372}
          />
        </group>
      </group>
      <group
        position={[-7.289, -0.261, -2.725]}
        rotation={[0, -0.108, 0]}
        scale={2.944}
      >
        <group
          position={[1.855, 1.425, -0.016]}
          rotation={[Math.PI, -0.65, Math.PI]}
          scale={[0.028, 0.031, 0.028]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder084.geometry}
            material={materials["tree.007"]}
            position={[0, -44.579, 0]}
            scale={[0.665, 2.004, 0.665]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder085.geometry}
            material={materials["tree.007"]}
            position={[0.587, -37.765, 0.038]}
            rotation={[0.164, -0.058, -1.19]}
            scale={0.343}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder086.geometry}
            material={materials["tree.007"]}
            position={[-0.18, -12.169, -0.582]}
            rotation={[-Math.PI, 0.857, 2.183]}
            scale={0.626}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder087.geometry}
            material={materials["tree.007"]}
            position={[-0.183, -26.098, -0.578]}
            rotation={[0, 1.543, -0.959]}
            scale={0.626}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder088.geometry}
            material={materials["tree.007"]}
            position={[0.592, -9.547, 0.07]}
            rotation={[0, 0, -0.959]}
            scale={0.287}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder089.geometry}
            material={materials["tree.007"]}
            position={[-0.553, -21.792, 0.22]}
            rotation={[Math.PI, -0.029, 2.183]}
            scale={0.372}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_winter_010.geometry}
        material={materials.stone}
        position={[-2.854, -0.086, -1.783]}
        rotation={[1.425, 0.342, -1.84]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_winter_010001.geometry}
        material={materials.stone}
        position={[-3.621, -0.204, -1.055]}
        rotation={[Math.PI / 2, 0, 1.155]}
        scale={0.006}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_winter_010002.geometry}
        material={materials.stone}
        position={[-2.512, 0.109, -1.023]}
        rotation={[Math.PI / 2, 0.189, -2.829]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_winter_010003.geometry}
        material={materials.stone}
        position={[3.319, -0.067, -0.14]}
        rotation={[Math.PI / 2, 0.011, 2.995]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine3_Snow001.geometry}
        material={materials["Evergreen.002"]}
        position={[4.107, 0.052, 1.446]}
        rotation={[Math.PI, -0.81, Math.PI]}
        scale={[0.648, 0.464, 0.648]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine3_Snow002.geometry}
        material={materials["Evergreen.002"]}
        position={[-2.757, -0.074, 0.313]}
        rotation={[-Math.PI, 1.515, -Math.PI]}
        scale={[0.619, 0.553, 0.619]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine2_Snow001.geometry}
        material={materials["Evergreen.002"]}
        position={[2.3, 0.173, 2.915]}
        rotation={[0, 0, 0.064]}
        scale={0.53}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pine2_Snow002.geometry}
        material={materials["Evergreen.002"]}
        position={[-1.67, 0.158, 3.896]}
        rotation={[0, 0, 0.064]}
        scale={0.454}
      />
      <group position={[0, -0.036, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Branch001.geometry}
          material={materials.branch}
          position={[0, 0.138, 0]}
          rotation={[0.223, 0, 0]}
          scale={0.099}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mouse.geometry}
          material={materials.Snowman_eyes}
          position={[0.022, 1.121, -0.235]}
          rotation={[-0.19, 0, 0]}
          scale={0.019}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Snow_part001.geometry}
          material={materials.snow}
          position={[0, 0.144, 0]}
          scale={0.047}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Snowman001.geometry}
          material={materials.Snowman}
          position={[0, 0.138, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.381, -0.365, -0.381]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Snowman002.geometry}
          material={materials.Snowman_eyes}
          position={[0, 0.138, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.381, -0.365, -0.381]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Snowman003.geometry}
          material={materials.Snowman_nose}
          position={[0, 0.138, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.381, -0.365, -0.381]}
        />
      </group>
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
      <group
        position={[-0.446, 0.192, 0.001]}
        rotation={[1.566, 0.124, -0.365]}
        scale={0.984}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Present_big_decor_1.geometry}
          material={materials.green_forest}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Present_big_decor_2.geometry}
          material={materials["red_decor.001"]}
        />
      </group>
      <group position={[0.522, 0.283, 0.001]} rotation={[1.663, -0.007, 0.668]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Present_long_1.geometry}
          material={materials["red_decor.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Present_long_2.geometry}
          material={materials["present_decor.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Present_long_3.geometry}
          material={materials.green_forest}
        />
      </group>
      <group
        position={[-0.624, 0.218, 0.971]}
        rotation={[Math.PI / 2, 0.015, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Christmast_tree_1.geometry}
          material={materials["green_forest.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Christmast_tree_2.geometry}
          material={materials.brown_picture_frame}
        />
      </group>
      <group
        position={[-0.624, 0.218, 0.971]}
        rotation={[Math.PI / 2, 0.015, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baubles_decor.geometry}
          material={materials["red_decor.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baubles_decor_1.geometry}
          material={materials.brown_decor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baubles_decor_2.geometry}
          material={materials.papir_flaska}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.baubles_decor_3.geometry}
          material={materials["candy_white.002"]}
        />
      </group>
      <group
        position={[-0.908, 0.162, 0]}
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bricks.geometry}
        material={materials["Material.001"]}
        position={[0.049, 2.239, -5.254]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[-0.021, -0.078, -0.236]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall.geometry}
        material={materials.wall}
        position={[0.049, 2.239, -5.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.748}
      />
    </group>
  );
}

useGLTF.preload("/assets/SnowScene.glb");
