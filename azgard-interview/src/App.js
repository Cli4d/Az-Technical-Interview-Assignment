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
          {/* <div className="col-12 col-md-6 d-none d-md-inline">
            <Illustration />
          </div> */}
          <div className="col-12">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;