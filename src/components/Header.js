import Switch from '@material-ui/core/Switch';


export default function Header({ setTheme }) {
  let url = '#'
  return (
    <header>
      <input type="checkbox" id="menu" />
      <label htmlFor="menu">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <nav>
        <ul>
          <li><a href="about">About</a></li>
          <li><a href={url}>Projects</a></li>
          <li><a href={url}>Contact</a></li>
          <li>
            <span>Change Theme: </span>
            <Switch
              color="default"
              onChange={() => setTheme(theme => !theme)}
            />
          </li>
        </ul>
      </nav>
      <div>
        <h1>Josh Williams<div></div></h1>
        <h2>Software Developer</h2>
      </div>
    </header>
  )
}

