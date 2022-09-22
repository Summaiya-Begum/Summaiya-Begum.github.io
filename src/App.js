import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"
import TechStacks from "./components/TechStacks";
import Skills from "./components/Skills";
import Statistics from "./components/Statistics";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <TechStacks/>
      <Skills />
      <Projects />
      <Statistics />
      <Contact />
      <Footer />
      {/* <SocialLinks /> */}
    </div>
  );
}

export default App;
