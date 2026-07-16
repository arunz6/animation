import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Exper = () => {
  const { scene } = useGLTF("/shape.glb");
  const mesh = useRef(null);

  useEffect(() => {
    gsap.to(mesh.current.rotation, {
      y: Math.PI * 2,
      x: Math.PI*3,
      duration: 100,
      repeat: -1,
      ease: 'linear',
    });
    gsap.to(mesh.current.material, {
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    });
  });
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[5, 2, 10]} intensity={1} castShadow />
      <directionalLight position={[-10, 10, 10]} intensity={1} castShadow />
      <directionalLight position={[-10, -10, -10]} intensity={1} castShadow />
<OrbitControls/>
      <primitive object={scene} ref={mesh} material={mesh.material} scale={2.1} />
    </>
  );
};

export default Exper;
