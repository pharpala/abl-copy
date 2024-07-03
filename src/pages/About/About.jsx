import React from 'react'
import './About.css'
import summitlady from '../../assets/summit-lady.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <h2> ABOUT CEPSSC </h2>
            <p> The College of Engineering and Physical Sciences 
                Student Council (CEPSSC) helps to ensure the wellbeing
                of all students in CEPS. We seek to maintain harmonious 
                and effective communication between the college,
                students, alumni associations and the university community 
                at large. We run events throughout the year and promote 
                opportunities from clubs and other organizations, so be 
                sure to follow us on social media to not miss out! </p>
        </div>
        <div className="about-right">
            <img src={summitlady} alt="lady-photo" className='about-img'/>
        </div>
    </div>
  )
}

export default About
