import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import myImg from '../../assests/my2.jpeg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImg} alt="about img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experences</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>

          <p>
            I am Kaveen Senadeera, a dedicated and skilled Training Software Engineer with
            expertise in Java, JavaScript, and frameworks such as React, Angular, and Spring
            Boot. My passion lies in creating innovative and efficient solutions that drive
            technological advancements. Proficient in MySQL, I bring a strong foundation in
            database management to complement my development skills. With a
            commitment to continuous learning, I strive to stay at the forefront of emerging
            technologies, ensuring that I can contribute effectively to dynamic and
            challenging projects. My goal is to leverage my technical skills and knowledge to
            make impactful contributions in the field of software engineering.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About