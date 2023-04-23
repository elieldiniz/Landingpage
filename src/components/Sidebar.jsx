import React from "react";
import Avatar from '../img/siberp.png'
import '../styles/components/sidebar.sass';

import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
    return(
        <aside id='sidebar'>
            <img src={Avatar} alt="Avatar" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="" className="btn">
                Dawnload curriculo
            </a>
        </aside>
    )
}
export default Sidebar

