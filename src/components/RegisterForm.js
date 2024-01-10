import React, { useState } from 'react';
import "../index.css";

const RegisterForm = () => {

  const[formData, setFormData]= useState({
    name:"",
    username:"",
    email:"",
    mobile:"",
  }
  );
  const[checked , setChecked]= useState();

  
  const handleChange= (e) => {
    setFormData({...formData , [e.target.name]:e.target.value});
  }
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  

  const[nameError, setNameError] = useState(true);
  const[usernameError, setUserNameError] = useState(true);
  const[emailError, setEmailError] = useState(true);
  const[mobileError, setMobileError] = useState(true);
  const[checkedError , setCheckedError]= useState(true);

  
  const handleSubmit = (e) =>{
    e.preventDefault();
    //let isValid=true;
    
  
  if(formData.name.length ===0){
    setNameError(false);
    //isValid=false;
  }

  if(formData.username.length ===0 ){
    setUserNameError(false);
    //isValid=false;
  }
  if(formData.email.length ===0 ){
    setEmailError(false);
    //isValid=false;
  }
  if(formData.mobile.length ===0){
    setMobileError(false);
    //isValid = false;
  }
  /*if (isValid) {
    localStorage.getItem("userData", formData);
    navigate("/genre");
  }*/
  if (!checked) {
    setCheckedError(false);
  }
  };

  

  return (
    <div className='form-container'>
      <h1 className='form-head'>super app</h1>
      <p className='form-para'>Create your new account</p>
      <div className="input">
      <form >
        <input className="form-input" 
        style={nameError ?{borderStyle:"none"} : {borderColor:"#ff0000"}}
        type='text'
        name='name'
        placeholder='Name'
        onChange={(event)=>handleChange(event)}
      />
      {nameError ? (""):(<p style={{color:"#ff0000",padding:"3px 3px",textAlign:"left"}}>Field is Required</p>)}
        <input className="form-input" 
        style={usernameError? {borderStyle:"none"}:{borderColor:"#ff0000"}}
        type='text'
        name='username'
        placeholder='UserName'
        onChange={(event)=>handleChange(event)}
        />
        {usernameError ? (""):(<p style={{color:"#ff0000",padding:"3px 3px",textAlign:"left"}}>Field is Required</p>)}
        <input className="form-input" 
        style={emailError ? {borderStyle:"none"}:{borderColor:"#ff0000"}}
        type='email'
        name='email'
        placeholder='Email'
        onChange={(event)=>handleChange(event)}
        />
        {emailError ? (""):(<p style={{color:"#ff0000",padding:"3px 3px",textAlign:"left"}}>Field is Required</p>)}
        <input className="form-input" 
        style={mobileError ? {borderStyle:"none"}:{borderColor:"#ff0000"}}
        type='text'
        name='mobile'
        placeholder='Mobile'
        onChange={(event)=>handleChange(event)}
        />
        {mobileError ? (""):(<p style={{color:"#ff0000",padding:"3px 3px",textAlign:"left"}}>Field is Required</p>)}
        <div className='checkbox'>
        <input style={{width:"18px"}}
        name="check"
        type="checkbox"
        id="check"
        onChange={(event) => handleCheckboxChange(event)}
        />
        <label style={{color:"#7c7c7c"}}>Share my registration data with Superapp</label>
        </div>
        {checkedError ? ("") : (<p style={{color:"#ff0000",padding:"3px 3px",textAlign:"left"}}>Check the box if you want to proceed</p>)}
      </form>
      <button className='form-button' onClick={handleSubmit}>SIGN UP</button>
      <p className='tac'>By clicking on Sign Up. You agree to Superapp <span style={{color:"#72DB73"}}>Terms and 
      Conditions of Use</span></p>
      <p className='tac'>To learn more about Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{color:"#72DB73"}}> Privacy Policy</span></p>
    </div>
    </div>
  )
}

export default RegisterForm;