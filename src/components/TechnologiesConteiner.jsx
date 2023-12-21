

import React from 'react';
import JavaScript from '../img/JavaScript.png';
import JavaScriptImage from './Icon/JavaScript'
import html from "../img/html.png"

const iconsTech = [
    {name: 'JavaScript', image:JavaScript},
    {name: 'Html', image:html},
];

const TechnologieContent = () => {
  return (
    <section>
      <div className="container">
        <h1>technologie</h1>
        <div className='flex '>
          {iconsTech.map((items) => (
            <div key={items.name} className='border '>
              <p>{items.name}</p>
              <JavaScriptImage src={items.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologieContent;
