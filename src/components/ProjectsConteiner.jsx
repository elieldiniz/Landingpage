import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/projectconteiner.sass';

const ProjectContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Função assíncrona para obter os projetos do GitHub
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/elieldiniz/repos');
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Chama a função para obter os projetos quando o componente é montado
    fetchProjects();
  }, []);

  const startIndex = 0; // Índice inicial dos itens que você deseja exibir
  const endIndex = 6; // Índice final (não incluso) dos itens que você deseja exibir

  return (
    <section className='project-container'>
      <h2>Projetos</h2>
      <div className='CardProject gap-2'>
      {projects.slice(startIndex, endIndex).map((project) => (
          <div key={project.id} className='carditem'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className='buttonProjct'>
              Ver Projeto
            </a>
          </div>
          ))}

      </div>
      
    </section>
  );
};

export default ProjectContainer;
