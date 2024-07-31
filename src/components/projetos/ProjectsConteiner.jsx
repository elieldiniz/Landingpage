import React, { useState } from 'react';
import '../../styles/components/projetos/projectconteiner.sass';
import mokupsiphone from '../../img/iPhonMockup.png'
import MacbookMockup from '../../img/MacbookMockup.png'

const ProjectContainer = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "MaxFilmes",
      description: "Este projeto foi desenvolvido com o objetivo de criar um catálogo interativo e abrangente de filmes e séries, utilizando a API do TMDB. A integração com a API permite a obtenção de informações detalhadas e atualizadas sobre uma ampla variedade de conteúdos.",
      link: 'https://striming.vercel.app/',
      image: mokupsiphone,
      mokups: MacbookMockup,
      stack: ''
    },
    {
      id: 2,
      name: "MaxFlix",
      description: "Descrição do Projeto 1",
      link: 'https://striming.vercel.app/',
      image: mokupsiphone,
      mokups: MacbookMockup
    },
    {
      id: 3,
      name: "MaxFlix",
      description: "Descrição do Projeto 1",
      link: 'https://striming.vercel.app/',
      image: mokupsiphone,
      mokups: MacbookMockup
    },
    // Adicione mais projetos aqui
  ]);

  const startIndex = 0; // Índice inicial dos itens que você deseja exibir
  const endIndex = 6; // Índice final (não incluso) dos itens que você deseja exibir

  return (
    <section className='project-container'>
      <div className="CardProject   ">

            {projects.slice(startIndex, endIndex)
            .map((project) => (
            <div key={project.id} className='carditem pulse1 '>

                <div className='card-projeto'>
                    <div className='titli'>
                      <h3 h3>{project.name}</h3>
                    </div>
                    
                    <div className='conatiner-img'>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className='buttonProjct flex'>
                          <img src={project.image} alt="mockup-iphone " className='cardiconiphon'/>
                          <img src={project.mokups} alt="mockup-notebook " className='cardiconnotebook'/>
                        </a>
                    </div>
                </div>

                <div className='descricao-projeto'>
                  <p>
                    <h2>Sobre o projeto</h2>
                    <div>{project.description}</div>
                    <h3>Stack:{project.stack}</h3>
                  </p>
                </div>
                
            </div>
            ))
        
        }
      </div>
    </section>
  );
};

export default ProjectContainer;
