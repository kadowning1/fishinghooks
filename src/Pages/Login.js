import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link, BrowserRouter} from 'react-router-dom'

export default function Login() {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [login, setLogin] = useState({})

    const getLogin = (event) => {
        // console.log(password)
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/login',
            data: {
                username: login.username,
                password: login.password,
                // email: "jhall1@gmail.com",
                // password: "changeme",
                clientID: "94ba363d-e0ab-4649-86ce-4a4392cc00ad",
                clientSecret: "mYebcUwE5S4FNff4pjK39vx3FtxCmZXz2Hy7XJHZ",
                scope: "",
                grantType: "password",
            },

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                //  'Access-Control-Allow-Headers': 'Content-Type',  
                // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',   
                // 'Access-Control-Allow-Credentials': true,  
                // 'Authorization': 'Bearer ' + token
            },
        }
        )
            // Make a request for a user with a given ID

            .then(function (response) {
                // handle success
                console.log(response.data.data.token)
                // console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    const objectAssistant = e => {
        return setLogin(previousState => ({ ...previousState, [e.target.name]: e.target.value }), [])
    }

    // const onsetUsername = (event) => {
    //     const username = event.target.value;
    //     setUsername(username);
    // };

    // const onsetPassword = (event) => {
    //     const password = event.target.value;
    //     setPassword(password);
    //     console.log(password)
    // };
 console.log({login})
    return (
        <div className='container'>
            <div className='row'>
                <div className="col text-center">
                    <br></br>
                    {/* <h2>Cat Steve's Tackle Shoppe</h2> */}
                    <h3>Log In To Continue</h3>
                    <br></br>
                    <div className='card-body p-0'>
                        <div className='row justify-content-center'>
                            <img className='h-25 w-25' src='./img/Cat Steves.png' alt='logo'></img>
                        </div>
                    </div>
                    <form>
                        <label>
                            <p className='p-2'>Username</p>
                            <input
                                type="text"
                                value={login.username}
                                onChange={objectAssistant}
                            />
                        </label>
                        <label>
                            <p className='p-2'>Password</p>
                            <input
                                type="password"
                                value={login.password}
                                onChange={objectAssistant}
                            />
                        </label>
                        <br></br>
                        <div className='p-3'>
                            <Button variant="secondary" size='lg' onClick={getLogin}>Login</Button>{' '}
                        </div>
                        <div className='p-3'>
                            {/* <Button variant="secondary">Forgot Password?</Button>{' '} */}
                            <BrowserRouter>
                             <Link to="/newuser" className="btn btn-secondary">New User</Link>
                             </BrowserRouter>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}
