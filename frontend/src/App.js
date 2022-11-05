import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Languages from "./components/languages/Languages";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <div className="container overflow-x-hidden w-full relative">
        <Header />
        <Services />
        <Languages />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
