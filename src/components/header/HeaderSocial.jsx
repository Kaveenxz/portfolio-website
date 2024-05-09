import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kaveen-hansith-a4a484283/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Kaveenxz" target='_blank'><FaGithub/></a>
        <a href="https://dribbble.com/KaveenHansith"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial