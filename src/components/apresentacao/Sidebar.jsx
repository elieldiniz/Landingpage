import React from "react";
import Avatar from '../../img/siberp.jpg'
import '../../styles/components/apresentacao/sidebar.sass';
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import Header from '../header/Header'





const Sidebar = () => {
    return(
        <aside id="sidebar" className="scroll-bg">
          <div class="container-page">
            <img src={Avatar} alt="Avatar" class="avatar" />
            <InformationContainer/>
            <SocialNetworks />
            <div class="sidebarvegation">
            <Header/>
            </div>
          </div>
      </aside>
      
    )
}
export default Sidebar



