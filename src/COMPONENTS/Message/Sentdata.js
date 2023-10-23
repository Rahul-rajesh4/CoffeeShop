import React, { useState } from 'react'
import './Sentdata.css'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Event from '../EVENT/Event';
export default function Sentdata() {


  const [state, setState] = useState({})

  const inputchange = (e) => {
    const { name, value } = e.target
    console.log(e.target);
    setState({ ...state, [name]: value })
  }

  const validateEmail = (email) => {
    console.log(email);
    // Regular expression for email validation
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(validRegex.test(email));
    return validRegex.test(email);
  };


  const sent = (event) => {
    console.log(state.email);
    event.preventDefault()
    console.log(state);
    

    toast.dismiss();

    // Check for empty fields
    if (!state.name || !state.email || !state.contact || !state.message) {
      toast.error('Empty !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

      return;
    }
    if (!validateEmail(state.email)) {
      console.log(state.email);

      toast.info('Email is not valid!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (state.name || state.email || state.contact || state.message) {
      toast.success('success', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

      return;
    }
  }
  console.log(state.email);



  return (
    <>
    <ToastContainer></ToastContainer>
      <div className='backcard'>
        <div id='event'></div>
        <Event/>
        <div className='contact-in' id="contact">
          <div className='contact-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.7370130440468!2d75.78469704928804!3d11.245419692280516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659664b5fcaa5%3A0xee5d72316fe6a970!2sMaiTexa%20Technologies!5e0!3m2!1sen!2sin!4v1697872787210!5m2!1sen!2sin"
              width="100%" height="auto" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='contact-form'>
            <h1 className='titlecenter'>Contact Us</h1>
            <form>
              <input type="text" class="form-control formstyle bg-transparent" name='name' placeholder="YOUR NAME" onChange={inputchange}></input>
              <input type="email" class="form-control formstyle bg-transparent" name='email' placeholder="YOUR EMAIL" onChange={inputchange}></input>
              <input type="tel" class="form-control formstyle bg-transparent" name='contact' placeholder="PHONE NUMBER" onChange={inputchange}></input>
              <textarea type="message" class="form-control formstyle bg-transparent" name='message' placeholder="MESSAGE" onChange={inputchange}></textarea>
              <button class="btn btn-light formbutton" onClick={sent}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
