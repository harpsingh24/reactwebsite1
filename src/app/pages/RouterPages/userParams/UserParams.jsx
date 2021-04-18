import React from 'react';
import { useParams } from 'react-router-dom';

const UserParams = () => {
  const {fname, lname} = useParams();
  return (
    <>
      <h1> Hello I am {fname} {lname}  Page </h1>
    </>
  );
};

export default UserParams;
