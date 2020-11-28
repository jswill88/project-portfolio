import { useState } from 'react';

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import './style/style.scss'

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <div className={`container ${theme ? 'dark' : 'light'}`}>
      <Header setTheme={setTheme}/>
      <AboutMe />
    </div>
  );
}

export default App;
