import React from 'react'
import './button.css'
import Close from '../Close_button/Close';

export default function Button() {

    


    function ani() {
        document.getElementById('anim').className = 'yes';
    }

    function closediv() {
        document.getElementById('anim').className = 'no';
    }
    return (
        <>
            <button class="button" onClick={ani}>
                <div class="button-box">
                    <span class="button-elem">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
                            <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                    </span>
                    <span class="button-elem">
                        <svg viewBox="0 0 46 40">
                            <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                        </svg>
                    </span>
                </div>
            </button>
            

            <div id='anim'>
                <div class="mod">
                    <div class="modal-content modback">
                        <div class="modal-header">
                            <h5 class="modal-title text-white" id="staticBackdropLabel">BeCafe</h5>

                            {/* close button */}
                            <Close/>
                        </div>
                        <div class="modal-body mt-5">
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <a className='nav-link navlinkss' href='/'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link navlinkss' href='/menus'>Menu</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link navlinkss' href='/#event' onClick={closediv}>Events</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link navlinkss' href='/#contact' onClick={closediv}>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
