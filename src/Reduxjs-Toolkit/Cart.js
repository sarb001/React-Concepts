import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
     const itemprice  = useSelector((state) => state);
     console.log('itemprice is -',itemprice);

  return (
    <>
      <div className="text-center">
         <h3> Total Items : {itemprice.cart.length}  </h3>
      </div>
    </>
  )
}

export default Cart