import React from 'react';

const Todolistoutput = props => {
  return (
    <li>
      <span
        onClick={() => {
          props.onSelect(props.id);
        }}
        style={{ cursor: 'pointer' }}
      >
        x
      </span>
      {props.text}
    </li>
  );
};

export default Todolistoutput;
