import {configureStore} from "@reduxjs/toolkit";
import inputReducer from "./inputslice/inputslice"
import companyReducer from "./companyslice/companyslice";

export default configureStore({
    reducer:{
        input:inputReducer,
        Companies:companyReducer
    }
})


