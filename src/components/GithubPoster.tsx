import { ThreeEvent, useLoader } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Euler, TextureLoader } from "three";

const GithubPoster = () => {
  const router = useRouter();
  const textureMap = useLoader(TextureLoader, "/assets/GithubPoster.png");
  const handlePointerEnter = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.eventObject.rotation.set(0, 0, 0.2);
  }, []);
  const handlePointerLeave = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.eventObject.rotation.set(0, 0, 0);
  }, []);
  const handlePointerDown = useCallback(() => {
    router.push('https://github.com/naro-Kim/snowy-window');
  }, []);


  return (
    <group position={[1.5, 2, 5.4]}>
      <mesh
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
      >
        <planeGeometry args={[0.4, 0.4]} />
        <meshStandardMaterial map={textureMap} />
      </mesh>
    </group>
  )
};

export default GithubPoster;