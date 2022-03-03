import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Experience from "./components/main/Experiences";
import Footer from "./components/ui/Footer";
import Entry from "./components/main/Entry";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Entry />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
