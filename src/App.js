import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './style/style.scss'



function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    (async () => {
      const startTheme = await localStorage.getItem('theme');
      setTheme(JSON.parse(startTheme) || 'light');
    })();
  },[])

  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Header setTheme={setTheme} theme={theme} />
        <About />
        <Projects theme={theme} />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
