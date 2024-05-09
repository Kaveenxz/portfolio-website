import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

function Nav() {
  return (
    <div>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experence"><BiBook/></a>
      <a href="#service"><RiServiceLine/></a>
      <a href="#"><BiMessageSquareDetail/></a>
    </div>
  )
}

export default Nav