import './portfolio.css'
import IMG01 from '../../assests/Img01.png'
import IMG02 from '../../assests/Img02.png'
import IMG03 from '../../assests/Img03.png'
import IMG04 from '../../assests/Img04.jpg'

function Portfolio() {

  const data = [
    {
      id: 1,
      image: IMG01,
      title: 'Library manegement app',
      github: 'https://github.com/Kaveenxz/library-management-frontend',
      demo: ''
    },
    {
      id: 2,
      image: IMG02,
      title: 'Simple e-commerce site',
      github: 'https://github.com/Kaveenxz/NIBM-project',
      demo: ''
    },
    {
      id: 3,
      image: IMG03,
      title: 'Real-time weather app',
      github: 'https://github.com/Kaveenxz/wetherApi',
      demo: ''
    },
    {
      id: 4,
      image: IMG04,
      title: 'Random meme generator',
      github: 'https://github.com/Kaveenxz/Meme-Genarator',
      demo: ''
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">Github</a>
                <a href={demo} className='btn btn-primary' target='_bkank'>Live Demo</a>
              </div>
            </article>
          )
        })}

      </div>
    </section>
  )
}

export default Portfolio