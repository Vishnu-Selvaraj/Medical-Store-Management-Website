import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:'user',
    initialState:{
        users:[],
        currentUser:null
    },

    reducers:{

        signupUser:(state,action)=>{
            console.log(action.payload)
            state.users.push(action.payload)
        },

        loginUser:(state,action)=>{
            console.log(action.payload)
            state.currentUser = action.payload
            window.localStorage.setItem('user',JSON.stringify(action.payload))
        },

        logoutUser:(state,action)=>{
            state.currentUser = null
            window.localStorage.removeItem('user')
        },

        setAutoLogin:(state,action)=>{

            const user = window.localStorage.getItem('user')
            state.currentUser = user
            
        }
    }
});


export const {signupUser,loginUser,logoutUser,setAutoLogin} = userSlice.actions

export default userSlice.reducer