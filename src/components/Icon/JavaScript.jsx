import React from 'react';


const JavaScriptImage = (props) => {
  return (
    <div className='w-20'>
      <i>
        <img src={props.src} alt="JavaScript" />
      </i>
    </div>
  );
};

export default JavaScriptImage;