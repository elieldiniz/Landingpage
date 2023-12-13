import '../styles/components/technologieconteiner.sass'
import React from "react"
import github from "../cardComponents/github.ts"



/* criar card para projetos, mapendo do projetos do github, na funcao em api -> github.ts*/

const technologies = [
    { id: "html" ,name:"HTML5", icon: },
    { id: "css" ,name:"CSS3", icon: },
    { id: "js" ,name:"JavaScript", icon: },
    { id: "node" ,name:"Node.js", icon: },
    { id: "mysql" ,name:"MySQL", icon: },
    { id: "react" ,name:"React", icon: }
    
   
]

const TechnologieContent = () => {
    return(
       <section className='Projeto-conteiner'>
        <h2>Projetos</h2>
        <div className='Projeto-grid'>
        {technologies.map((tech) =>(
               <div className='Projeto-card' id ={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className='Projeto-info'>
                        <h3>{tech.name}</h3>
                        <p></p>
                    </div>
               </div>
            ))}
        </div>
           

       </section>
    )
}


export default TechnologieContent