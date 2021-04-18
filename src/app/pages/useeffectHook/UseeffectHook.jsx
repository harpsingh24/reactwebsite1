import React, { useEffect, useState } from 'react';
 

const UseeffectHook = () =>{
 
    const [numb, setnumb] = useState(0);
    const [numbs, setnumbs] = useState(0);
    

    useEffect(
        () =>{

       
        document.title= `you are clicked ${numb} Times`;
        },[numb]
    );

return(

    <>
    
    <button onClick={()=>{setnumb(numb+1)}} className="btn btn-primary"> ClickMe {numb} </button>  
    <br/>

    <button onClick={()=>{setnumbs(numbs+2)}} className="btn btn-primary"> ClickMe {numbs} </button>  
    
    </>
);


}

export default UseeffectHook;