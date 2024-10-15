import '../styles/components/projetos/sobre.sass'
import Avatar from '../img/siberp.jpg'

const Sobre = () => {
    return(
        <aside id="sobre-container" className="scroll-bg">
            <div>
                <img src={Avatar} alt="Avatar" class="avatar" />
                <h1>Eliel Diniz </h1>
            </div>
    
            <p className='text'>Nos últimos 2 anos, tenho me dedicado ao desenvolvimento web, construindo um portfólio diversificado de projetos. Comecei explorando os fundamentos da programação e, atualmente, sou capaz de desenvolver aplicações, utilizando tecnologias como React.js, Next.js, NestJS, TypeScript e Node.js.

Minha experiência me permitiu desenvolver habilidades em modelagem de dados, design de interfaces, desenvolvimento de APIs RESTful e otimização de performance. Através de meus projetos, adquiri a capacidade de transformar ideias em produtos reais, entregando soluções que agregam valor aos usuários. </p>
        </aside>
    )
}
export default Sobre



