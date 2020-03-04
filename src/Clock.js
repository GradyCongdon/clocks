import React from 'react';
import { Times } from './Times';

export function Clock({
  time,
  size,
  shape,
  division,
  radius
}) {
  return (
    <Times 
      time={time}
      size={size}
      shape={shape}
      division={division}
      radius={radius}
    />
  );
}
