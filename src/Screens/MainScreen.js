import React, { useRef } from "react";
import HeaderData from "../Components/HeaderData";
import About from "../Components/About";
import NavBar from "../Components/NavBar";
import bgImage from "../Assets/Images/wallpaper.jpg";
import Resume from "../Components/Resume";
import BackgroundEducation from "../Components/BackgroundEducation";
import Projects from "../Components/Projects";
import Tag from "../Components/Tag";
import Footer from "../Components/Footer";

const MainScreen = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="h-screen bg-cover bg-no-repeat bg-center"
      >
        <NavBar scrollToAbout={scrollToAbout} scrollToTop={scrollToTop} />
        <HeaderData />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div>
        <Resume />
      </div>
      <div>
        <BackgroundEducation />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Tag />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainScreen;
