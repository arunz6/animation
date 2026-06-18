import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <>
     <div className="page h-screen w-screen flex justify-center items-center "></div>
    </>
  );
};

export default Home;
