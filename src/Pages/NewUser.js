import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function NewUser(props) {

    const [newUser, setNewUser] = useState({})
    const history = useHistory()
    const createNewUser = (event) => {

        event.preventDefault();
        const data = {
            email: newUser.email,
            name: newUser.username,
            password: newUser.password,
        }
        // console.log(data)
        axios({
            method: 'post',
            url: 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/register',
            data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Headers': 'Content-Type',
                // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                // 'Access-Control-Allow-Credentials': true,
                // 'Authorization': 'Bearer ' + token
            },
        }
        )
            // Make a request for a user with a given ID

            .then(function (response) {
                // handle success
                props.saveToken(response.data.data.token)
                history.push('/login')
                // console.log(response.data.data.token)
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

    return (
        <div className='container'>
            <div className='row'>
                <div className="col text-center">
                    <h2>Create New User</h2>
                    <form>
                        <label className='p-3'>
                            <h5>Enter New UserName</h5>
                            <input
                                type="username"
                                name='username'
                                placeholder="Enter Username"
                                onChange={objectAssistant}
                                value={newUser.username}
                                className='' />
                        </label>
                        <br></br>
                        <label className='p-3'>
                            <h5>Enter New Password</h5>
                            <input
                                type="password"
                                name='password'
                                placeholder="Password"
                                onChange={objectAssistant}
                                value={newUser.password} />
                        </label>
                        <br></br>
                        <label className='p-3'>
                            <h5> Enter Email Address</h5>
                            <input
                                type="email"
                                name='email'
                                placeholder="catsteve@gmail.com"
                                onChange={objectAssistant}
                                value={newUser.email} />
                        </label>
                        <div className='p-3'>
                            <Button
                                variant="secondary"
                                onClick={createNewUser}>Submit New User</Button>{' '}
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}