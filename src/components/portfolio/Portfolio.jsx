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
      title: 'my portfolio title is here',
      github: '',
      demo: ''
    },
    {
      id: 1,
      image: IMG02,
      title: 'my portfolio title is here',
      github: 'https://github.com/Kaveenxz/NIBM-project',
      demo: ''
    },
    {
      id: 1,
      image: IMG03,
      title: 'my portfolio title is here',
      github: '',
      demo: ''
    },
    {
      id: 1,
      image: IMG04,
      title: 'my portfolio title is here',
      github: '',
      demo: ''
    },
    {
      id: 1,
      image: IMG01,
      title: 'my portfolio title is here',
      github: '',
      demo: ''
    },
    {
      id: 1,
      image: IMG01,
      title: 'my portfolio title is here',
      github: '',
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