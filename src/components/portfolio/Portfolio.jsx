import './portfolio.css'
import Img01 from '../../assests/Img01.png'
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img01} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github link" className="btn">Github</a>
            <a href="dribble link" className='btn btn-primary' target='_bkank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img01} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github link" className="btn">Github</a>
            <a href="dribble link" className='btn btn-primary' target='_bkank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img01} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github link" className="btn">Github</a>
            <a href="dribble link" className='btn btn-primary' target='_bkank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img01} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github link" className="btn">Github</a>
            <a href="dribble link" className='btn btn-primary' target='_bkank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img01} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github link" className="btn">Github</a>
            <a href="dribble link" className='btn btn-primary' target='_bkank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img01} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github link" className="btn">Github</a>
            <a href="dribble link" className='btn btn-primary' target='_bkank'>Live Demo</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Portfolio