import bgpic from './assets/bgPic.jpg'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className='text-white h-screen bg-cover bg-no-repeat justify-center bg-black w-full' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,1)), url(${bgpic})`}}>
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
