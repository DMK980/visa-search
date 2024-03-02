import { createSlice } from "@reduxjs/toolkit";

export const inputslice = createSlice({
    name: "input",
    initialState: {
        value:"Company name here"
    },
    reducers:{
        inputchange :(state,action)=>{
            state.value = action.payload
        }
    }

})

export const {inputchange} = inputslice.actions;
export default inputslice.reducer