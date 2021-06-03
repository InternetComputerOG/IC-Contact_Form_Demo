import "./style.css"
import emailjs from 'emailjs-com';
import endpoint from './endpoints.config';

(function() {
  emailjs.init(endpoint.UserID);
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_hde9yca', endpoint.TemplateID, this)
    .then(function() {
      alert('Message Sent, I\'ll get back to you shortly');
    },
    function(error) {
      alert( 'An error occured, Please try again');
      console.log(error);
      console.log(endpoint.TemplateID);
    })
  })
};

/**
 * @dfinity/agent requires this. Can be removed once it's fixed
 */
(window as any).global = window

;(async () => {
  const app = document.querySelector<HTMLDivElement>("#app")!

  app.innerHTML = `
    <h1>IC Contact Form Demo</h1>
    <form id="contact-form">
      <p>Send Email To:</p>
      <input name='to_email' type="text" placeholder="Email Address..." className="form__input" />
      <p>Subject:</p>
      <input name='subject' type="text" placeholder="Subject…" className="form__input" />
      <p>Your Message:</p>
      <textarea name='message' type="text" placeholder="Your Message…" className="form__input-message" ></textarea>
      <br>
      <button className="form__input — button">Send Test Email</button>
    </form>
  `
})()
