import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
     name : 'cart',
     initialState : [],
     reducers : {
        additem : (state,action) => {
            state.push(action.payload);
        }
     }
})

export const { additem } = cartSlice.actions;

export  default cartSlice.reducer;

// additem is reducer here 