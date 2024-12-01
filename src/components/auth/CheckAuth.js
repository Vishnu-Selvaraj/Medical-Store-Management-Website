import { useEffect } from "react";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

const checkAuth = (Component)=>{

    function NewComponent(props){

        const user = useSelector((store)=>store.user.currentUser)
        const navigate = useNavigate()

        useEffect(()=>{
            if(!user){
                navigate('/login')
            }
        },[user])
        
        return <Component {...props}/>
    }
    return NewComponent
}

export default checkAuth;