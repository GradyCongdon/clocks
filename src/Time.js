import React from 'react';

const offsetX = window.screen.width / 2; // TODO this aint right
const offsetY = window.screen.height / 2.25;

const baseStyle = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'monospace',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '100%',
};

export function Time({theme, shape, now, size, time, x, y}) {
  let positionStyle;
  switch (shape) {
    case 'loop':
      positionStyle = {
        position: 'relative',
        top:  x,
        left: y,
      };
      break;
    case 'circle':
      positionStyle = {
        position: 'absolute',
        top:  (offsetY + y),
        left: (offsetX + x),
      };
      break;
    case 'line':
      positionStyle = {
        position: 'static'
      };
      break;
    default:
      break;
  }

  const individualStyle = { 
    borderColor: now ? theme.background: 'transparent',
    backgroundColor: now ? theme.background : 'transparent',
    color: now ? theme.foreground : 'black', 
    minWidth: `${size}px`,
    minHeight: `${size}px`,
  };

  const style = {...baseStyle, ...positionStyle, ...individualStyle};

  return (
    <span style={style}> {time.toString()} </span>
  );
}
