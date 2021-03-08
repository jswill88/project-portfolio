import CakePopGif from '../../images/CakePop.gif';
import CakePopMobileGif from '../../images/CakePopMobile.gif'

export default function CakePop () {
   
  return (
    <div className="project" id="cakePop">
      <p>Cake Pop is a web application that lets users press buttons to make short songs. They can change the chord progression, song length, and tempo, and can pick which notes are played on each beat. Users can make accounts and save songs they are working on. This is a fun and creative app that allows users to be creative. This app was built with React, Express, MongoDB, Node.js, Tone.js, and Ant Design. It uses JSON Web Tokens to manage authentication and React Context to manage state.</p>

      
      <div id="cakePopImages">
         <img src={CakePopGif} alt="Cake Pop Example" />
         <img src={CakePopMobileGif} alt="Cake Pop Mobile"/>
        {/*<img src={Map} alt="Track Chat Map" />
        <img src={Group} alt="Track Chat Groups" /> */}
      </div>
  
      <ul>
        <li>Live Site: <a href="https://cake-pop.netlify.app">cake-pop.netlify.app</a></li>
        <li>GitHub Repo: <a href="https://github.com/jswill88/cake-pop">github.com/jswill88/cake-pop</a></li>
        <li>Server Repo: <a href="https://github.com/jswill88/cake-pop-server">github.com/jswill88/cake-pop-server</a></li>
        <li>March 2021</li>
      </ul>
    </div >
  )
}