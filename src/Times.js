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

const getCenti = (date) => Math.round(date.getMilliseconds() / 10);

const divisions = {
  'centi': {
    start: 0,
    end: 100,
    getDigits: 'getCenti', // TODO make these functions not date methods
  },
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
    start: 0,
    end: 24,
    getDigits: 'getHours'
  },
}

export function Times({division, time, size, shape, radius}) {
  const { start, end, getDigits } = divisions[division];

  const times = [];
  for (let i = start; i < end; i++) {
    const digits = division === 'centi' ? getCenti(time) : time[getDigits](); // TODO lol
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
