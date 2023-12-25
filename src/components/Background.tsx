import { Backdrop } from "@react-three/drei";

export const Background = () => {
  return <Backdrop
    position={[0, 0, -10]}
    receiveShadow={true}
    scale={[100, 10, 24]}
    floor={0.5} // Stretches the floor segment, 0.25 by default
    segments={16} // Mesh-resolution, 20 by default
  >
    <meshStandardMaterial roughness={1} color="#5E6367" />
  </Backdrop>;
};
