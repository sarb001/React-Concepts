import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchtodo = createAsyncThunk('fetchtodos' , async() => {
     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
     return  response.json();
})


const  todoslice = createSlice({
      name : 'todo',
      initialState : {
         isLoading : false,
         data : [],
         isError : false,
      },
      extraReducers : (builder) => {
          builder.addCase(fetchtodo.pending , (state,action) => {
            state.isLoading = true;
          });
          builder.addCase(fetchtodo.fulfilled , (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
          });
          builder.addCase(fetchtodo.rejected , (state,action) => {
            console.log('error is ',action.payload);
            state.isError = true;
          });
      }
})

export default todoslice.reducer