import BackToTop from './BackToTop';
import Email from './Email'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Contact() {
  return (
    <>
      <div id="contact" className="bodySection">
        <h3>Contact</h3>
        <p>Follow me on LinkedIn and GitHub. Feel free to shoot me a message if you want to collaborate, need a software developer, or just want to say hi!</p>
        <div id="contactBox">
          <div>

            <Email />
          </div>
          <div>
            <ul>
              <li><MailOutlineIcon /> <a href="mailto:joshuasrwilliams@gmail.com">joshuasrwilliams@gmail.com</a></li>
              <li><LinkedInIcon /> <a href="https://www.linkedin.com/in/joshua-s-williams/">linkedin.com/in/joshua-s-williams</a></li>
              <li><GitHubIcon /> <a href="https://github.com/jswill88">github.com/jswill88</a></li>
            </ul>
          </div>

        </div>
        <BackToTop />
      </div>
    </>

  )
}