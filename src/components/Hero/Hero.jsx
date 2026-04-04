import React from 'react'
import './Hero.css'
import instagram from '../../assets/instagram.avif'
import linkedin from '../../assets/linkedin.webp'
import gryphlife from '../../assets/gryphlife.png'


const Hero = () => {
  return (
    <div className='hero container'>
      <video 
        className="hero-video"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/ABL-Banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="title-line">Asian</span>
          <span className="title-line">Business Leaders</span>
        </h1>
        <p className="hero-subtitle"> Empowering the next generation of Asian leaders </p>
        
        <a href="https://www.instagram.com/abl.lang" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" className="icon"/>
        </a>
        <a href="https://www.linkedin.com/company/asian-business-leaders/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="icon"/>
        </a>
        <a href="https://gryphlife.uoguelph.ca/organization/asianbusinessleaders" target="_blank" rel="noopener noreferrer">
            <img src={gryphlife} alt="gryphlife" className="icon icon-gryphlife"/>
        </a>

      </div>
    </div>
  )
}
export default Hero
