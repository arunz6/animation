import { motion } from "motion/react";

function App() {
  return (
    <>
      <div className="screen h-screen w-screen flex justify-center items-center bg-black">
        <motion.div
          className="box h-30 w-30 bg-red-500 "
          initial={{ x: 0 }}
          animate={{ x: 200 ,y:300 }}
        ></motion.div>
      </div>
    </>
  );
}

export default App;
