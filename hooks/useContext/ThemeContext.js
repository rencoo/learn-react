import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

// 创建一个 Theme 的 Context
export const ThemeContext = React.createContext(themes.light);
