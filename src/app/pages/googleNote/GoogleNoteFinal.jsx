import React, { useState } from 'react';
 
import HeaderGoogleNote from './HeaderGoogleNote';
import CreateGoogleNote from './CreateGoogleNote';
import GoogleNoteOutput from './GoogleNoteOutput';


const GoogleNoteFinal = () =>{

    const [addItem, setaddItem] = useState([]);

    const addNote = (note) =>{
       // alert('I am Clicked');
        setaddItem((prevData)=>{
            return [...prevData, note ];
        })

    }



return(
<>


<HeaderGoogleNote/>
<CreateGoogleNote passnote={addNote}/>

<div className="row" style={{width:"1000px", maxWidth:"100%"}}>

{addItem.map((val, index) =>{

return <GoogleNoteOutput key={index} id={index} title={val.title} content={val.content} />

})}

</div>

 
</>


);


}

export default GoogleNoteFinal;