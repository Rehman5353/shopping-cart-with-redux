import React from 'react'
import { Products } from '../components/Products'
import Container from 'react-bootstrap/Container';
export const Home = () => {
  return (
    <>
    <Container>
    <h5 className='m-3'>Welcome to my Redux Toolkit Store</h5>
    <section className='m-3'>
    <Products></Products>
    </section>
    
    </Container>
    </>
  )
}
