import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_mh9lpsc', 'template_ctzzrwm', refForm , 'gx0VAZT7kZPi4lWT5')
      .then(
        () => {
          alert("Mesaage Sent successfully!")
          window.location.reload(false)
        },
        () => {
          alert('Falied to Send Message, please try again')
        }
      )
  }

  return (
    <div>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '!']} idx={15} />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail} autocomplete="off">
              <ul>
                <li className='half'>
                  <input type="text" name='name' placeholder="Name" required />
                </li>
                <li className='half'>
                  <input id='mail' type="email" name='email' placeholder="example@gmail.com" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name='subject' required />
                </li>
                <li>
                  <textarea placeholder="Message" name='message' required></textarea >
                </li>
                <li  >
                  <input className="flat-button" type='submit' value='SEND' />
                </li>

              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </div>
  )
}

export default Contact;