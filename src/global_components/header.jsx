import React from 'react';
import {Navbar, Nav, Image} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

//import css
import './css/header.css';
//logo
import Logo from '../pages/images/ccaclogo.jpg';

export const renderNavBar = (props) =>{
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" className="no-padding">
                <Image src={Logo} roundedCircle className="change-width"/>
            </Navbar.Brand>
        
            <Nav>
                <h1 className="center">{props}</h1>
            </Nav>
            
        </Navbar>
    );
}
