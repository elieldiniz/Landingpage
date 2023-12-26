// TypingAnimation.jsx

import React, { useEffect, useState } from 'react';

const TypingAnimation = () => {
  const texto = `
    Bom ,Sou um entusiasta apaixonado por tecnologia,
    dedicado ao desenvolvimento front-end. Minha jornada no
    mundo do código é guiada pela curiosidade e pela busca 
    constante de aprender algo novo todos os dias.
    Trabalho principalmente com HTML, CSS e JavaScript,
    sempre tentando encontrar maneirasde tornar as interfaces
    mais amigáveis e acessíveis. Acredito que a tecnologia tem
    o poder de simplificar as coisas e estou comprometido em fazer
    minha parte para contribuir de maneira positiva.`

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedText(texto.slice(0, index));
      setIndex((prevIndex) => prevIndex + 1);

      if (index >= texto.length) {
        clearInterval(intervalId);
      }
    }, 50); // Ajuste o intervalo conforme necessário

    return () => clearInterval(intervalId);
  }, [index, texto]);

  return(
    <>
        <div className="typing-animation p-2 text-xl font-mono border-r-2 border-black lg:flex">{displayedText}</div> <br />
        
    </>
    
  )
};

export default TypingAnimation;
