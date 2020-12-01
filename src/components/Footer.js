import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
  return (
    <footer>
      <p>This page was built with React and styled with SASS</p>
      <p>&copy; Josh Williams 2020
        <a href="https://github.com/jswill88/project-portfolio">
          <GitHubIcon
          fontSize="small"
        /></a></p>
    </footer>
  )
}