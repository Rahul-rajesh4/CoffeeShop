import React, { useEffect } from 'react'
import './visiting.css'
import Aos from 'aos'
import visit from './img/visitt.jpg'
export default function Visiting() {
    useEffect(() => {

        Aos.init();
    }, [])
    return (
        <>
            <div className='visitingmain'>
                <div className='visitimage'>
                    <div className='divimg' data-aos="fade-right" data-aos-delay=".1s"></div>
                </div>
                <div className='visittext'>
                    <h2 className='visith2'>Come visit.</h2>
                    <div class="row">
                        <div class="col-md mt-2">
                            <h4 className='address' data-aos="fade-right" data-aos-delay=".1s">Address</h4>
                            <p className='address2' data-aos="fade-right" data-aos-delay=".1s">123 Coffee Street<br></br>
                                Cityville, CO 12345,
                                Calicut</p>
                        </div>
                        <div class="col-md mt-2">
                            <h4 className='address3' data-aos="fade-right" data-aos-delay=".1s">Opening Hours</h4>
                            <p className='address4' data-aos="fade-right" data-aos-delay=".1s">Mon - Fri: 8:00 AM - 6:00 PM<br></br>
                                Sat: 9:00 AM - 6:00 PM<br></br>
                                Sun: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
