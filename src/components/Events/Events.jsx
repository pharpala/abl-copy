import React from 'react'
import './Events.css'
import trivia from '../../assets/trivia.png'
import club from '../../assets/club.png'
import freezie from '../../assets/freezie.png'
import datefreezies from '../../assets/date-freezies.png'
import datetrivia from '../../assets/date-trivia.png'
import dateclub from '../../assets/date-club.png'

const Events = () => {
    return (
        <div className="programs-container">

            <div className="programs">
                <div className='program'>
                    <img src={trivia} alt="event" />
                    <a href="https://gryphlife.uoguelph.ca/organization/cepssc/events" target="_blank" rel="noopener noreferrer">
                        <div className="caption">
                            <img src={datetrivia} alt="" />
                        </div>
                    </a>
                </div>

                <div className='program'>
                    <img src={club} alt="event" />
                    <a href="https://gryphlife.uoguelph.ca/organization/cepssc/events" target="_blank" rel="noopener noreferrer">
                        <div className="caption">
                            <img src={dateclub} alt="" />
                        </div>
                    </a>                    
                </div>

                <div className='program'>
                    <img src={freezie} alt="event" />
                    <a href="https://gryphlife.uoguelph.ca/organization/cepssc/events" target="_blank" rel="noopener noreferrer">
                        <div className="caption">
                            <img src={datefreezies} alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Events