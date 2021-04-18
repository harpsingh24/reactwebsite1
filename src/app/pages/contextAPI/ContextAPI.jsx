import React, { createContext } from 'react';
import CompoA from './CompoA';


const FirstName = createContext();
const LastName = createContext();
const ContextAPI = () =>{

return(
    <>
    <FirstName.Provider value={"Harpreet"}>

    <LastName.Provider value={"Singh"}>

<CompoA/>

</LastName.Provider>

    </FirstName.Provider>

    
    
    </>
)


}

export default ContextAPI;
export {FirstName, LastName};