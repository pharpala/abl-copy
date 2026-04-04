import React from 'react'
import './Events.css'
import luminousGala from '../../assets/events/luminous-gala.png'
import gryphonDen from '../../assets/events/gryphon-den.png'

const Events = () => {
    return (
        <div className="programs-container">
            <div className="programs">
                <div className='program' onClick={() => window.open('https://www.instagram.com/p/DUlM7iNjtCI/', '_blank')} style={{cursor: 'pointer'}}>
                    <img src={luminousGala} alt="Luminous Gala" />
                </div>

                <div className='program' onClick={() => window.open('https://www.instagram.com/p/DQnA7HVDfeb/?img_index=1', '_blank')} style={{cursor: 'pointer'}}>
                    <img src={gryphonDen} alt="Gryphon Den" />
                </div>
            </div>
            
            {/* Brand Ambassadors Section */}
            <div className="brand-ambassadors-section">
                <div className="brand-ambassadors-content">
                    <h3>Become a Brand Ambassador</h3>
                    <p>Join our team of passionate advocates and help build the Asian business community. As a Brand Ambassador, you'll represent our values, connect with fellow professionals, and drive meaningful change in your local area.</p>
                    
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
                        <button className="apply-btn" onClick={() => window.open('https://www.instagram.com/abl.lang/', '_blank')}>
                            Learn about roles available
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events