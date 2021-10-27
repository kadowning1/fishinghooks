import React from 'react'
import { } from 'react-router-dom'
import axios from 'axios'
import {Navbar, Container, Nav, Button} from 'react-bootstrap';

export default function NewNavBar() {

    const logOut = () => {

        axios({
            method: 'get',
            url: 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/auth/logout',
            success: false
        })
            .then(function (response) {
                console.log(response)

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <nav className="navbar">
            <div className="container-fluid justify-content-center">
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Navbar.Brand href="https://port-3000-react-container-2-kadowning110103.codeanyapp.com/">Cat Steve's</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="https://port-3000-react-container-2-kadowning110103.codeanyapp.com/">Home</Nav.Link>
                                <Nav.Link href="https://port-3000-react-container-2-kadowning110103.codeanyapp.com/newuser">New User</Nav.Link>
                                <Button variant="success" onClick={logOut}>Logout</Button>{' '}
                            </Nav>
                        </Container>
                    </Navbar>
            </div>
        </nav>
    )
}