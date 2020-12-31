import { useState } from 'react';
import { HashLink } from 'react-router-hash-link'
import Switch from '@material-ui/core/Switch';

function Nav({ setTheme, setCheckState, theme }) {

  const checkTheme = theme => theme === 'dark' ? 'light' : 'dark';

  const handleThemeChange = () => {
    localStorage.setItem('theme', JSON.stringify(checkTheme(theme)))
    setTheme(theme => checkTheme(theme))
  }

  return (
    <nav>
      <ul>
        <li><HashLink
          smooth to="/#about"
          onClick={() => setCheckState(false)}
        >About</HashLink></li>
        <li><HashLink
          smooth to="/#projects"
          onClick={() => setCheckState(false)}
        >Projects</HashLink></li>
        <li><HashLink
          smooth to="/#contact"
          onClick={() => setCheckState(false)}
        >Contact</HashLink></li>
        <li>
          <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
          <Switch
            color="default"
            checked={theme === 'dark'}
            onChange={() => handleThemeChange()}
          />
        </li>
      </ul>
    </nav >
  )
}

export default function Header({ setTheme, theme }) {
  const [checkState, setCheckState] = useState(false);

  return (
    <header id={"#"}>
      <input
        type="checkbox"
        id="menu"
        checked={checkState}
        onClick={() => setCheckState(state => !state)} />
      <label htmlFor="menu">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <Nav setTheme={setTheme} setCheckState={setCheckState} theme={theme} />
      <div>
        <h1><H1 /><div></div></h1>
        <h2>Software Developer</h2>
      </div>
    </header>
  )
}

function H1 () {
  return 'Josh Williams'
    .split('')
    .map((letter,i) => <span id={`h1-${i}`}>{letter}</span>)
}