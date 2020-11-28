import { HashLink } from 'react-router-hash-link'
import Switch from '@material-ui/core/Switch';

// Still need sticky nav for other sections
// make sure input is unchecked after going to another part of the page

function Nav({ setTheme }) {
  return (
    <nav>
      <ul>
        <li><HashLink smooth to="/#about">About</HashLink></li>
        <li><HashLink smooth to="/#projects">Projects</HashLink></li>
        <li><HashLink smooth to="/#contact">Contact</HashLink></li>
        <li>
          <span>Change Theme: </span>
          <Switch
            color="default"
            onChange={() => setTheme(theme => !theme)}
          />
        </li>
      </ul>
    </nav>
  )
}

export default function Header({ setTheme }) {
  return (
    <header id={"#"}>
      <input type="checkbox" id="menu" />
      <label htmlFor="menu">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <Nav setTheme={setTheme}/>
      <div>
        <h1>Josh Williams<div></div></h1>
        <h2>Software Developer</h2>
      </div>
    </header>
  )
}

