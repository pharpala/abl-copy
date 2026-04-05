import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Get In Touch</h3>
        <p>Have a question or want to get involved? Reach out to us directly and we'll get back to you as soon as possible.</p>
        <ul>
          <li><img src={mail_icon} alt="mail" />abl@uoguelph.ca</li>
          <li><img src={location_icon} alt="location" />
            MacDonald Hall, Lang Business School
            University of Guelph
            50 Stone Road East, Guelph, ON
            N1G 2W1
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <a href="mailto:abl@uoguelph.ca" className='btn dark-btn email-btn'>
          Send us an Email
        </a>
      </div>
    </div>
  )
}

export default Contact
