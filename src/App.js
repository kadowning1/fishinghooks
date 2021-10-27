import './App.css';
// import axios from "axios";


// const axios = require('axios');
import React, { useState, useEffect } from 'react';
// import React from 'react';
import './App.css';
// import Dashboard from './Pages/Dashboard'
import NewUser from './Pages/NewUser'
import Login from './Pages/Login'
import NewNavBar from './Components/NewNavBar'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
// import { Navbar } from 'react-bootstrap';


function App() {
    const [token, setToken] = useState('');

    useEffect(() => {
        
        return () => {
            
        }
    }, [])

    useEffect(() => {
        
        return () => {
            
        }
    }, [])

    // if(!token) {
    //     return <Login setToken={setToken} />
    // }

    return (
        <div className="text-center">
            <h1>Cat Steve's Tackle Shoppe</h1>
            <BrowserRouter>
            <NewNavBar />     
                <Switch>
                    <Route path="/newuser">
                        <NewUser />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path={["/", "/dashboard"]}>
                        <Home />
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
