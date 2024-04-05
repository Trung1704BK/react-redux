import React, { useContext } from 'react';
import Context from './Content';
import '../App.css';
import { ThemeContext } from './ThemeContext';

function Home() {
  const context = useContext(ThemeContext);
  return (
    <div className='container' style={{ padding: 20 }}>
      <button onClick={context.themeChange}>Toggle theme</button>
      <button onClick={context.handleCount}>ADD</button>
      <Context />
    </div>
  );
}

export default Home;
