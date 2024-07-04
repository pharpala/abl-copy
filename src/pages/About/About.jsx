import React from 'react'
import './About.css'
import summitlady from '../../assets/summit-lady.png'
import cepsscteams from '../../assets/cepssc-teams.png'

import Team from './Team'
import './Team.css'


const About = () => {
  return (
    <>
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
    <div className='about-2'>
        <h2> Who is part of CEPSSC?</h2>
        <img src={cepsscteams} alt="clubs" />
    </div>
    <div className='about-3'>
        <h2 className='blue'> Meet the Team</h2>
    </div>
    <Team />
    </>
  )
}

export default About
