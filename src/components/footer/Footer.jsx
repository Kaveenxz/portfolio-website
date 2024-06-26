import './footer.css'

import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>KAVEENXZ</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experence">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Countact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://web.facebook.com/profile.php?id=100071758376903"><FaFacebookF /></a>
        <a href="https://www.instagram.com/kavee.xz/"><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; KAVEENXZ. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer