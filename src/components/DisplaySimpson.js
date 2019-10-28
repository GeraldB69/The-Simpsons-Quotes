import React from 'react';
import './DisplaySimpson.css';

function DisplaySimpson({ simpson }) {
  return (
    <div className="DisplaySimpson">
      <img 
        className={simpson.characterDirection}
        src={simpson.image}
        alt={simpson.character}
      />
      <p className="quote">
        "&nbsp;{simpson.quote}&nbsp;"
      </p>
      <p className="character">
        {simpson.character}
      </p>
    </div>
  );
};

export default DisplaySimpson;
