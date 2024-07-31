import React from 'react';
import '../../styles/components/tecnologias/technologieconteiner.sass'

const JavaScriptImage = (props) => {
  return (
    <div className='div-icon'>
      <i>
        <img src={props.src} alt={props.name} className='icons' />
      </i>
    </div>
  );
};

export default JavaScriptImage;