import '../../styles/components/apresentacao/SocialNetworks.sass'

import{FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import React from "react";

const socialNetworks= [
    {name: 'linkedin', icon:<FaLinkedinIn/>, src:"https://www.linkedin.com/in/eliel-diniz-9836a2235/"},
    {name: 'Github', icon:<FaGithub/>, src:'https://github.com/elieldiniz'},
    {name: 'instagram', icon:<FaInstagram/>, src:'https://www.instagram.com/diz_eliel/'}
]

const SocialNetworks = () => {
    return(
            <section id='social-networks'>
                {socialNetworks.map((network) => (
                    <a href={network.src} className='social-btn' id={network.name} target="_blank" key={network.name}>
                        {network.icon}
                    </a>
                ))}
            </section>
        )
    }
        
        

export default SocialNetworks