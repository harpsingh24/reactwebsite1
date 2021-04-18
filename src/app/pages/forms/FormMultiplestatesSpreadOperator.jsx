import React, { useState } from 'react';

const FormMultiplestatesSpreadOperator = () => {
  const [fullname, setFullname] = useState({
    fName: '',
    lName: '',
    eMail: '',
    pNumber: '',
    qualification: '',
    address: '',
  });

  //let fNameTyped;

  const inputEvent = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    setFullname(preValue => {
      console.log(preValue);
      return {
        ...preValue,
        [inputName]: inputValue,
      };
    });
  };

  const submitBtn = event => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitBtn}>
        <h1>
          Hello {fullname.fName}
          {fullname.lName}
          {fullname.eMail}
          {fullname.pNumber}
          {fullname.qualification}
          {fullname.address}
        </h1>
        <div>
          <input
            type="text"
            name="fName"
            onChange={inputEvent}
            placeholder="Type your First Name"
          />
        </div>

        <div>
          <input
            type="text"
            name="lName"
            onChange={inputEvent}
            placeholder="Type your Last Name"
          />
        </div>

        <div>
          <input
            type="email"
            name="eMail"
            onChange={inputEvent}
            placeholder="Type your Email ID"
          />
        </div>
        <div>
          <input
            type="number"
            name="pNumber"
            onChange={inputEvent}
            placeholder="Type your Phone Number"
          />
        </div>
        <div>
          <input
            type="text"
            name="qualification"
            onChange={inputEvent}
            placeholder="Type your Qualification"
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            onChange={inputEvent}
            placeholder="Type your Address"
          />
        </div>

        <div>
          <button type="submit"> Submit </button>
        </div>
      </form>
    </>
  );
};
export default FormMultiplestatesSpreadOperator;
