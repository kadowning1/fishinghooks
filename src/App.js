import './App.css';
// import axios from "axios";


// const axios = require('axios');
import React, { useState } from 'react';
// import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'
import NewUser from './Components/NewUser'
import Login from './Components/Login'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    const [token, setToken] = useState();

    if(!token) {
        return <Login setToken={setToken} />
    }
    
  return (
   <div className="text-center">
      <h1>Cat Steve's Tackle Shoppe</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/newuser">
            <NewUser />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// getAPI() {
//  const apiKey = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com"
// // Make a request for a user with a given ID
// axios.get(apiKey)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
// }
