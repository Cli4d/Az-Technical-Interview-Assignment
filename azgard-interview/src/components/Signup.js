import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmition = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
          await createUserWithEmailAndPassword(auth, email, password);
          showAlert("Successfully signed up!");
      } catch {
        showAlert("Sorry, something went wrong. Please try again.");
      }     
    } else {
      showAlert("Passwords don't match. Please try again.");
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
      <h1>Welcome</h1>
      <p>Sign up to continue</p>
      <form onSubmit={handleSubmition}>

        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

        <button type="submit">Sign Up</button>


      </form>
    </div>

    // <div className = "container">
    //         <div className = "row justify-content-center">
    //             <form className = "col-md-4 mt-3 pt-3 pb-3">
    //                 { "" !== notice &&
    //                     <div className = "alert alert-warning" role = "alert">
    //                         { notice }    
    //                     </div>
    //                 }
    //                 <div className = "form-floating mb-3">
    //                     <input id = "signupEmail" type = "email" className = "form-control" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
    //                     <label htmlFor = "signupEmail" className = "form-label">Enter an email address for your username</label>
    //                 </div>
    //                 <div className = "form-floating mb-3">
    //                     <input id = "signupPassword" type = "password" className = "form-control" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
    //                     <label htmlFor = "signupPassword" className = "form-label">Password</label>
    //                 </div>
    //                 <div className = "form-floating mb-3">
    //                     <input id = "confirmPassword" type = "password" className = "form-control" placeholder = "Confirm Password" value = { confirmPassword } onChange = { (e) => setConfirmPassword(e.target.value) }></input>
    //                     <label htmlFor = "confirmPassword" className = "form-label">Confirm Password</label>
    //                 </div>                    
    //                 <div className = "d-grid">
    //                     <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => handleSubmition(e)}>Signup</button>
    //                 </div>
    //                 <div className = "mt-3 text-center">
    //                     <span>Go back to login?</span>
    //                 </div>                    
    //             </form>
    //         </div>
    //     </div>
    // <form onSubmit={handleSubmition}>
    //   <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
    //   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    //   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    //   <button type="submit">Sign Up</button>
    // </form>
  );
}

export default SignUpForm;