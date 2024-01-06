import React, { useState } from 'react';

//import signinwithemail and password from firebase
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

//Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmition = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      showAlert("success", "Successfully logged in!");
    } catch {
      showAlert("danger", "You entered a wrong username or password.");
    }
  };

  const showAlert = (type, message) => {
    return (
      <div className={`alert alert-${type}`} role="alert">
        {message}
      </div>
    );
  };

  return (
    <div>
      <div>
        <h1>Welcome Back</h1>
        <p>Sign in to continue</p>
        <form onSubmit={handleSubmition} className='mt-3 pt-3 pb-3'>
          <input type="text" className='form-control mb-3' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
          <input type="password" className='form-control mb-3' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit" className="btn btn-primary btn-block">Log In</button>
        </form>
      </div>
      
        <p className='text-center'>Or</p>
      
      <div className='row justify-content-center mt-3 pt-3 pb-3'>
        <div className='col'>
          <button type="submit" className='btn btn-primary btn-block'>
          <FontAwesomeIcon icon={faGoogle} /> Continue with Google
          </button>
        </div>
        <div className='col'>
          <button type="submit" className='btn btn-primary btn-block'>
          <FontAwesomeIcon icon={faFacebook} /> Continue with Facebook
          </button>
        </div>
      </div>
      <div></div>
      <div></div>
      <div className='row'>
        <p className='text-center'> <a href="#">Forgot Password?</a></p>
      </div>
      <p className='text-center'>Don't have an account? <a href="#">Sign Up</a></p>

      <p className='text-center'>@2020 Smart POS System</p>
    </div>
  );
}

export default SignIn;