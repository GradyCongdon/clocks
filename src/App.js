import React, { useState, useEffect } from 'react';
import { Clock } from './Clock';
import { Range } from './Range';

const navStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  position: 'fixed',
  top: 0,
  right: 0,
  padding: '5px',
  borderBottom: 'solid 1px black',

};

function App() {
  const [time, setTime] = useState(new Date());
  const [size, setSize] = useState(14);
  const [radius, setRadius] = useState(300);
  const [shape, setShape] = useState('circle');
  const [division, setDivision] = useState('seconds');

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = new Date();
      setTime(now);
    }, 1000);
    return () => {
      clearTimeout(timer);
    }
  });

  return (
    <main>
      <Clock 
        time={time} 
        size={size} 
        shape={shape} 
        division={division}
        radius={radius}
    />
      <nav style={navStyle}>
        <button onClick={() => setDivision('seconds')}> seconds </button>
        <button onClick={() => setDivision('minutes')}> minutes </button>

        <Range name="size" value={size} min={0} max={50} setValue={setSize} />

        <Range name="radius" value={radius} min={0} max={1000} setValue={setRadius} />

        <button onClick={() => setShape('loop')}> loop </button>
        <button onClick={() => setShape('circle')} >circle</button>
        <button onClick={() => setShape('line')} > line </button>
      </nav>
    </main>
  );
}

export default App;

