import React, { useState } from 'react';

const Todolist = () => {
  const [addItem, setaddItem] = useState();
  const [itemsofList, setitemsofList] = useState([]);

  const typeitem = event => {
    setaddItem(event.target.value);
  };
  const addItemsBTN = () => {
    setitemsofList(oldlist => {
      return [...oldlist, addItem];
    });
  };
  const deleteItems = () =>{
    alert('deleted');
  }

  
  return (
    <>
      <h1> Todo List </h1>
      <input type="text" onChange={typeitem} placeholder="Add a Items" />
      <button onClick={addItemsBTN}> Add Items </button>
      <ol>
        {itemsofList.map((itemlistValue) => {
          return <li> <span onClick={deleteItems} style={{cursor: 'pointer'}}> x </span> {itemlistValue} </li>;
        })}
      </ol>
    </>
  );
};

export default Todolist;
