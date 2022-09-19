import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';


export const Cart = () => {

  const dispatch = useDispatch();

  const  productItem   = useSelector(state => state.cart);

  const handleRemove = (id) => {
    dispatch(remove(id));
  }
  return (
    <>
     <Container>  
             
              <div className='cartWrapper'>
   {   
              productItem.map(product =>  (
              
                <Card className='cards' style={{ width: '18rem' }}>
                <Image variant="top" className='card-img' src={product.image} />
                <Card.Body>
                  <Card.Title>{product.price}</Card.Title>
                  <Card.Text>
                  {product.title}
                  </Card.Text>
                  <Button onClick={()=> handleRemove(product.id)} variant="danger">Remove</Button>
                </Card.Body>
              </Card>
              
                ))

   }
              </div>
              </Container>
 
      </>
  )
}
