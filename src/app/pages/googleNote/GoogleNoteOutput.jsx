import React from 'react';

const GoogleNoteOutput = (props) => {
  return (
    <>
    <div className="col-lg-4">



    
      <div className="shadow border mb-3 p-3 position-relative mx-2"
        style={{ maxWidth: '250px' }}>
        <h2 style={{ fontSize: '20px' }}> {props.title} </h2>
        <p> {props.content} </p>

        <button className="btn btn-primary py-1 px-2 position-absolute"
          style={{ bottom: '-10px', right: '-10px' }}>
          delete
        </button>
      </div>
      </div>
    </>
  );
};

export default GoogleNoteOutput;
