import React from 'react';
import { Minutes } from './Minutes';

export function Clock(props) {
  return (
    <Minutes time={props.time} />
  );
}
