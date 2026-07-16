import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Exper = () => {
  const { scene } = useGLTF("/shape.glb");
  const meshRef = useRef(null);
  console.log(meshRef.current);
  useGSAP(() => {
    const tl = gsap.timeline({
      trigger: "#section1",
      endTrigger: "#section2",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    });

  });

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[5, 2, 10]} intensity={1} castShadow />
      <directionalLight position={[-10, 10, 10]} intensity={1} castShadow />
      <directionalLight position={[-10, -10, -10]} intensity={1} castShadow />
      <directionalLight position={[4, 2, 9]} intensity={4} />
     

      <primitive
        position={[0, -0.3, 0]}
        object={scene}
        ref={meshRef}
        material={meshRef.material}
        scale={2.1}
      />
    </>
  );
};

export default Exper;
