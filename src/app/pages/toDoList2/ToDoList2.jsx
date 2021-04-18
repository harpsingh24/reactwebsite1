import React, { useState } from 'react';
import Todolistoutput from './Todolistoutput';

const ToDoList2 = () => {
  const [typedValue, settypedValue] = useState();
  const [itemlist, setitemlist] = useState([]);

  const listTyped = event => {
    settypedValue(event.target.value);
  };
  const addList = () => {
    setitemlist(oldlist => {
      return [...oldlist, typedValue];
    });
  };

  const deleteItems = id => {
    setitemlist(oldlist => {
      return oldlist.filter((arrElemnt, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <h1> Todo List </h1>
      <input
        onChange={listTyped}
        value={typedValue}
        type="text"
        placeholder="Add a Items"
      />
      <button onClick={addList}> Add Items </button>

      <ol>
        {itemlist.map((itemlistloop, index) => {
          return (
            <Todolistoutput
              id={index}
              key={index}
              onSelect={deleteItems}
              text={itemlistloop}
            />
          );
        })}
      </ol>

      <div></div>
    </>
  );
};
export default ToDoList2;
