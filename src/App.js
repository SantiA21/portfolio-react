import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience/>
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
