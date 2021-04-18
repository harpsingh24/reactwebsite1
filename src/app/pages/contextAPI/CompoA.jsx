import React, { useContext } from 'react';
import {FirstName, LastName} from './ContextAPI';

const CompoA = () =>{

    const fname = useContext(FirstName)
    const lname = useContext(LastName)


return(
    <>
    
    <h1> Hello I am {fname} {lname} </h1>
    
    
    </>
)


}

export default CompoA;