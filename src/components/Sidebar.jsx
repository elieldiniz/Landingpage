import React from "react";
import Avatar from '../img/siberp.png'
import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return(
        <aside id='sidebar'>
            <img src={Avatar} alt="Avatar" />
            <p className="title">Desenvolvedor</p>
            <p>redes sociais</p>
            <p>informacoes de contato</p>
            <a href="" className="btn">
                Dawnload curriculo
            </a>
        </aside>
    )
}
export default Sidebar