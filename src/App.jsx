import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="text-white  justify-center bg-black w-full">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />

      {/* <SocialLinks /> */}
    </div>
  );
}

export default App;
