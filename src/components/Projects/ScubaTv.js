
import Collection from '../../images/ScubaCollectionExample.png';
import HomePage from '../../images/ScubaHomePage.png';
import SearchResults from '../../images/ScubaSearchResults.png';

export default function ScubaTv() {
  return (
    <div className="project" id="scubaTv">
      <p>Scuba TV helps users find new shows to watch and gives them all the information they need in one place. It gives them info such as where the show is streaming and how long the show would take to watch. Users can save shows and comment on them. This app was built with Node.js, EJS, Express, PostGreSQL, and uses multiple TV show APIs to gather all the information.</p>
      <div id="scubaTvImages">
        <div>
          <img src={HomePage} alt="Scuba TV Home Page" />
          <img src={SearchResults} alt="Scuba TV Search Results" />
        </div>
        <img src={Collection} alt="Scuba TV Collection Example" />
      </div>
      <ul>
        <li>Live Site: <a href="https://scuba-tv.herokuapp.com/">scuba-tv.herokuapp.com</a></li>
        <li>GitHub Repo: <a href="https://github.com/jswill88/scuba-tv">github.com/jswill88/scuba-tv</a></li>
        <li>July 2020</li>
        <li>Other contributers: Alex Whan, Lulu Sevignon, Kamit Satkeev</li>
      </ul>
    </div>
  )
}

