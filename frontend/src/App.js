import { useEffect } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Languages from "./components/languages/Languages";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <>
      <div className="container overflow-x-hidden w-full relative">
        <Header />
        <Services />
        <Languages />
        <Projects />
        <Contact />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
