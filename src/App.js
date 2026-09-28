import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import About from './routes/About';
import Main from './routes/Main';

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <Switch>
      <Route exact path='/' render={() => <Main theme={theme} toggleTheme={toggleTheme} />} />
      <Route path='/About' component={About} />
    </Switch>
  );
};

export default App;
