import { configureStore } from "@reduxjs/toolkit";
import medicineReducer from './medicineSlice'
import userReducer from './userSlice'


const store = configureStore({

    reducer:{
        meds:medicineReducer,
        user:userReducer
    }
});

export default store;
