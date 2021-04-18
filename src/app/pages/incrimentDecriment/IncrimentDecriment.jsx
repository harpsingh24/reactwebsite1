import React, { useState } from 'react';

const IncrimentDecriment = () => {
  const [nbValue, setnbValue] = useState(0);
  let getvalue;
  const incrimentEvent = () => {
    getvalue = nbValue + 1;
    setnbValue(getvalue);
  };
  const decrimentEvent = () => {
    if (nbValue > 0) {
      getvalue = nbValue - 1;
      setnbValue(getvalue);
    }
  };

  return (
    <>
      <div className="d-flex mb-3">
        <h2 className="m-auto"> {nbValue} </h2>
      </div>


<div className="d-flex">
<div className="mx-2">
        <button className="btn btn-primary" onClick={incrimentEvent}> Increment</button>
      </div>
      <div className="mx-2">
        <button className="btn btn-primary" onClick={decrimentEvent}> Decrement</button>
      </div>


</div>
 
    </>
  );
};

export default IncrimentDecriment;
