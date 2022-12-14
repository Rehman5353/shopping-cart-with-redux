
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { remove } from '../store/buySlice';

export const AlertBox = ({ setLgShow , modalOpen }) => {
    const  productItem   = useSelector(state => state.buys);

    const  dispatch   = useDispatch();
    
    const handleRemove = (id) => {
    
        dispatch(remove(id));
    }
  return (
    <>

      <Modal
        size="lg"
        show={modalOpen}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header >
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

           {productItem.length === 0  ?  "" :  <Table striped bordered hover size="sm">
     <thead>
       <tr>
         <th>#</th>
         <th>First Name</th>
         <th>Price</th>
         <th>Title</th>
       </tr>
     </thead>
     <tbody>
     {productItem.map( item => {
               return(
            <tr>
         <td>{item.id}</td>
         <td>{item.title}</td>
         <td>{item.price}</td>
         <td onClick={() => handleRemove(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi m-2 bi-trash" viewBox="0 0 16 16">
           <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
           <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
           </svg></td>
            </tr> 
               )
                    
             })}

    
     </tbody>
   </Table>}

        <div  onClick={() => {setLgShow(false)}} className='btn btn-primary'> Cancel</div>
        </Modal.Body>
      </Modal>
    </>
  )
}
