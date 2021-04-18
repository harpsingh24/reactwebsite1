import React from 'react';

const SearchResults = (props) => {
    const imgData = `https://source.unsplash.com/user/erondu/600x400?${props.inputData}`;
  return (
    <>
<div>
    <div className="mt-5">

    <img src={imgData} alt="search Images" />
    </div>


</div>
    </>
  );
};

export default SearchResults;
