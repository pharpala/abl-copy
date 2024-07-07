import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "128d6313-f9e9-4d38-9151-634780a22ec0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3> Send us a message</h3>
        <p> Feel free to reach out to us through
            the contact form or find our contact
            information below. Your questions, 
            feedback, and suggestions are important 
            as we strive to provide the best experience 
            to our university community.
            <ul>
                <li><img src={mail_icon} alt="mail" />cepssc@uoguelph.ca </li>
                <li> <img src={location_icon} alt="mail" />
                    1301 Summerlee Science Complex
                    University of Guelph
                    474-570 Gordon St, Guelph, ON
                    N1G 1Y2 
                </li>
            </ul>
        </p>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label> Your Name </label>
            <input type="text" name='name' placeholder=' John Doe'
            required/>
            <label> Your Email </label>
            <input type="Email" name='email' placeholder='doe@gmail.com'
            required/>
            <label> Write your message here </label>
            <textarea name="message" rows='5'
            placeholder='How do I participate in the next event?' 
            required> </textarea>
            <button type='submit' className='btn dark-btn'>
                Submit
            </button>
        </form> 
        <span> {result} </span>
      </div>
  </div>
  )
}

export default Contact
