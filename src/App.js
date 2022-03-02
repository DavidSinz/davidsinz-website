import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Experience from "./components/main/Experiences";
import Footer from "./components/ui/Footer";
import Header from "./components/main/Header";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
