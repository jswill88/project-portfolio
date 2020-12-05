import IntervalExample from '../images/IntervalImage.png';
import IntervalCode from '../images/IntervalCode.png';


export default function Interval () {
  return (
    <div className="project" id="interval">
      <p>Interval is a node package that can be used in music theory apps to determine musical intervals. I could not find an equivalent node package, so I made an easy one that is easy to find and use. There are strict rules associated with naming notes, so it was a challenge to make sure that any valid note entered returns the correct note and any invalid input throw a helpful error. This app was built with Node.js and tested with Jest.</p>
      <div id="intervalImages">
        <img src={IntervalExample} alt="Interval" />
        <img src={IntervalCode} alt="Interval Code Example" />
      </div>
      <ul>
        <li>Use interval: npm install @joshuawilliams/interval</li>
        <li>Node Package: <a href="https://www.npmjs.com/package/@joshuawilliams/interval">npmjs.com/package/@joshuawilliams/interval</a></li>
        <li>GitHub Repo: <a href="https://github.com/jswill88/intervals">github.com/jswill88/intervals</a></li>
        <li>October 2020</li>
      </ul>
    </div>
  )
}
