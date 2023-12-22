import React from 'react';


const JavaScriptImage = (props) => {
  return (
    <div className='w-20 '>
      <i>
        <img src={props.src} alt={props.name} className='w-20 text-neutral-950 ' />
      </i>
    </div>
  );
};

export default JavaScriptImage;