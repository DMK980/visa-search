import {configureStore} from "@reduxjs/toolkit";
import inputReducer from "./inputslice/inputslice"

export default configureStore({
    reducer:{
        input:inputReducer
    }
})


