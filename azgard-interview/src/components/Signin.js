import React, { useState } from 'react';

import Illustration from './Illustration';

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
    <div className='row'>
      <div className="col-12 col-md-6 d-none d-md-inline bg-light"><Illustration/></div>
      <div className="col-12 col-md-6 my-auto">
        <div className="row">
          <div className="col-11 col-md-9 mx-auto">
                    {/* Page header */}
        <div className="page-header row">
          <h2 className='fw-bold'>Welcome Back!</h2>
          <p className='text-body-secondary'>Sign in to continue</p>
        </div>
        {/* Page body */}
        <div className="page-body">
          <form onSubmit={handleSubmition} className='mt-3 pt-3 pb-3'>
          <div class="row mb-3">
    <div class="col-sm-10">
      <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
    </div>
  </div>
          <div class="row mb-3">
    <div class="col-sm-10">
      <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    </div>
  </div>
          <div class="row mb-3">
    <div class="col-sm-10">
      <button type="submit" className="btn btn-primary btn-block col-12" onClick={(e) => handleSubmition(e)}>Log In</button>
    </div>
  </div>
              </form>
        </div>
        {/* Page footer */}
        <div className="page-footer">
        <p className='text-muted text-center'>Or</p>
      
      <div className='row justify-content-center mt-3 pt-3 pb-3'>
        <div className='col-6'>
          <button type="submit" className='btn btn-outline-secondary btn-block'>
          <FontAwesomeIcon icon={faGoogle} /> Continue with Google
          </button>
        </div>
        <div className='col'>
          <button type="submit" className='btn btn-block btn-outline-secondary'>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;