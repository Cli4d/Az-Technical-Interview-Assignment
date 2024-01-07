import React from 'react';
import './App.css';

//importing components
// import SignUp from './components/Signup';
import SignIn from './components/Signin';

function App() {
  return (
    <div className="App bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;