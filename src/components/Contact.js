import BackToTop from './BackToTop';

export default function Contact() {
  return (
    <div id="contact" className="bodySection">
      <h3>Contact</h3>
      <p>Follow me on LinkedIn and GitHub. Feel free to shoot me an email if you want to collaborate, need a software developer, or just want to say hi!</p>
      <ul>
        <li>Email: <a href="mailto:joshuasrwilliams@gmail.com">joshuasrwilliams@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/joshua-s-williams/">linkedin.com/in/joshua-s-williams</a></li>
        <li>GitHub: <a href="https://github.com/jswill88">github.com/jswill88</a></li>
      </ul>
      <BackToTop />
    </div>

  )
}