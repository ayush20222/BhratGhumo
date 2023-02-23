import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Media/img.jpg'
import img1 from '../../Media/img1.jpg'
import img2 from '../../Media/img2.jpg'
import img3 from '../../Media/img3.jpg'
import img4 from '../../Media/img4.jpg'
import img5 from '../../Media/img5.jpg'
import img6 from '../../Media/img6.jpg'
import img7 from '../../Media/img7.jpg'
import img8 from '../../Media/img8.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data =[
  {
    id:1,
    imgSrc:img,
    desTitle:'Taj Mahal',
    location:'Agra',
    duration:'5 days',
    fees:'Rs.15,234',
    description: ' As it homes the world’s most beautiful monument, Taj Mahal, it reigns supreme in the list of famous tourist places in India. This white falls in the list of Seven Wonders of the World. Must see the sunset and sunrise view of Taj Mahal.',
  },
  {
    id:2,
    imgSrc:img1,
    desTitle:'Ganga Aarti',
    location:'Varanasi',
    duration:'4 days',
    fees:'Rs.8,234',
    description: 'Varanasi is the right place to make it a reality. Varanasi is one of the oldest inhabited cities, which is still in use. The River Ganges plays an important role in imparting spirituality to the region.',
  },
  {
    id:3,
    imgSrc:img2,
    desTitle:'Jal Mahal',
    location:'Jaipur',
    duration:'4 days',
    fees:'Rs.18,234',
    description: 'The Jal Mahal literally means the “Water Palace”, but when it was built, Maharaja Madho Singh I did not intend to use it as a palace. Instead, it was supposed to be a hunting lodge for the king and his entourage during their duck hunting trips.',
  },
  {
    id:4,
    imgSrc:img3,
    desTitle:'Gulmarg',
    location:'Kashmir',
    duration:'8 days',
    fees:'Rs.17,234',
    description: 't is considered to be one of the indomitably beautiful destinations in the Indian context. With lush green mountainous views, there are snow clad peaks along with amazing waterfalls, flower gardens etc. Indeed, Kashmir beauty enhances during the winters.',
  },
  {
    id:5,
    imgSrc:img4,
    desTitle:'Toy Train',
    location:'Darjeeling',
    duration:'5 days',
    fees:'Rs.9,234',
    description: 'Popularly considered to be the Queen of the Hills, Darjeeling is at an altitude of 2134 mete above sea level. With the rolling mountains, the audacity of this place is amazing. One can finds ample of tea plantations as Darjeeling produces the best teas in the world.',
  },
  {
    id:6,
    imgSrc:img5,
    desTitle:'Nainital',
    location:'Uttarakhand',
    duration:'4 days',
    fees:'Rs.7,234',
    description: ' Nainital is of the famous hill stations and weekend getaway escape destination in India. Nainital is one of the famous honeymoon destinations, thanks to the Himalayan valley climate, and interesting adventure activities.',
  },
  {
    id:7,
    imgSrc:img6,
    desTitle:'Victorian Memorial',
    location:'Kolkata',
    duration:'6 days',
    fees:'Rs.6,234',
    description: 'Kolkata is not just for enjoying Durga Pooja. Kolkata is one of the most enthralling commercial destinations. However, the land sticks to its culture and splendid customs and is the intellectual capital of the culture.',
  },
  {
    id:8,
    imgSrc:img7,
    desTitle:'Golden Temple',
    location:'Amritsar',
    duration:'3 days',
    fees:'Rs.4,234',
    description: 'Amritsar stands as a fusion of new and old, in a kaleidoscopic beauty. Amritsar might have started as a religious destination. However, today, apart from the Golden Temple, the land stands as a cultural beauty and astonishing reminder of the past.',
  },
  {
    id:9,
    imgSrc:img8,
    desTitle:'Ajanta Ellora Caves',
    location:'Aurangabad',
    duration:'7 days',
    fees:'Rs.19,234',
    description: 'The Ajanta Caves constitute 30 rock-cut cave monuments. The best part of this place is the splendid architectural beauty that resides here. One simply love the paintings and sculptures of these caves and that is what makes them all the more inviting',
  },
]
const Main = () => {


  // creating react hook to add scroll animation 
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos='fade-right' className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* using map so creating array first  */}
        {
          Data.map(({id, imgSrc, desTitle, location, duration, fees, description})=>{
            return(
              <div key={id} data-aos='fade-up' className="singleDestination">
                {/* return single id from map array  */}
                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle}/>
                </div>


                <div className="cardInfo">
                  <h4 className="desTitle">{desTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>

                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{duration}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS<HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )

          })
        }

      </div>
    </section>
  )
}

export default Main
