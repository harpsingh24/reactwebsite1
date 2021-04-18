import React from 'react';
import Card from './Card';
import Carddata from './Carddata';

function CardFunction() {
  let content = [];
  for (let i = 0; i <= Carddata.length - 1; i++)
    content.push(
      <Card
        imgSrc={Carddata[i].imgSrc}
        cardTitle={Carddata[i].cardTitle}
        description={Carddata[i].description}
        cardLink={Carddata[i].cardLink}
      />
    );
  return content;
}
export default CardFunction;
