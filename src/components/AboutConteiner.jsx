import '../styles/components/aboutconteiner.sass'
import github from '../../api/github.cjs'

const AboutComteiner = () => {
    return(
      <section className='about-container'>
        <h2>Quem sou eu</h2>
        <p>
          {github()}
            Bom ,Sou um entusiasta apaixonado por tecnologia, dedicado ao desenvolvimento front-end. <br />
            Minha jornada no mundo do código é guiada pela curiosidade e pela busca constante de <br />
            aprender algo novo todos os dias.
        </p>
        <p>
            Trabalho principalmente com HTML, CSS e JavaScript, sempre tentando encontrar maneiras <br />
            de tornar as interfaces mais amigáveis e acessíveis. Acredito que a tecnologia tem o <br />
            poder de simplificar as coisas e estou comprometido em fazer minha parte para contribuir <br />
            de maneira positiva.
        </p>

      </section>
    )
}

export default AboutComteiner