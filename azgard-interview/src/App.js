import React from 'react';
import './App.css';

//importing components
// import SignUp from './components/Signup';
import SignIn from './components/Signin';
import Illustration from './components/Illustration';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Illustration />
          </div>
          <div className="col mt-5">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;