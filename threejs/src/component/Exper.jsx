import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrame } from "@react-three/fiber";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Exper = () => {
  const { scene } = useGLTF("/shape.glb");
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // delta use karne se speed har monitor (60Hz, 120Hz, 144Hz) par same rehti hai
      meshRef.current.rotation.y += 0.5 * delta; // Y-axis rotation (0.5 speed hai, badha/ghata sakte hain)
      meshRef.current.rotation.x += 0.3 * delta; // X-axis rotation (different direction)
    }
  });

  useGSAP(
    () => {
      // ---- 1. 3D MODEL POSITION ANIMATION (ScrollTrigger 1) ----
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section1",
          endTrigger: "#section2",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.to(meshRef.current.position, {
        z: 4, // Model position +4 shift hogi scroll ke sath
        ease: "none",
      });
    },

    gsap.fromTo(
      "#section2",
      {
        "--blur-bg": "0px",
      },
      {
        "--blur-bg": "15px", // Background blur ki max value (Jitna blur chahiye yahan change karein)
        ease: "none",
        scrollTrigger: {
          trigger: "#section2",
          start: "top bottom", // Blur shuru hoga jab Section 2 screen ke bottom se upar aane lagega
          end: "top center", // Section 2 ke half screen par aate hi background fully blur ho jayega
          scrub: true,
        },
      },
    ),
    { dependencies: [scene] },
  ); // Scene load hone par recalculate karega

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
