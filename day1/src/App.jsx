import Sad from "./feature/component/Sad";
import Home from "./feature/homepage/Home";

function App() {
  return (
    <>
      <div className="screen h-screen w-screen flex justify-center items-center text-white text-center text-6xl bg-black ">
        <Home>
          <div>First</div>
          <div>Second</div>
          <div>Third</div>
        </Home>
        <Home>
          <Sad />
          <Sad />
          <Sad />
        </Home>
      </div>
    </>
  );
}

export default App;
