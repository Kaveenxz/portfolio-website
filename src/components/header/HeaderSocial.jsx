import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGitHub} from 'react-icons/bs'
import {Fidribble} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kaveen-hansith-a4a484283/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Kaveenxz" target='_blank'><FaGitHub/></a>
        <a href="https://dribbble.com/KaveenHansith"><Fidribble/></a>
    </div>
  )
}

export default HeaderSocial