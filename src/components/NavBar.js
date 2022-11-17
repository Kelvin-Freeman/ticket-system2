import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../src/ticketlogo.png'
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import * as userService from '../utilities/users-service'

const NavBar = ({user, setUser}) => {
    const handleLogOut = () => {
        userService.logOut()
        setUser(null)
    }

    const navigate = useNavigate();
    const redirectToLogin = () => {
        navigate('/')
    }
    return(
    <nav>
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
        <Navbar.Brand>
                    <img src={logo} alt="logo" width="50px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                        {/* <Link to="/dashboard">Dashboard</Link>
                        <Link to="/tickets">Tickets</Link>
                        <Link to="">Logout</Link> */}
                        {/* <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                        <LinkContainer to="/tickets"><Nav.Link>Tickets</Nav.Link></LinkContainer>
                        <Nav.Link onClick={redirectToLogin}>Logout</Nav.Link> */}
            
        <LinkContainer to='/dashboard'><Nav.Link>Dashboard</Nav.Link></LinkContainer> 
        <LinkContainer to='/tickets'><Nav.Link>Tickets</Nav.Link></LinkContainer>
        {/* <Nav.Link onClick={redirectToLogin}>Logout</Nav.Link> */}
        
       
                    <Nav.Link>
                    {user ? <span>  Welcome, {user.name}</span> : ''}
                    </Nav.Link>

                    {user ? <Link to='' onClick={handleLogOut}>&nbsp;&nbsp;Log Out</Link> : ''}
                       
                 </Nav>
            </Navbar.Collapse>
        </Navbar>
    </nav>
    )
}

export default NavBar