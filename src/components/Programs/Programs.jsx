import React from 'react'
import './Programs.css'
import trivia from '../../assets/trivia.png'
import club from '../../assets/club.png'
import freezie from '../../assets/freezie.png'

const Programs = () => {
    return (
        <div className="programs-container">
            <div>
                <h1 className='header'>Upcoming Events</h1>
                <h3>Check out our upcoming events!</h3>
            </div>
            <div className="programs">
              <div className='program'>
                <img src={trivia} alt="event" />
                <div className="caption">
                    <p>Join us for trivia night at the bullring</p>
                </div>
              </div>

              <div className='program'>
                <img src={club} alt="event" />
                <div className="caption">
                    <p>Join us for trivia night at the bullring</p>
                </div>
              </div>

              <div className='program'>
                <img src={freezie} alt="event" />
                <div className="caption">
                    <p>Join us for trivia night at the bullring</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Programs