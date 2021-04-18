import React, { useState } from 'react';

const Form = () => {
  let [getName, getValue] = useState('');
  let valueName;
  const inputEvent = event => {
    valueName = event.target.value;
    return valueName;
  };
  const getValueInput = () => {
    getValue(valueName);
  };

  return (
    <>
      <h1> Hello {getName} </h1>

      <div>
        <input type="text" placeholder="Type your Name" onChange={inputEvent} />
      </div>
      <div>
        <button onClick={getValueInput}> Submit </button>
      </div>
    </>
  );
};

export default Form;
