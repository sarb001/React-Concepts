import React from 'react'
import { useDispatch } from 'react-redux';
import { additem } from './CartSlice';

const Products = (props) => {

     const dispatch = useDispatch();

  return (
    <>
        <div className="card" style = {{width:'18rem' ,margin:'20px'}} >
            <img src = {props.image}  alt = {props.productName} />
            <div className="card-body">
                 <h5 class = "card-title">  {props.productName} </h5>
                 <p className='card-text'> Rs. - {props.price} </p>

                    {/*  action is dispatched here */}

                 <button onClick={() => dispatch(additem({
                    price : props.price , 
                    name : props.productName }))}> Add to Cart  </button>
            </div>
        </div>
    </>
  )
}

export default Products