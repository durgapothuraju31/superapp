import React from 'react';
import bgimg from "../utils/bgimg.jpg";
import RegisterForm from './RegisterForm';
import "../index.css";



const register = () => {
  return (
    <div className="container">
      <img src={bgimg} alt="reg-img" className='image'></img>
      <div className="text-overlay">
        Discover new things on Super App
    </div>
    <RegisterForm/>
    </div>
  )
}

export default register;