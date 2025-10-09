import React from 'react'
import './About.css'
import summitlady from '../../assets/summit-lady.png'


const About = () => {
  return (
    <>
    <div className='about'>
        <div className="about-left">
            <h2> ABOUT ASIAN BUSINESS LEADERS </h2>
            <p> Asian Business Leaders (ABL) is a dynamic community dedicated to 
                empowering and connecting Asian professionals across all industries. 
                We foster leadership development, provide networking opportunities, 
                and create pathways for career advancement. Our mission is to build 
                a strong, supportive network that celebrates Asian excellence in 
                business while promoting diversity, inclusion, and mentorship 
                throughout the professional landscape. </p>
        </div>
        <div className="about-right">
            <img src={summitlady} alt="asian-business-leader" className='about-img'/>
        </div>
    </div>
    <div className='about-2'>
        <div className="mission-vision">
            <div className="mission">
                <h3>Our Mission</h3>
                <p>To create an inclusive platform that empowers Asian professionals 
                to achieve their full potential through leadership development, 
                strategic networking, and community building.</p>
            </div>
            <div className="vision">
                <h3>Our Vision</h3>
                <p>A world where Asian business leaders are recognized, celebrated, 
                and equipped with the resources to drive innovation and positive 
                change in their industries and communities.</p>
            </div>
        </div>
        <div className="values-section">
            <h3>Our Core Values</h3>
            <div className="values-grid">
                <div className="value-item">
                    <h4>Excellence</h4>
                    <p>Striving for the highest standards in everything we do</p>
                </div>
                <div className="value-item">
                    <h4>Community</h4>
                    <p>Building strong, lasting connections across all sectors</p>
                </div>
                <div className="value-item">
                    <h4>Mentorship</h4>
                    <p>Fostering growth through knowledge sharing and guidance</p>
                </div>
                <div className="value-item">
                    <h4>Innovation</h4>
                    <p>Embracing new ideas and approaches to business challenges</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
