import React, { useState } from 'react';
import './App.css';
import ColorInput from './Components/ColorInput';
import Boxes from './Components/Boxes';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (color, height) => {
    setBoxes([
      ...boxes,
      {color: color, height: height + "px"}
    ]);
    console.log(boxes);
  }

  return (
    <div className="App">
      <ColorInput addBox={ addBox }/>
      <Boxes boxes={boxes}/>
    </div>
  );
}

export default App;
