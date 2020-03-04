import React from 'react';
import { Time } from './Time';

const posStyle = {
  margin: '0 auto',
  width: '75vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const divisions = {
  'seconds': {
    start: 0,
    end: 60,
    getDigits: 'getSeconds'
  },
  'minutes': {
    start: 0,
    end: 60,
    getDigits: 'getMinutes'
  },
  'hours': {
    start: 1,
    end: 13,
    getDigits: 'getHours'
  },
}


export function Times({division, time, size, shape, radius}) {
  const { start, end, getDigits } = divisions[division];

  const times = [];
  for (let i = 0; i < 60; i++) {
    const digits = time[getDigits]();
    const radians = ((i - start) / end) * 2 * Math.PI;
    const x = Math.cos(radians) * radius
    const y = Math.sin(radians) * radius
    const now = (i === digits);
    const t = (
     <Time
       key={i}
       time={i}
       x={x}
       y={y}
       size={size}
       shape={shape}
       now={now}
      />
    );
    times.push(t);
  }

  return (
    <div style={posStyle}>
      {times}
    </div>
  );
}
