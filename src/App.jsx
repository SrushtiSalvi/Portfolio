import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="text-white  justify-center bg-black w-full">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
