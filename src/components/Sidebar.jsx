import React from "react";
import Avatar from '../img/siberp.jpg'
import '../styles/components/sidebar.sass';

import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
    return(
        <aside id='sidebar'>
            <img src={Avatar} alt="Avatar" className="Avatar"/>
            <p className="title">Desenvolvedor fornt-end</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="" className="button pulse ">
                Dawnload curriculo
            </a>
        </aside>
    )
}
export default Sidebar

