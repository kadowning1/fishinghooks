import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

export default function Login() {
    // const {username, setUsername} = setState();
    // const {password, setPassword} = setState();

    return (
        <div className='container'>
            <div className='row'>
                <div className="col text-center">
                    <h2>Cat Steve's Tackle Shoppe</h2>
                    <h3>Log In To Continue</h3>
                    <form>
                        <label>
                            <p>Username</p>
                            <input type="text" />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" />
                        </label>
                        <br></br>
                        <div className='p-3'>
                            <Button variant="secondary">Login</Button>{' '}
                        </div>
                        <div className='p-3'>
                            <Button variant="secondary">New User</Button>{' '}
                            <Button variant="secondary">Forgot Password</Button>{' '}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}