import React, { useState } from 'react';

const CreateGoogleNote = (props) => {

const [note, setnote] = useState({
    title: '',
    content: '',
});
const inputEvent = (event) =>{
 

const {name, value} = event.target;
    setnote((prevdata) =>{
        return {
            ...prevdata,
            [name]: value, 
        }
 });
console.log(note);


}
const addEvent = () =>{
  props.passnote(note);
}







  return (
    <>
       <div className="w-100 d-flex flex-wrap mb-4">
        <div
          className="shadow border mx-auto mb-3 p-3 position-relative googlenoteform"
          style={{ maxWidth: '300px' }}
        >
          <div className="form-group mb-0">
            <input
              name="title"  value={note.value} onChange={inputEvent}
          
              className="form-control title_input mb-2"
              placeholder="Title"
            />

            <textarea 
              name="content" value={note.content} onChange={inputEvent}
           
              className="form-control"
              placeholder="AddNote"
              rows="2"
            ></textarea>
          </div>

          <button onClick={addEvent}
           
            className="btn btn-primary py-1 px-2 position-absolute iconPlus"
            style={{ bottom: '-10px', right: '-10px' }}
          >
            +
          </button>
        </div>
      </div>

    


    </>
  );
};

export default CreateGoogleNote;
