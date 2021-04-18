import React, { useState } from 'react';
import './event.css';

const Eventwithhooks = () => {

    const color = 'yellow'
 const[bg,setbg] = useState(color);

 const clickMe = () => {
              setbg('purple')
 }

const dbClick = () =>{
    setbg('blue')
}



  return (
    <>
      <div className="main" style={{backgroundColor : bg }}>
        <button onDoubleClick={dbClick} onClick={clickMe} className="btn"> Click Me 😃</button>
      </div>
    </>
  );
};

export default Eventwithhooks;
