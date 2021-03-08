import { useEffect } from "react"
import expoFunction from "../../modules/expoFunction";
import toExpo from '../../images/toExpo.png';
import Group from '../../images/TrackChatGroup.gif';
import Map from '../../images/TrackChatMap.gif';
import Signin from '../../images/TrackChatSignIn.gif';
import SpinnerDark from '../../images/spinnerDark.gif';
import SpinnerLight from '../../images/spinnerLight.gif';

export default function TrackChat({ projectsDisplayed, theme }) {
  useEffect(() => {
    (async () => await expoFunction())();
  }, [projectsDisplayed])
  return (
    <div className="project" id="trackChat">
      <p>Track Chat is a team project that allows users to see each other on a map, chat with each other, and send out an emergency alert to other users. It was built to give users a way to check in on each other and chat in the same app, and it can be useful when traveling with a group in an unfamiliar area. This app was built with React Native, Redux, Express, MongoDB, Node.js, Socket.io, and Jest.</p>

      
      <div id="trackChatImages">
        <img src={Signin} alt="Track Chat Sign In" />
        <img src={Map} alt="Track Chat Map" />
        <img src={Group} alt="Track Chat Groups" />
      </div>
      
      <p>Try it out by downloading the Expo client and scanning the QR code below or by clicking <img src={toExpo} alt="example of link to expo"/> to see the QR code in a new screen. If you are on mobile, click "Open with Expo Client".</p>
        <div
          data-snack-id="@jswill88/track-chat-presentation"
          data-snack-platform="mydevice"
          data-snack-preview="true"
          data-snack-theme={theme}
          data-snack-supportedPlatforms={['mydevice']}
          style={{ overflow: 'hidden', background: 'transparent', border: '1px solid var(--color-border)', borderRadius: '4px', height: '30em', width: '100%', backgroundImage:`url(${theme === 'dark'? SpinnerDark : SpinnerLight})`, backgroundRepeat: 'no-repeat'}}>
        </div>
  
      <ul>
        <li>GitHub Repo: <a href="https://github.com/jswill88/trackChat">github.com/jswill88/trackChat</a></li>
        <li>Server Repo: <a href="https://github.com/trackChat/trackChatServer">github.com/trackChat/trackChatServer</a></li>
        <li>October 2020</li>
        <li>Other contributers: Cas Ibrahim, Christopher Hamersly, Reagan Roberts</li>
      </ul>
    </div >
  )
}