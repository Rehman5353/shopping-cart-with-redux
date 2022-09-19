import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';

export const Navbars = () => {


const  items = useSelector((state)=> state.cart); 
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand >Redux</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className='m-4 nav-item'  to="/"> Home </Link>
            <Link className='m-4 nav-item' to="/cart"> Cart </Link>
          </Nav>
       
        </Navbar.Collapse>
        <Navbar.Brand >Cart Item : {items.length}</Navbar.Brand>
      </Container>
    </Navbar>
    </>
  )
}
