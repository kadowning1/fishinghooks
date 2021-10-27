import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='text-center'>
            <h2>Home</h2>
            <h3>Welcome to Cat Steve's</h3>
            <br></br>
            <Link to="/login" className="btn btn-secondary lg p-3">Enter</Link>
            <br></br>
            <div className='card-body'>
                <div className='row justify-content-center'>
                    <img className='h-25 w-25 p-4' src='./img/Cat Steves.png' alt='logo'></img>
                </div>
            </div>
        </div>
    );
}