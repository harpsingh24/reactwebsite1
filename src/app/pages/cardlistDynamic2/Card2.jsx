import React from 'react';
import listCard2 from './Card2Data';

const Card2 = props => {
  return (
    <>
      <div className="col-lg-3">
        <div className=" bg-white shadow border">
          <img className="w-100" src={props.imgSrc} />

          <h5> {props.cardTitle} </h5>

          <p> {props.description} </p>

          <a href={props.cardLink} className="btn btn-primary">
            Check More
          </a>
        </div>
      </div>
    </>
  );
};
export default Card2;
