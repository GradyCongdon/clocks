import React, { useState, useEffect } from 'react';
import { Clock } from './Clock';
import { Range } from './Range';
import { ThemeContext, themes } from './Themes';
import './App.css';

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'fixed',
  top: 0,
  right: 0,
  padding: '5px',
  borderBottom: 'solid 1px black',
};

function App() {
  const [time, setTime] = useState(new Date());
  const [size, setSize] = useState(15);
  const [radius, setRadius] = useState(300);
  const [shape, setShape] = useState('circle');
  const [division, setDivision] = useState('seconds');
  const [theme, setTheme] = useState(themes.red);


  useEffect(() => {
    const timer = setTimeout(() => {
      const now = new Date();
      setTime(now);
    }, 1000); // TODO change w/ division
    return () => {
      clearTimeout(timer);
    }
  });

  return (
    <main>
      <ThemeContext.Provider value={theme}>
        <Clock 
          time={time} 
          size={size} 
          shape={shape} 
          division={division}
          radius={radius}
        />
      </ThemeContext.Provider>
      <nav style={navStyle}>
        <button onClick={() => setTheme(themes.red)}> red </button>
        <button onClick={() => setTheme(themes.green)}> green </button>
        <button onClick={() => setTheme(themes.blue)}> blue </button>
        &nbsp;|&nbsp;

        <button onClick={() => setDivision('seconds')}> seconds </button>
        <button onClick={() => setDivision('minutes')}> minutes </button>
        <button onClick={() => setDivision('hours')}> hours </button>

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

