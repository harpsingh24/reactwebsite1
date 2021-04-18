import React from 'react';
import Card2 from './Card2';
import listCard2 from './Card2Data';

const card2final = () => {
  let card2Content = [];
  for (let listloop = 0; listloop <= listCard2.length - 1; listloop++)
    card2Content.push(
      <Card2
        imgSrc={listCard2[listloop].imgSrc}
        cardTitle={listCard2[listloop].cardTitle}
        description={listCard2[listloop].description}
        cardLink={listCard2[listloop].cardLink}
      />
    );

  return (
    <>
      <div className="row" style={{ minWidth: '1000px' }}>
        {card2Content}
      </div>
    </>
  );
};

export default card2final;
