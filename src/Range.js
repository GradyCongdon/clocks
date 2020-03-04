import React from 'react';
const style = {
  padding: '4px',
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 1.1,
}

export function Range({name, value, setValue, min, max}) {
  return (
    <label for={name} style={style}>
      <span>{name}:&nbsp;{value}</span>
      <input 
        id={name} 
        type="range" 
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)} />
    </label>
  );
}
