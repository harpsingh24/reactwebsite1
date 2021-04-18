import React from 'react';

const MatchCalc = function (x, y, z) {
  if (x == y && y == z) {
    return (
      <>
        <div>
          {x} {y} {z}
        </div>
        <div> All Variables are Matching</div>
      </>
    );
  } else {
    return (
      <>
        <div>
          {x} {y} {z}
        </div>
        <div> All Variables are not Matching</div>
      </>
    );
  }
};

function Match() {
  return (
    <>
      <h2> Welcome to Slot Machine Game 😆 </h2>

      {MatchCalc(5, 5, 5)}

      {MatchCalc(5, 15, 5)}

      {MatchCalc(9, 9, 9)}

      {MatchCalc(5, 5, 1)}
    </>
  );
}

export default Match;
