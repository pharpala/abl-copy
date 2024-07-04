import React from 'react'
import blankpfp from '../../assets/blank-pfp.webp'
import nexticon from '../../assets/next-icon.png'
import backicon from '../../assets/back-icon.png'

const Team = () => {
  return (
    <div className='testimonials'>
        <img src={nexticon} alt="" className='next-btn'/>
        <img src={backicon} alt="" className='back-btn'/>
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={blankpfp} alt="user" />
                            <div>
                                <h3> Michaela Hishon </h3>
                                <span> President </span>
                            </div>
                        </div>
                        <p>
                            As President, Michaela is responsible for overseeing 
                            the commitee and ensuring that all events run smoothly. 
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={blankpfp} alt="user" />
                            <div>
                                <h3> Ellena Song </h3>
                                <span> Vice President of Communications </span>
                            </div>
                        </div>
                        <p>
                            As President, Michaela is responsible for overseeing 
                            the commitee and ensuring that all events run smoothly. 
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={blankpfp} alt="user" />
                            <div>
                                <h3> Noel Johnston </h3>
                                <span> Vice President of External Affairs </span>
                            </div>
                        </div>
                        <p>
                            As President, Michaela is responsible for overseeing 
                            the commitee and ensuring that all events run smoothly. 
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={blankpfp} alt="user" />
                            <div>
                                <h3> Marcus Aldred-Ganhao </h3>
                                <span> Vice President of Internal Affairs </span>
                            </div>
                        </div>
                        <p>
                            As President, Michaela is responsible for overseeing 
                            the commitee and ensuring that all events run smoothly. 
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Team
