import '../styles/components/aboutconteiner.sass'
import TypingAnimation from './TypingAnimation/TypingAnimation'

const AboutComteiner = () => {
    return(
      <section className='about-container'>
        <h2 >Quem sou eu</h2>
        <p>
          <TypingAnimation/>
        </p>
      </section>
    )
}

export default AboutComteiner