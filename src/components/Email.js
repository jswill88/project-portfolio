import { useState } from 'react';
import emailjs from 'emailjs-com';
import {useTransition, animated} from 'react-spring'

// make contact info on large screen look better next to form

export default function Email() {

  const [emailResult, setEmailResult] = useState(false);
  const transitions = useTransition(emailResult, null, {
    from: { position: 'relative', left: -100, opacity: 1}, 
    enter: { left: 0 },
    leave: { opacity: 0 },
  });

  const sendEmail = async e => {
    e.preventDefault();
    try {

      await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        e.target,
        process.env.REACT_APP_USER_ID);
      let inputs = document.querySelectorAll('.contact');
      for (let input of inputs) {
        input.value = ''
      }
      setEmailResult('sent')
      setTimeout(() => setEmailResult(false), 2000)

    } catch (err) {
      console.log(err.text);
      setEmailResult('fail')
      setTimeout(() => setEmailResult(false), 2000)
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
      {transitions.map(({item, key, props}) => 
        item && <animated.p key={key} style={props}>
         {`${item === 'fail' ? 'Send Failed' : 'Message Sent!'}`}
          </animated.p>
      )}
      <button type="submit">Send</button>
    </form>
  )
}
