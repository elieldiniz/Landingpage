import React from 'react';
import '../styles/components/icons.sass'

const JavaScriptImage = (props) => {
  return (
    <div>
      <i>
        <img src={props.src} alt={props.name} className='icons' />
      </i>
    </div>
  );
};

export default JavaScriptImage;