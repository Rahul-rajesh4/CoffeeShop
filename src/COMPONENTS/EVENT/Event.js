import React, { useEffect } from 'react'
import './event.css'
import Aos from 'aos'
export default function Event() {

    useEffect(() => {

        Aos.init();
    }, [])
    return (
        <>
            <div className='event'>
                <h1 className='eventname'>Events</h1>
            </div>
            <div className='eventsize'>
                <div className='eventcontent row'>
                    <div className='col-md-6 eventleft left'>
                        <h1 className='eventtitle' data-aos="fade-right" data-aos-delay=".1s">Upcoming Events</h1>
                        <h3 className='eventsubtitle' data-aos="fade-right" data-aos-delay=".1s">Coffee Tasting</h3>
                        <p className='eventparagraph' data-aos="fade-right" data-aos-delay=".1s">
                            DATE:&nbsp;2023-10-30<br></br>
                            Location:&nbsp;123 main st<br></br>
                            <h2>JOIN US FOR A COFFEE TASTING EVENT</h2>
                        </p>
                    </div>
                    <div className='col-md-6 eventright right'>
                        <div className='eventimgg'></div>
                    </div>
                </div>
                <div className='eventcontent row'>
                    <div className='col-md-6 eventleft2 left'>
                    <div className='eventimgg2'></div>
                    </div>
                    <div className='col-md-6 eventright2 right'>
                    <h1 className='eventtitle' data-aos="fade-right" data-aos-delay=".1s">Current Promotions</h1>
                        <h3 className='eventsubtitle' data-aos="fade-right" data-aos-delay=".1s">Happy Hour</h3>
                        <p className='eventparagraph' data-aos="fade-right" data-aos-delay=".1s">
                        Duration: Every Friday, 3 PM - 5 PM<br></br>
                        Offer: 50% off on all coffee drinks!<br></br>
                        </p>
                    </div>
                </div>
                <div className='eventcontent row'>
                    <div className='col-md-6 eventleft3 left'>
                        <h1 className='eventtitle' data-aos="fade-right" data-aos-delay=".1s">News and Updates</h1>
                        <h3 className='eventsubtitle' data-aos="fade-right" data-aos-delay=".1s">New Coffee Blend</h3>
                        <p className='eventparagraph' data-aos="fade-right" data-aos-delay=".1s">
                        Date: 2023-10-15
                        <h4>Introducing our exclusive new coffee blend!</h4>
                        </p>
                    </div>
                    <div className='col-md-6 eventright3 right'>
                        <div className='eventimgg3'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
