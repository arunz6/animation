import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Home = ({ children }) => {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.from(containerRef.current.children, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
    });
  });

  return <div ref={containerRef}>{children}</div>;
};

export default Home;
