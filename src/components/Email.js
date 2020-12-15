import { useState } from 'react';
// import emailjs from 'emailjs-com';

// let the user know if the email send does not work

export default function Email() {

  const [emailResult, setEmailResult] = useState(null);

  const sendEmail = async e => {
    e.preventDefault();
    try {
      // const result = await emailjs.sendForm('service_b47gxnw', 'template_s62xnbp', e.target, 'user_qWBHub1WM2FNFd9aO9VGf')

      // console.log(result.text);

      let inputs = document.querySelectorAll('.contact');
      for(let input of inputs) {
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
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        className="contact"
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className="contact"
      />
      <label>Message</label>
      <textarea
        name="message"
        className="contact"
      />
      <input type="submit" value="Send" />
    </form>
  )
}
