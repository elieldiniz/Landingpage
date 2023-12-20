import React from 'react';
const JavaScriptImage = (props) => {
  return (
    <div>
      <i>
        <img src={props.src} alt="JavaScript" />
      </i>
    </div>
  );
};

export default JavaScriptImage;