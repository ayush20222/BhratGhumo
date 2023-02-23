import React, {useEffect} from 'react'
import './footer.css'


import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'


import Aos from 'aos'
import 'aos/dist/aos.css'


import video2 from '../../Media/video2.mp4'

const Footer = () => {


  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
  <section className="footer">
    <div className="videoDiv">
      <video src={video2} loop autoPlay type='video/mp4'></video>
    </div>

    <div className="secContent container">
      <div className="contactDiv flex">
        <div data-aos='fade-up' className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
        </div>

        <div className="inputDiv flex">
          <input data-aos='fade-up' type="text" placeholder='Enter Email Address' />
          <button data-aos='fade-up' className='btn flex' type='submit'>
            SEND <FiSend className='icon'/>
          </button>
        </div>
      </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className='logoDiv'>
          <a href="#" className='logo flex'>
            <MdOutlineTravelExplore className='icon'/> BharatGhumo
          </a>
          </div>
          

        <div data-aos='fade-up' className="footerParagraph">
        Having listed above the best places to visit India does not in any way undermine the importance of other places of repute in the Indian tourism context.
        </div>

        <div data-aos='fade-up' className="footerSocials flex">
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <AiFillInstagram className='icon'/>
          <FaTripadvisor className='icon'/>
        </div>
       </div>

        <div className="footerLinks grid">
          <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
            <span className='groupTitle'>
              OUR AGENCY
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Services
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Insurance
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Agency
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Tourism
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Payment
            </li>
          </div>


          <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
            <span className='groupTitle'>
              PARTNERS
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Bookings
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Rentcars
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Hostelworld
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Trivago
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Tripadvisor
            </li>
          </div>


          <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
            <span className='groupTitle'>
              LAST MINUTE
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Delhi
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Chennai
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
            Punjab
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Goa
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Rajasthan
            </li>
          </div>
        </div>

        <div className="footerDiv flex">
          <small>EXPLORE INDIA</small>
          <small>COPYRIGHTS RESERVED 2023</small>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer
