import './services.css'
import{BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
      <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom UI/UX design for your brand.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframing and prototyping services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive design for all devices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Usability testing and optimization.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design system creation and maintenance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Accessibility implementation.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Engaging and SEO-friendly content creation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content strategy planning and execution.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content optimization and repurposing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content calendar management and scheduling.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Copywriting and editing services.</p>
            </li>
           
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customized web development solutions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-end development using modern frameworks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back-end development with Springboot & express.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-commerce development for secure online shopping.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API integration with third-party services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web performance optimization for fast loading times.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services