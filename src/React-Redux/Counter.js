import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {

   const count = useSelector(state => state);
   // useSelector  to select state and get updated data from store 

  return (
   <>
    <h2> Count is - {count}  </h2>
   </>
  )
}

export default Counter