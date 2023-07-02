import {  configureStore } from '@reduxjs/toolkit' ;
import cartReducer from '../Reduxjs-Toolkit/CartSlice';

// store is created here 

export const  store  = configureStore({
         reducer : {
            cart : cartReducer,
         }
})
