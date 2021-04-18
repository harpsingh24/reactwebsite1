import React, { useState } from 'react';

const FormMultiplestates = () => {
  const [fullname, Setname] = useState({
    fName: '',
    lName: '',
    email: '',
    phoneNb: '',
  });

  const inputEvent = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    Setname(prevValue => {
      if (inputName === 'fName') {
        return {
          fName: inputValue,
          lName: prevValue.lName,
          email: prevValue.email,
          phoneNb: prevValue.phoneNb,
        };
      } else if (inputName === 'lName') {
        return {
          fName: prevValue.fName,
          lName: inputValue,
          email: prevValue.email,
          phoneNb: prevValue.phoneNb,
        };
      } else if (inputName === 'email') {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: inputValue,
          phoneNb: prevValue.phoneNb,
        };
      } else if (inputName === 'phoneNb') {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          phoneNb: inputValue,
        };
      }
    });
  };

  const formSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <h1>
        Hello {fullname.fName} {fullname.lName} {fullname.email}
        {fullname.phoneNb}
      </h1>

      <form onSubmit={formSubmit}>
        <div>
          <input
            type="text"
            name="fName"
            onChange={inputEvent}
            placeholder="type your First Name"
          />
        </div>

        <div>
          <input
            type="text"
            name="lName"
            onChange={inputEvent}
            placeholder="type your Last Name"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            onChange={inputEvent}
            placeholder="type your Email ID"
          />
        </div>

        <div>
          <input
            type="number"
            name="phoneNb"
            onChange={inputEvent}
            placeholder="type your Phone Number"
          />
        </div>

        <button type="submit"> Submit </button>
      </form>
    </>
  );
};

export default FormMultiplestates;
