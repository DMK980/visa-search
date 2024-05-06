import { createSlice } from "@reduxjs/toolkit";

const serverquery = async ()=>{
    let companies;

    try {
        const response = await fetch("/companies_list",{method:"GET"})
        console.log(typeof(response))
        const data = await response.json()
        console.log(typeof(data))
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