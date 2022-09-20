import React from 'react'
import { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {add } from '../store/cartSlice';
export const Products = () => {

     const dispatch = useDispatch();
    const [ShoppingProducts, setProduct] = useState([])

    useEffect(() => {

     const  fetchProduct = async () => {
     const res = await fetch('https://fakestoreapi.com/products');
     
     const data = await res.json(); 
       console.log(data);
        setProduct(data)
      
      }

      fetchProduct();
    }, [])
    
  const  handleAdd = (productItem) => {
   dispatch(add(productItem));
  console.log(productItem);
}
  return (
    <div className='prodocts-wrap ' style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
           {
              ShoppingProducts.map( productitem => (
                <div className='card'
                 style={{ width: "20rem",height: "20rem", marginTop:"12px",marginBottom:"12px", textAlign:"center"}}
                  key={productitem.id}>
                    <div className='img-container border-2 m-1'>
                     <img style={{width: "22%", marginLeft:"auto", marginTop:"12px", marginRight:"auto",  }} 
                    src={productitem.image}  alt="" />
                   </div>
                   <div className='m-2'>
                     <h1>{productitem.price}</h1>
                     <p className='text'>{productitem.description}</p>
                   </div>
                   <Button onClick={()=> handleAdd( productitem)}  className='ml-5 mr-5 w-50 mx-auto mt-2 btn'> Add To Cart </Button> 
                </div>
            ))
           }

    </div>
  )
}
