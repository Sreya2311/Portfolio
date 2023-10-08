import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect,  useState } from 'react'; 
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';



const Contact =()=> {
    const[letterClass,setLetterClass]=useState('text-animate')
    const refForm={useRef}
    
    useEffect(() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },3000)
    }, [])

    const sendEmail=(e) =>{
        e.preventDefault()

        emailjs

            .sendForm('service_bt0esvk','template_hwu3x7p',refForm.current,'zLepjH7603TXjRRdE')
            .then(
                ()=>{
                    alert("Message successfully sent!!")
                    window.location.reload(false)
                },
                ()=>{
                    alert("Failed to send message,Please try again")
                }
            )
    }
    
    

       
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm looking forward to explore potential web development opportunities.
                        My passion for crafting digital solutions and my commitment to delivering 
                        high-quality, user-friendly websites make me a valuable partner for your 
                        next web project. Feel free to reach out through the contact form below. 
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail} >
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />

                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />

                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required>

                                    </textarea>
                                </li>
                                <input type='submit' className='flat-button' value="SEND" /> 
                            </ul>
                        </form>

                    </div>

                </div>
                <div className='info-map'>
                    Sreya S,
                    <br />
                    Wollongong,NSW,
                    <br />
                    Australia <br />
                    <span>sreya2311@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[ -34.425072,150.893143]} zoom={13}> 
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[ -34.425072,150.893143]}>
                            <Popup>Sreya lives here, come over for a cup of coffee  </Popup>
                        </Marker>


                    </MapContainer>

                </div>


            </div>
            <Loader type='pacman' />
        </>
    )

}

export default Contact