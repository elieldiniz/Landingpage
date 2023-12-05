import '../styles/components/technologieconteiner.sass'
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact
} from 'react-icons/di'

const technologies = [
    { id: "html" ,name:"HTML5", icon: <DiCss3/>},
    { id: "css" ,name:"CSS3", icon: <DiCss3/>},
    { id: "js" ,name:"JavaScript", icon: <DiJsBadge/>},
    { id: "node" ,name:"Node.js", icon: <DiNodejsSmall/>},
    { id: "mysql" ,name:"MySQL", icon: <DiMysql/>},
    { id: "react" ,name:"React", icon: <DiReact/>}
    
   
]

const TechnologieContent = () => {
    return(
       <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className='technologie-grid'>
        {technologies.map((tech) =>(
               <div className='technology-card' id ={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className='tecnology-info'>
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            ur, inventore at autem dolorem neque eum.</p>
                    </div>
               </div>
            ))}
        </div>
           

       </section>
    )
}


export default TechnologieContent