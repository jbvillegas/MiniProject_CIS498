import {useContext, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Projects from "./Projects";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import { DataContext } from "../App";

export default function Home() {
  const { userProfile } = useContext(DataContext);

  const pReference = useRef(null);

  
  const handleScrollTo = (offset) => {
    if (pReference.current) {
      pReference.current.scrollTo(offset);
    }
  };

  return (
    <div>
      {/* We use a reference to move to the sections */}
      <Parallax pages={4} ref={pReference}>
        <ParallaxLayer offset={0} speed={0.5} factor={0.5} />

        {/* We divide all the parallax in layers */}
        <ParallaxLayer offset={0} speed={0.2} factor={0.5}>
          <div id="home" className="flex justify-center items-center h-full">
            <h1 className="text-7xl font-bold mb-6 text-teal-500 text-center">
              Hi, I'm {userProfile?.username || "Amari"},<br /> and I am a Web Developer.
            </h1>
          </div>
        </ParallaxLayer>

        {/* Projects */}
        <ParallaxLayer offset={1} speed={0.4} factor={0.5}>
          <div id="projects">
            <Projects />
          </div>
        </ParallaxLayer>

        {/* About Me */}
        <ParallaxLayer offset={2} speed={0.6} factor={0.5}>
          <div id="about">
            <AboutMe />
          </div>
        </ParallaxLayer>

        {/* Contact */}
        <ParallaxLayer offset={3} speed={0.8} factor={0.5}>
          <div id="contact">
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
