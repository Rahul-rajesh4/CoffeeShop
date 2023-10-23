import React from 'react'
import './Card.css'
import best from './image/best.jpg'
import drinks from './image/drinks.jpg'
import food from './image/food.jpg'
import pack from './image/pack.jpg'
import Seemore from '../Button2/Seemore'
export default function Card() {
    return (
        <>
            <div className='maincard'>
                <div className='container'>
                    <div className='row rowspace'>
                        <div className='col-lg-3'>
                            {/* card-1 */}
                            <div class="card designn">
                                <img src={best} alt="" />
                                <div className='cardoverlay'>
                                    <div class="card-content">
                                        <h2>
                                            Bestseller<br></br>
                                        </h2>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            {/* card-2 */}
                            <div class="card designn">
                                <img src={drinks} alt="" />
                                <div className='cardoverlay'>
                                    <div class="card-content">
                                        <h2>
                                            Drinks<br></br>
                                        </h2>
                                        <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            {/* card-3 */}
                            <div class="card designn">
                                <img src={food} alt="" />
                                <div className='cardoverlay'>
                                    <div class="card-content">
                                        <h2>
                                            Food<br></br>
                                        </h2>
                                        <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            {/* card-4 */}
                            <div class="card designn">
                                <img src={pack} alt="" />
                                <div className='cardoverlay'>
                                    <div class="card-content">
                                        <h2>
                                            Coffee At Home<br></br>
                                        </h2>
                                        <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='buttonnalign'>
                        <Seemore />
                    </div>







                </div>


            </div>
        </>
    )
}
