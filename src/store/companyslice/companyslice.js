import { createSlice } from "@reduxjs/toolkit";

const serverquery = async ()=>{
    let companies;

    try {
        const response = await fetch("/companies_list")
        const data = response
        companies = Object.values(data)
        console.log(companies)
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