import  './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail/>
              <h4>Email</h4>
              <h5>kaveenhansithx@gmail.com</h5>
              <a href="mailto:kaveenhansithx@gmail.com" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
              <RiMessengerLine/>
              <h4>Messenger</h4>
              <h5>Kaveen Hansith</h5>
              <a href="https://m.me/ernest.100071758376903" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp/>
              <h4>Whatsapp</h4>
              <h5>+94 0783872364</h5>
              <a href="https://api.whatsapp.com/send?phone+940783872364" target='_blank'>Send a message</a>
            </article>
          </div>

          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact