import React from "react";

import '../../styles/components/header/header.sass';

export default function Header() {
    return (
        <>
            <div id="Header-Container">
                <ul className='menu-items'>
                    <li>
                        <a href="/projeto">Projetos</a>
                    </li>
                </ul>
                <ul className='menu-items'>
                    <li>
                        <a href="/sobre">Sobre</a>
                    </li>
                </ul>
                <ul className='menu-items'>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=5569999311324">Contato</a>
                    </li>
                </ul>
            </div>
        </>
    );
}
