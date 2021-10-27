import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default function NewUser() {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    const [newUser, setNewUser] = useState({})

    const createNewUser = (event) => {
        // let newUser = response.data.username;
        // let newPassword = response.data.password;
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/auth/register',
            data: newUser
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
        return setNewUser(previousState => ({ ...previousState, [e.target.name]: e.target.value }), [])
    }

    // const updateUser = (event) => {
    //     const username = event.target.value;
    //     setUsername(username);
    //     console.log(password)
    // };

    // const updatePassword = (event) => {
    //     const password = event.target.value;
    //     setPassword(password);
    //     console.log(password)
    // };

    // const updateEmail = (event) => {
    //     const email = event.target.value;
    //     setEmail(email);
    //     console.log(password)
    // };

    // const submitNewUser = () => {

    // }

    console.log({ newUser })
    return (
        <div className='container'>
            <div className='row'>
                <div className="col text-center">
                    <h2>Create New User</h2>
                    <form>
                        <label>
                            <p>Enter New UserName</p>
                            <input
                                type="text"
                                placeholder="username123"
                                onChange={objectAssistant} />
                        </label>
                        <br></br>
                        <label>
                            <p>Enter New Password</p>
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={objectAssistant} />
                        </label>
                        <br></br>
                        <label>
                            <p> Enter Email Address</p>
                            <input
                                type="email"
                                placeholder="catsteve@gmail.com"
                                onChange={objectAssistant} />
                        </label>
                        <div className='p-3'>
                            <Button variant="secondary" onClick={createNewUser}>Submit New User/Login</Button>{' '}
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}