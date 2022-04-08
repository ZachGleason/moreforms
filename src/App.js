
import './App.css';
import React, { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    
    <form onSubmit={() => {} } class="form-style-7" id='form'>
      <h1>Sign Up</h1>
      <div>
        <label htmlFor="">First Name:</label>
        <input  className='box'  type="text" onChange={(e) => setFirstName(e.target.value)}/>
        {firstName.length < 2 && firstName.length > 0 ? (
          <p>First Name Must be greater than 2 Characters!</p>) : null}
      </div>
      <div>
        <label htmlFor="">Last Name:</label>
        <input className='box' type="text" onChange={(e) => setLastName(e.target.value)}/>
        {lastName.length < 2 && lastName.length > 0 ? (
          <p>Last Name Must be greater than 2 Characters!</p>) : null}
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input className='box' type="text" onChange={(e) => setEmail(e.target.value)}/>
        {email.length < 5 && email.length > 0 ? (
          <p>Email Must be greater than 5 Characters!</p>) : null}
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input className='box' type="text" onChange={(e) => setPassword(e.target.value)}/>
        {password.length < 8 && password.length > 0 ? (
          <p>First Name Must be greater than 8 Characters!</p>) : null}
      </div>
      <div>
      <label htmlFor="">Confirm Password:</label>
        <input  className='box' type="text" onChange={(e) => setConfirmPassword(e.target.value)}/>
        {confirmPassword !== password ? (
          <p>Passwords must match! </p>) : null}
      </div>
      <div id='move'>
        <button id='button' onSubmit={() => {}}  >Submit</button>
      </div>
    </form>
  );
}

export default App;
