import Game from '../images/BrainBugsGameplay.gif';
import Chat from '../images/BrainBugsChat.gif';

export default function BrainBugs() {

  return (
    <div className="project" id="brainBugs">
      <p>This is a multiplayer trivia game that is played entirely in the terminal that I built with a team. There is a chat feature as well. Players start the game from their own terminals, decide on a cateogory, and the first player to get the question right gets the point. It was challenging to style the terminal and to go from screen to screen, but it was fun to figure out. This was built with Node.js, Express, MongoDB, Socket.io, and Jest.</p>
      <div id="brainBugsImages">
        <img src={Game} alt="Brain Bugs Gameplay" />
        <img src={Chat} alt="Brain Bugs Chat" />
      </div>
      <ul>
        <li>GitHub Repo: <a href="https://github.com/jswill88/brainbugs">github.com/jswill88/brainbugs</a></li>
        <li>September 2020</li>
        <li>Other contributers: Christopher Hamersly, Daisy Johnson, Tia Low</li>
      </ul>
    </div >
  )
}