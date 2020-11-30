import desktopImage from '../images/polyrhythmgenerator.gif';
import mobileImage from '../images/polyrhythmmobile.jpeg';

export default function PolyrhythmGenerator() {
  return (
    <div className="project" id="polyrhythmGenerator">
      <p>This web application allows a user to hear any polyrhythm. A polyrhythm occurs when different sets of beats are played against one another such as "2 against 3."  It is a skill that advanced musicians work on. I built this app to give musicians a chance to hear complex polyrhythms, so they can internalize the sounds quickly and master them faster. The user can change the tempo, volume, notes, and rhythms.  It is built with Tone.js, React, and SASS.</p>
      <div id="polyrhythmGeneratorImages">
        <img src={desktopImage} alt="Polyrhythm Generator Demo" />
        <img src={mobileImage} alt="Polyrhythm Mobile" />
      </div>
      <ul>
        <li>Live Site: <a href="https://polyrhythmgenerator.netlify.app/">polyrhythmgenerator.netlify.app/</a></li>
        <li>GitHub Repo: <a href="https://github.com/jswill88/polyrhythm-generator">github.com/jswill88/polyrhythm-generator</a></li>
        <li>November 2020</li>
      </ul>
    </div>
  )
}