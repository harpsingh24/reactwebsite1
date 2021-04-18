import React, { useState } from 'react';

const DigitalWatch = () => {
  const gTime = new Date().toLocaleTimeString();

  const [cTime, setTime] = useState(gTime);

  setInterval(function () {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      <h1> {cTime} </h1>
    </>
  );
};

export default DigitalWatch;
