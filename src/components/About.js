// import BackToTop from './BackToTop';
// import jest from '../images/jestLogo.png';
import mongo from '../images/mongoDBLogo.png';
import node from '../images/nodeJsLogo.png';
import react from '../images/reactLogo.png';
import redux from '../images/reduxLogo.png';
// import socket from '../images/socketIoLogo.png';

export default function About() {
  return (
    <div id="about" className="bodySection">

      <h3>About</h3>

      <p>I am a full stack JavaScript software developer based out of Kent, Washington. I am excited to make creative and detailed projects that solve problems. I have a background in music, and I have played guitar and taught music lessons for the majority of my career. In 2020 I decided to hone in on my skills as a software developer. I am always looking for new things to work on and new ways to improve.</p>

      <div id="techImages">
        <img alt="React" src={react}/>
        <img alt="Node.js" src={node}/>
        <img alt="MongoDb" src={mongo}/>
        <img alt="Redux" src={redux}/>
        {/* <img alt="Socket.io" src={socket}/>
        <img alt="Jest" src={jest}/> */}
      </div>
      
      {/* <BackToTop /> */}
      
    </div>
  )
}