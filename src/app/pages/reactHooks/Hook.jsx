import React, { useState } from 'react';

const Hook = () => {
  const [count, setCount] = useState(0);
  const IncNumb = () => {
    setCount(count + 1);
  };
  const DecrNumb = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div> The Value is {count} </div>
      <button onClick={IncNumb}> Add + </button>
      <button onClick={DecrNumb}> Decriment - </button>
    </>
  );
};

export default Hook;
