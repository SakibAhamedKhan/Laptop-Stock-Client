import React from 'react';
import './Headers.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo/Laptop Stock logo.png'

const Headers = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" className='headers-navbar' variant="light">
			<Container>
			<Navbar.Brand href="#home"><img height={50} src={logo} alt="" /></Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className='ms-auto'>
				<Nav.Link href="#deets" className='fw-bold fs-6 mx-3 px-0'>Home</Nav.Link>
				<Nav.Link href="#memes" className='fw-bold fs-6 mx-3 px-0'>Blogs</Nav.Link>

				<button className='btn btn-login mx-3 py-1 px-3'>Log in</button>
				<button className='btn btn-signup mx-3 py-1 px-3'>Sign up</button>
				</Nav>
			</Navbar.Collapse>
			</Container>
			</Navbar>
		</div>
	);
};

export default Headers;