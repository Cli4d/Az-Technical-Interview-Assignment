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
    </div>

//     <div className = "container">
//     <div className = "row justify-content-center">
//         <form className = "col-md-4 mt-3 pt-3 pb-3">
//             { "" !== notice &&
//                 <div className = "alert alert-warning" role = "alert">
//                     { notice }    
//                 </div>
//             }                  
//             <div className = "form-floating mb-3">
//                 <input type = "email" className = "form-control" id = "exampleInputEmail1" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
//                 <label htmlFor = "exampleInputEmail1" className = "form-label">Email address</label>
//             </div>
//             <div className = "form-floating mb-3">
//                 <input type = "password" className = "form-control" id = "exampleInputPassword1" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
//                 <label htmlFor = "exampleInputPassword1" className = "form-label">Password</label>
//             </div>
//             <div className = "d-grid">
//                 <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => handleSubmition(e)}>Submit</button>
//             </div>
//             <div className = "mt-3 text-center">
//                 <span>Need to sign up for an account? </span>
//             </div>
//         </form>
//     </div>
// </div>
  );
}

export default SignIn;