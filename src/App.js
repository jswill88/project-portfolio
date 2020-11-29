import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './style/style.scss'

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <BrowserRouter>
      <div className={`container ${theme ? 'dark' : 'light'}`}>
        <Header setTheme={setTheme} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
