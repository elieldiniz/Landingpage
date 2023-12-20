
/*const socialNetworks= [
    {name: 'JavaScript', icon:<JavaScript/>},
    {name: 'TypeScript', icon:<TypeScript/>},
    {name: 'Node.js', icon:<Node/>},
    {name: 'Next.js', icon:<Next/>},
    {name: 'React.js', icon:<React/>},
    {name: 'PostgreSQL', icon:<PostgreSQl/>}
]
*/
import JavaScript from '../img/JavaScript.png'
import JavaScriptImage from "./Icon/JavaScript"

const TechnologieContent = () =>{
    return(
        <section>
            <div className="container">
                <h1>technologie</h1>
                <div>
                    <p>javascript</p>
                    <JavaScriptImage src ={JavaScript}/>
                </div>
            </div>
        </section>
    )
}

export default TechnologieContent