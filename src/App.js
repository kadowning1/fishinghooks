import './App.css';
import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard'
import NewUser from './Pages/NewUser'
import Login from './Pages/Login'
import NewNavBar from './Components/NewNavBar'
// import ReactForm from './Components/ReactForm'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
// import { Navbar } from 'react-bootstrap';

function App() {
    const [token, setToken] = useState('');

    useEffect(() => {
        let lsToken = window.localStorage.getItem('token')
        if (lsToken) {
            setToken(lsToken)
        }
    }, [])

    // if (!token) {
    //     return <Redirect to="/home" />
    // }

    const saveToken = userToken => {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    };

    const removeToken = () => {
        localStorage.removeItem("token")
        setToken('')
    };



    return (
        <div className="text-center">
            <h1>Cat Steve's Tackle Shoppe</h1>
            <BrowserRouter>
                <NewNavBar
                    removeToken={removeToken}
                    token={token} />
                <Switch>
                    <Route path="/dashboard">
                        {token.length === 0 ? <Redirect to='/login' /> : <Dashboard token={token} />}
                    </Route>
                    <Route path="/newuser">
                        <NewUser saveToken={saveToken} />
                    </Route>
                    <Route path="/login">
                        {token.length > 0 ? <Redirect to='/dashboard' /> : <Login saveToken={saveToken} />}
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                {/* <ReactForm />    */}
            </BrowserRouter>
        </div>
    );
}

export default App;