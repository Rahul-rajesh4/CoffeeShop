import React, { useEffect } from 'react'
import './Home.css'
import down from './img/wdown.png'
import insta from './img/insta.png'
import x from './img/x.png'
import linkedin from './img/linkedin.png'
import png from './img/coffee.png'
import Button from '../button/Button'
import Card from '../CARDS/Card'
import Aos from 'aos'
import Sentdata from '../Message/Sentdata'
import Visiting from '../visiting/Visiting'
import Event from '../EVENT/Event'
export default function Home() {
    useEffect(() => {

        Aos.init();
    }, [])

    return (
        <>
            <div className='bodyy'>
                <div className='homebackground'>
                    <div className='overlay'>
                        <div className='icons'>
                            <ul className='navbar-nav'>
                                <li>
                                    <img className='iconsize' src={insta}></img>
                                </li>
                                <li>
                                    <img className='iconsize' src={x}></img>
                                </li>
                                <li>
                                    <img className='iconsize' src={linkedin}></img>
                                </li>
                            </ul>
                        </div>
                        <div className='overlay2'>
                            <Button />
                            <h1 className='heddinggg'>BeCafe</h1>
                            <img className='downarrow' src={down}></img>

                        </div>
                    </div>
                </div>

                <Visiting />


                <div className='productt'>
                    <h1 className='product'>Our Products</h1>
                    <Card />
                </div>
                <div className='message'>
                    <h1 className='hedding11' data-aos="fade-right" data-aos-delay=".1s">Our Mission</h1>
                    <p className='pera2' data-aos="fade-right" data-aos-delay=".1s">Our mission is to awaken the world, one cup at a time.
                        We're committed to brewing exceptional coffee,
                        creating a vibrant and welcoming community hub, and nurturing sustainable relationships from bean to cup.
                        With every sip, we aim to infuse joy, warmth, and inspiration into the lives of our customers,
                        making each visit a memorable and uplifting experience</p>
                </div>
                <div>
                    <Sentdata />
                </div>
                <div>
                    <footer className="coffee-shop-footer">
                        <div className="footer-content">
                            <div className="footer-logo">
                                <img src={png} alt="Coffee Shop Logo" />
                            </div>
                            <div className="footer-info">
                                <p>Visit us at:</p>
                                <address>
                                    123 Coffee Street<br />
                                    Cityville, CO 12345
                                </address>
                                <p>Contact us: <a href="tel:+1234567890">(123) 456-7890</a></p>
                                <p>Email: <a href="mailto:info@coffeeshop.com">info@coffeeshop.com</a></p>
                            </div>
                        </div>
                        <div className="social-media">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
