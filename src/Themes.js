import React from 'react';

export const themes = {
  red: {
    foreground: '#FFFFFF',
    background: '#DB4C40'
  },
  green: {
    foreground: '#333333',
    background: '#89BD9E'
  },
  blue: {
    foreground: '#FFFFFF',
    background: '#586994'
  },
}

export const ThemeContext = React.createContext(themes.red);
