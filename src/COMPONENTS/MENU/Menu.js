import React from 'react'
import './menumenu.css'
import cup from './imges/cup4.jpg'
import videobg from './imges/bgvideo.mp4'
import Items from './Items'
import Button3 from '../Menubutton/Button3'
export default function Menu() {
  return (
    <>
      <div className='menumain'>
        <header className='parallax-header'>
          <div className='container '>
            <div className='header-content'>
              <div className='mnuuh1'>
                <Button3 />
                <h1>Menu</h1>
              </div>

            </div>
          </div>
        </header>
        <div className='container'>
          <div className='menucontent row'>
            <div className='col-md-6 left menuleft'>
              <h1 className='menutitle'>COFFEE + FOODS.</h1>
              <h3 className='menusubtitle'>Eat. Drink. Relax.</h3>
              <p className='paragraph'>Here at beCafe, we do things a little differently. Make
                yourself at home and let us deliver freshly made food
                right to your table. Will you be joining us for breakfast or
                brunch? Or how about trying one of our scrumptious
                waffles or toasties on your next visit?</p>
            </div>
            <div className='col-md-6 right menuright'>
              <img src={cup} className='w-100'></img>
            </div>
          </div>
        </div>
        <div>
          <video className='video' src={videobg} autoPlay loop muted />
        </div>



        {/* cards */}
        <Items/>
      </div>
    </>
  )
}
