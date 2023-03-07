import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { themes, ThemeContext } from './ThemeContext';
import Toolbar from './Toolbar';

function App() {
  // 使用 state 来保存 theme 从而可以动态修改
  const [theme, setTheme] = useState('light'); // 使用变量，达到动态

  // 切换 theme 的回调函数
  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    // 使用 theme state 作为当前 Context
    <ThemeContext.Provider value={themes[theme]}>
      theme: {theme}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// ========================================
const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
