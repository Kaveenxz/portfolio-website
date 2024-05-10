import './testimonials.css'
import AVT01 from '../../assests/avatar1.jpg'
import AVT02 from '../../assests/avatar2.jpg'
import AVT03 from '../../assests/avatar3.jpg'
import AVT04 from '../../assests/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {

  const data = [
    {
      avatar: AVT01,
      name: 'Shenal Perera',
      review: 'Working with you was fantastic! Their attention to detail and creativity made our project a success. Highly recommend!'
    },
    {
      avatar: AVT02,
      name: 'Rehan Fernando',
      review: 'Kaveen is incredibly talented and professional. They listened to our needs and delivered beyond expectations. Very happy with the results!'
    },
    {
      avatar: AVT03,
      name: 'Mihiran Silva',
      review: 'Kaveen exceeded our expectations with their technical skills and creativity. Our website looks amazing and functions perfectly. Highly satisfied!.'
    },
    {
      avatar: AVT04,
      name: 'Ferez Rizma',
      review: 'Collaborating with Kaveen was a breeze! They captured our brand s voice perfectly and delivered engaging content. Highly recommended for content creation!'
    }
  ]

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
      >
        {
          data.map( ({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
    
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials