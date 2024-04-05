import React, { createContext, useState } from 'react';
const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  //
  const [count, setCount] = useState(0);
  const themeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  //
  const handleCount = () => {
    setCount(count + 1);
  };

  //

  const value = {
    theme,
    themeChange,
    handleCount,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
      <h3>{count}</h3>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
