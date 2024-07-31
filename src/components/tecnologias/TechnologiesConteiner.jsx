
import '../../styles/components/tecnologias/technologieconteiner.sass'
import React from 'react';
import JavaScript from '../../img/JavaScript.png';
import html from "../../img/html.png"
import css from "../../img/css.png"
import reactjs from "../../img/reactjs.png"
import nodejs from "../../img/nodejs.png"



const iconsTech = [
    {name: 'JavaScript', image:JavaScript},
    {name: 'Html', image:html},
    {name:'Css',image:css},
    {name:'React.js', image:reactjs },
    {name: 'node.js', image: nodejs},

    
    
];

const TechnologieContent = () => {
  return (
    <section className='tecnologia-container'>
      <div class="loop-slider">
      <div class="inner">
        <div class="tag"><span>#</span> JavaScript</div>
        <div class="tag"><span>#</span> webdev</div>
        <div class="tag"><span>#</span> Typescript</div>
        <div class="tag"><span>#</span> Next.js</div>
        <div class="tag"><span>#</span> JavaScript</div>
        <div class="tag"><span>#</span> node.js</div>
        <div class="tag"><span>#</span> Typescript</div>
        <div class="tag"><span>#</span> Next.js</div>
        <div class="tag"><span>#</span> postgre</div>
        <div class="tag"><span>#</span> JavaScript</div>
        <div class="tag"><span>#</span> react.js</div>
        <div class="tag"><span>#</span> Typescript</div>
        <div class="tag"><span>#</span> Next.js</div>
        <div class="tag"><span>#</span> JavaScript</div>
        <div class="tag"><span>#</span> webdev</div>
        <div class="tag"><span>#</span> Typescript</div>
        <div class="tag"><span>#</span> Next.js</div>
        
      </div>
</div>


    </section>
  );
};

export default TechnologieContent;

