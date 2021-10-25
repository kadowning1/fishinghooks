import './App.css';
// import axios from "axios";


// const axios = require('axios');

import React from 'react';
import './App.css';
import Dashboard from '../Components/Dashboard';
import LogIn from '../Components/LogIn';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
   <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <LogIn />
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
