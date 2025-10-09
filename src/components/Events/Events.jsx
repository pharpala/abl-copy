import React from 'react'
import './Events.css'
import trivia from '../../assets/trivia.png'
import club from '../../assets/club.png'
import freezie from '../../assets/freezie.png'
import datefreezies from '../../assets/date-freezies.png'
import datetrivia from '../../assets/date-trivia.png'
import dateclub from '../../assets/date-club.png'
import linkedin from '../../assets/linkedin.png'
import datelinkedin from '../../assets/datelinkedin.png'
import mentalmath from '../../assets/mental-math.png'
import datemath from '../../assets/datemath.png'

const Events = () => {
    return (
        <div className="programs-container">
            <div className="programs">
                <div className='program'>
                    <img src={linkedin} alt="event" />
                    <a href="https://experienceguelph.ca/myAccount/career/events-workshops.html" target="_blank" rel="noopener noreferrer">
                        <div className="caption">
                            <img src={datelinkedin} alt="" />
                        </div>
                    </a>
                </div>

                <div className='program'>
                    <img src={mentalmath} alt="event" />
                    <a href="https://gryphlife.uoguelph.ca/event/278874" target="_blank" rel="noopener noreferrer">
                        <div className="caption">
                            <img src={datemath} alt="" />
                        </div>
                    </a>                    
                </div>
            </div>
            
            {/* Brand Ambassadors Section */}
            <div className="brand-ambassadors-section">
                <div className="brand-ambassadors-content">
                    <h3>Become a Brand Ambassador</h3>
                    <p>Join our team of passionate advocates and help build the Asian business community. As a Brand Ambassador, you'll represent our values, connect with fellow professionals, and drive meaningful change in your local area.</p>
                    
                    <div className="ambassador-benefits">
                        <h4>What You'll Get:</h4>
                        <ul>
                            <li>Leadership development opportunities</li>
                            <li>Exclusive networking events and workshops</li>
                            <li>Direct mentorship from industry leaders</li>
                            <li>Recognition and certificate programs</li>
                            <li>Building valuable professional connections</li>
                        </ul>
                    </div>
                    
                    <div className="ambassador-requirements">
                        <h4>What We're Looking For:</h4>
                        <ul>
                            <li>Passionate about Asian business leadership</li>
                            <li>Strong communication and interpersonal skills</li>
                            <li>Commitment to community engagement</li>
                            <li>Availability for monthly events and activities</li>
                            <li>Enthusiasm for promoting diversity and inclusion</li>
                        </ul>
                    </div>
                    
                    <div className="ambassador-cta">
                        <button className="apply-btn" onClick={() => window.open('https://forms.google.com/your-application-form', '_blank')}>
                            Apply Now
                        </button>
                        <p className="application-note">Applications are reviewed on a rolling basis. We'll contact qualified candidates within 2 weeks.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events