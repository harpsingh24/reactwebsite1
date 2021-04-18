import axios from 'axios';
import React, { useEffect, useState }  from 'react';
 

const ReactAPIComp1 = () =>{

    const [numb, setnumb] = useState();
    const [name, setname] = useState();
    const [move, setmoves] = useState();



useEffect(()=>{
    async function getData(){
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numb}`);
  console.log(res.data.moves);   
  setname(res.data.name);
  setmoves(res.data.moves.length);
  

        }
        getData();
});




console.log(numb);




return(
    <>
    <h1> you choose {numb} </h1>
 
    <h1> My Name is {name} </h1>
 
    <h1> I have {move} Movies </h1>
 
 <div>
<select value={numb} onChange={(event)=>{
setnumb(event.target.value);
}} >
<option value='1'>1</option>

<option value='25'>25</option>

<option value='3'>3</option>

<option value='4'>4</option>

<option value='5'>5</option>



    
</select>


    </div>
    
    </>
)


}

export default ReactAPIComp1;