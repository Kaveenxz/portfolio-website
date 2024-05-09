import './header.css'
import CTA from './CTA'
import me from '../../assests/me.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Kaveen Hansith</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA/>
            <HeaderSocial></HeaderSocial>

            <div className="me">
              <img src={me} alt="" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header