import React from 'react'
import {useDispatch , useSelector } from 'react-redux';
import { fetchtodo } from './todo';


export const FetchTodoComp = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)

      console.log('state here is -',state);

   if(state.todo.isLoading){
    return  <h1> Loading.... </h1>
   }

  return (
    <>
    <h2>   Main App  </h2>
          <div className="text-center">
              <h1> Building Cart with Reduxjs-Toolkit  </h1>
            </div>
             <div className="todolist">
               <button  onClick = {() =>   dispatch(fetchtodo())}> Fetch Todos </button>
             </div>

              {state.todo.data.map((item) => {
                 return (
                   <li key = {item.id}> {item.title} </li>
                 )
              })}
    </>
  )
}
