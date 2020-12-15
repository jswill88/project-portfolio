// import { useState } from 'react';
import emailjs from 'emailjs-com';

// let the user know if the email send does not work
// show success message if email sent
// figure out .env file for email - fill out all parts
// make submit button style consistent with other hovers
// reformat to be next to other contact info
// make responsive

export default function Email() {

  // const [emailResult, setEmailResult] = useState(null);

  const sendEmail = async e => {
    e.preventDefault();
    try {


      await emailjs.sendForm(
        'service_b47gxnw',
        'template_s62xnbp',
        e.target,
        process.env.REACT_APP_USER_ID);

      let inputs = document.querySelectorAll('.contact');
      for (let input of inputs) {
        input.value = ''
      }

    } catch (err) {
      console.log(err.text);
    }

  }

  return (
    <form
      onSubmit={sendEmail}
    >
      <div>

        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          className="contact"
        />
      </div>
      <div>
        <label htmlFor="user_email">Email<span>*</span></label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="contact"
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message<span>*</span></label>
        <textarea
          name="message"
          id="message"
          className="contact"
          required
        />
      </div>
      <button type="submit">Send</button>
    </form>
  )
}
