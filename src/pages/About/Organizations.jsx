import React from 'react'
import './Organizations.css'

import gos from '../../assets/gos.webp'
import eng from '../../assets/eng.png'
import math from '../../assets/math.jpg'
import pi from '../../assets/pi.png'
import socis from '../../assets/socis.png'
import laptop from '../../assets/laptop.png'
import physicsclub from '../../assets/physics-club.png'
import planet from '../../assets/planet.png'
import toxicology from '../../assets/toxicology.png'
import radio from '../../assets/radio.png'
import nanoscience from '../../assets/nanoscience.png'
import dna from '../../assets/dna.png'

const Organizations = () => {
    return (
        <div className="orgs">
            <div className="constrain">
                <div className="org">
                    <a href="https://www.guelphengsoc.com/" target="_blank" rel="noopener noreferrer">
                        <img src={gos} alt="gos" />
                        <div className="caption-2">
                            <img src={eng} alt="gear" />
                            <p>Check us out!</p>
                        </div>
                    </a>
                </div>
                <div className="additional-info">
                        <h3> Guelph Engineering Society </h3>
                        <p> Guelph Engineering Society is a group of elected 
                            and appointed students ranging in year and program 
                            who work together to provide events, services and 
                            representation for the engineering student body. 
                            These students coordinate the services and events 
                            offered and represent the rest of Guelph 
                            Engineering at provincial and national levels.
                            EngSoc’s goal is to provide its members with academic, 
                            professional, and social resources ensure each students
                            has a positive experience as they work to complete their 
                            engineering degrees here at the University of Guelph.  </p>
                </div>
            </div>

            <div className="constrain">
                <div className="org">
                    <a href="https://www.instagram.com/uogmathandstats/" target="_blank" rel="noopener noreferrer">
                        <img src={math} alt="math" />
                        <div className="caption-2">
                            <img src={pi} alt="pi sign" />
                            <p>Check us out!</p>
                        </div>
                    </a>
                </div>
                <div className="additional-info">
                        <h3> Mathematics & Statistics Club </h3>
                        <p> Undergraduate Mathematical Science majors 
                            at the University of Guelph are encouraged 
                            to be a member of the Math & Stats Club.
                            The club organizes various social events 
                            throughout the year and serves as a great way
                            to meet other students, especially those 
                            who may not be in your classes! 
                            In addition to the social aspect of the club,
                            members also engage in outreach such as offering
                            interactive activities for school groups, 
                            assisting with mathematics contests and providing 
                            extracurricular learning opportunities for fellow 
                            undergraduate students. </p>
                </div>
            </div>

            <div className="constrain">
                <div className="org">
                    <a href="https://www.socis.ca/" target="_blank" rel="noopener noreferrer">
                        <img src={socis} alt="socis" />
                        <div className="caption-2">
                            <img src={laptop} alt="coding" />
                            <p>Check us out!</p>
                        </div>
                    </a>
                </div>
                <div className="additional-info">
                        <h3> Society of Computing & Information Science </h3>
                        <p> The official student society for the School
                            of Computer Science students at the University of 
                            Guelph. They focus on community building, creating 
                            opportunities for students, and advocating for 
                            students interests. They also run events, organize 
                            hackathons, administer clubs, and represent School 
                            of Computer Science students. They play a role in 
                            uniting students and improving their university 
                            experience. Through this role their goal is to empower 
                            students to innovate, network, and succeed because 
                            you are what make the University of Guelph 
                            great. 
                        </p>
                </div>
            </div>

            <div className="constrain">
                <div className="org">
                    <a href="https://www.physics.uoguelph.ca/physics-club" target="_blank" rel="noopener noreferrer">
                        <img src={physicsclub} alt="physics" />
                        <div className="caption-2">
                            <img src={planet} alt="planet" />
                            <p>Check us out!</p>
                        </div>
                    </a>
                </div>
                <div className="additional-info">
                        <h3> Physics and Astronomy Club </h3>
                        <p> <br />
                            The Physics and Astronomy Club is a student-run 
                            group interested in and enthusiastic about all 
                            things physics and space related. All Majors, 
                            Minors and Colleges are welcome to attend 
                            meetings and events. For updates on our events 
                            contact physclub@uoguelph.ca, join our Discord, 
                            or follow us on Instagram and Facebook.  
                            <br /><br /><br /><br /><br /><br />
                        </p>
                </div>
            </div>

            <div className="constrain">
                <div className="org">
                    <a href="https://www.instagram.com/uofgtoxsa/" target="_blank" rel="noopener noreferrer">
                        <img src={toxicology} alt="toxic" />
                        <div className="caption-2">
                            <img src={radio} alt="radiation" />
                            <p>Check us out!</p>
                        </div>
                    </a>
                </div>
                <div className="additional-info">
                        <h3> Toxicology Student Association </h3>
                        <p> A student association representing 
                            the Biomedical Toxicology student body, 
                            running events and alerting students of 
                            updates from faculty and the College of 
                            Engineering and Physical Sciences. 
                            <br /><br /><br /><br />
                        </p>
                </div>
            </div>

            <div className="constrain">
                <div className="org">
                    <a href="https://www.instagram.com/nanoclub_guelph/" target="_blank" rel="noopener noreferrer">
                        <img src={nanoscience} alt="nanoscience" />
                        <div className="caption-2">
                            <img src={dna} alt="dna" />
                            <p>Check us out!</p>
                        </div>
                    </a>
                </div>
                <div className="additional-info">
                        <h3> Nanoscience Club</h3>
                        <p> The Nanoscience Club made their debut at 
                            College Royal 2009. The club, made up of 
                            all first year students put together posters, 
                            and other display materials to show the public 
                            what nanoscience is about. There was also 
                            interactive activities and demonstrations.  
                            <br /><br /><br />
                        </p>
                </div>
            </div>


        </div>

        
    )
}

export default Organizations
