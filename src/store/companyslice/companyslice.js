import { createSlice } from "@reduxjs/toolkit";

const serverquery = async ()=>{
    let companies;

    try {
        const response = await fetch("/companies_list",{
        method:"GET",
        mode:"cors",
        headers:{
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
        }
        })

        const data = await response.json()
        companies = Object.values(data)
    } catch (error) {
        console.log(error)  
    }

    return companies
}

const initialState = {
    values: await serverquery()
}

const companyslice = createSlice({
    name: "Companies",
    initialState,
    reducers:{}
})

export default companyslice.reducer;