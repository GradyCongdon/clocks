import React from 'react';

const kind = 'relative'

const posStyle = {
  margin: '0 auto',
  width: '75vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const offset = 200;

function Time({now, text, x, y}) {
  let style = {
      display: 'inline-block',
      fontFamily: 'monospace',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: now ? 'red' : 'transparent',
      borderRadius: '100%',
      minWidth: '14px',
      minHeight: '14px',
      textAlign: 'center'
  };


  let position = {};
  switch (kind) {
    case 'relative':
      position = {
        position: 'relative',
        top:  x,
        left: y,
      };
      break;
    case 'absolute':
      position = {
        position: 'absolute',
        top:  (offset + x),
        left: (offset + y),
      };
      break;
  }
  style = {...style, ...position};
  return (
    <span style={style}> {text} </span>
  );
}

const rad = (min) => (min / 60) * 2 * Math.PI;

const getX = (min, radius) => {
  const radians = rad(min);
  return Math.cos(radians) * radius
}
const getY = (min, radius) => {
  const radians = rad(min);
  return Math.sin(radians) * radius
}

export function Minutes({time}) {
  const r = offset;
  const mins = [];
  for (let m = 0; m < 60; m++) {
    const now = (m === time.getMinutes());
    const text = m;
    const x = getX(m, r);
    const y = getY(m, r);
    const min = (<Time now={now} text={text} x={x} y={y} />);
    mins.push(min);
  }

  return (
    <div style={posStyle}>
      {mins}
    </div>
  );
}
