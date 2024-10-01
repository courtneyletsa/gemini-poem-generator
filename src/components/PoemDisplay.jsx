// components/PoemDisplay.js
import React from 'react';
import { useState } from 'react';


const PoemDisplay = ({ poem }) => {
  // const [isPlaying, setIsPlaying] = useState(false);

  // const togglePlay = () => {
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <div className="poem-display">
      <h2>Generated Poem:</h2>
      <p>{poem} </p>
      {/* <button onClick={togglePlay}>
        {isPlaying ? 'Stop Playing' : 'Play Audio'}
        <TiPlayer size={20} color="#000" />
      </button> */}
    </div>
  );
};

export default PoemDisplay;
