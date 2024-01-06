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
  );
}

export default SignUpForm;