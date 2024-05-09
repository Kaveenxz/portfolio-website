import './testimonials.css'
import AVT01 from '../../assests/avatar1.jpg'
import AVT02 from '../../assests/avatar2.jpg'
import AVT03 from '../../assests/avatar3.jpg'
import AVT04 from '../../assests/avatar4.jpg'

function Testimonials() {

  
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT01} alt="Avatar one" />
            <h5 className="client__name">Shenali Shehansa</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium vitae sunt iste nobis! Alias quis, cumque accusantium sit adipisci porro reprehenderit? Omnis sint nobis minus ipsa laborum! Ratione, sequi.</small>

          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials