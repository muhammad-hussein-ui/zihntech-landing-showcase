import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Skills />
        <Projects />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
