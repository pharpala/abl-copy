import React, { useRef } from 'react'
import blankpfp from '../../assets/blank-pfp.webp'
import michaela from '../../assets/michaela.jpg'
import nexticon from '../../assets/next-icon.png'
import backicon from '../../assets/back-icon.png'

const Team = () => {

    const slider = useRef()
    let tx = 0

    const slideForward = () => {
        if(tx > -65){
            tx -= 16.67
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 16.67
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
        <img src={nexticon} alt="next" className='next-btn' onClick={slideForward}/>
        <img src={backicon} alt="next" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={michaela} alt="user" />
                            <div>
                                <h3>Michaela Hishon </h3>
                                <span>President</span>
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
                                <h3>Ellena Song</h3>
                                <span> VP of Communications </span>
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
                                <span> VP of External Affairs </span>
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
                                <span> VP of Internal Affairs </span>
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
                                <h3> Pranay Harpalani </h3>
                                <span> VP of Social Affairs </span>
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
                                <h3> Alex MacKay </h3>
                                <span> VP of Finance </span>
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
