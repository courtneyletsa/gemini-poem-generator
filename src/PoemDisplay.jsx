// components/PoemDisplay.js
import React from 'react';
import { useState } from 'react';
import PoemBox from './PoemBox';
// import { TiPlayer } from 'react-icons/ti';
// import PoemBox from './PoemBox';

const PoemDisplay = ({ poem }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="poem-display">
      <h2>Generated Poem:</h2>
      {/* <p>{poem}</p> */}
      {/* <button onClick={togglePlay}>
        {isPlaying ? 'Stop Playing' : 'Play Audio'}
        <TiPlayer size={20} color="#000" />
      </button> */}
      <PoemBox />
    </div>
  );
};

export default PoemDisplay;
