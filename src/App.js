import React from 'react';
import './style.css';
import React, { useState, useEffect } from 'react';
import Effect from './Effect.js';

function Counter() {
  let [color, setColor] = useState('Red');
  let someColor = ['green', 'yellow', 'purple', 'blue'];
  let [n, setN] = useState(0);

  const increm = () => {
    setN(n + 1);
    setColor(someColor[n]);
    if (n == 3) {
      return;
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          increm();
          console.log(n);
        }}
      >
        <Effect />
      </button>
      <br />
      <span style={{ color: `${color}` }}>Color</span>
    </div>
  );
}

export default Counter;
