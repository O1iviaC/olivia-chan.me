import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import WorkCard from "../components/WorkCard"

const Projects = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="Projects" text="Projects from the past as a foundation for the future."/>
        {/* <WorkCard/> */}
        <Footer/>
    </div>
  );
};

export default Projects