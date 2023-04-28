import React from "react";
import '../styles/components/maincontent.sass'
import AboutComteiner from '../components/AboutConteiner'
import TechnologieContent from '../components/TechnologiesConteiner'
import ProjectConteiner from '../components/ProjectsConteiner'

const MainContents = () => {
    return(
        <main id="main-content">
            <AboutComteiner/>
            <TechnologieContent/>
            <ProjectConteiner/>
        </main>
        
    )
}

export default MainContents