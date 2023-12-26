
import '../styles/components/technologieconteiner.sass'
import React from 'react';
import JavaScript from '../img/JavaScript.png';
import JavaScriptImage from './Icon/JavaScript'
import html from "../img/html.png"
import css from "../img/css.png"
import reactjs from "../img/reactjs.png"
import nodejs from "../img/nodejs.png"



const iconsTech = [
    {name: 'JavaScript', image:JavaScript},
    {name: 'Html', image:html},
    {name:'Css',image:css},
    {name:'React.js', image:reactjs },
    {name: 'node.js', image: nodejs}

];

const TechnologieContent = () => {
  return (
    <section>
      <div className="technologies-container">
        <h2>Tecnologia</h2>
        <div className='technologie-grid'>
          {iconsTech.map((items) => (
            <div key={items.name} className='technology-card '>
              <h1>{items.name}</h1>
              <JavaScriptImage src={items.image} name={items.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologieContent;
