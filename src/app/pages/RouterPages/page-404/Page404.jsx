import React from 'react';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
      <h1> Hello I am Page404 Page </h1>
<NavLink exact to="/"> Go Back </NavLink>

    </>
  );
};

export default Page404;
