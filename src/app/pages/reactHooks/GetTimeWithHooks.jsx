import React, { useState } from 'react';

const GetTimeWithHooks = () => {
  const gtime = new Date().toLocaleTimeString();

  const [nowime, cTime] = useState(gtime);

  const getcTime = () => {
    cTime(new Date().toLocaleTimeString());
  };

  return (
    <>
      <h1> Now time is {nowime}</h1>
      <button onClick={getcTime}> Click Me</button>
    </>
  );
};

export default GetTimeWithHooks;
