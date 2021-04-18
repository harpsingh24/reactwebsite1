import React, { useState } from 'react';
import SearchResults from '../searchResult/SearchResults';

const Search = () => {
  const [img, setimg] = useState('');

  const inpuEvent = (event) =>{
const data = event.target.value;
setimg(data)
 

  }


  return (
    <>
      <div className="mt-4">
      <input type="search" class="form-control" value={img} onChange={inpuEvent} placeholder="Search Here" />

      </div>
{img === '' ? null : <SearchResults inputData={img}/>}





    </>
  );
};

export default Search;
