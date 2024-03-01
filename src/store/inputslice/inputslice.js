import { createSlice } from "@reduxjs/toolkit";

export const inputslice = createSlice({
    name: "input",
    initialState: {
        input:"Company name here"
    },
    reducers:{
        inputchange :(state,action)=>{

            state.input = action.payload

        }
    }

})

export const {inputchange} = inputslice.actions;
export default inputslice.reducer