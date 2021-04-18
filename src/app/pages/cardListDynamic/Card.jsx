import React from 'react';

function Card(props) {
  return (
    <>
      <div className="o-loop">      <div>
        <img src={props.imgSrc} />
      </div>
      <h4> {props.cardTitle}</h4>
      <p> {props.description}</p>
      <a href={props.cardLink}> Click Here </a>
      </div>
    </>
  );
}

export default Card;
