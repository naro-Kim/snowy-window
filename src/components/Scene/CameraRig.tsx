import { useSceneContext } from "@/context/SceneContext";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

const CameraRig = () => {
  const { camera, mouse } = useThree();
  const { zoom } = useSceneContext() as any;
  const vec = useMemo(() => new THREE.Vector3(), []);

  return useFrame(() => {
    if (mouse && !zoom) {
      camera.position.lerp(
        vec.set(mouse.x, camera.position.y, camera.position.z),
        0.05
      );
      camera.lookAt(0, 1, 0);
    }
  });
};

export default CameraRig;
