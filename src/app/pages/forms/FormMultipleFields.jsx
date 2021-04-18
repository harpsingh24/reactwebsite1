import React, { useState } from 'react';

const FormMultipleFields = () => {
  const [firsname, getFname] = useState('');
  const [lastname, getLname] = useState('');

  let fNameTyped, lNameTyped;

  const fnameChange = event => {
    fNameTyped = event.target.value;
    return fNameTyped;
  };
  const lnameChange = event => {
    lNameTyped = event.target.value;
    return lNameTyped;
  };

  const submitBtn = event => {
    event.preventDefault();

    getFname(fNameTyped);
    getLname(lNameTyped);
  };

  return (
    <>
      <form onSubmit={submitBtn}>
        <h1>
          Hello {firsname} {lastname}
        </h1>
        <div>
          <input
            type="text"
            onChange={fnameChange}
            placeholder="Type your First Name"
            style={{ padding: '10px' }}
          />
        </div>
        <div>
          <input
            type="text"
            onChange={lnameChange}
            placeholder="Type your Last Name"
            style={{ padding: '10px' }}
          />
        </div>

        <div>
          <button type="submit"> Submit </button>
        </div>
      </form>
    </>
  );
};
export default FormMultipleFields;
