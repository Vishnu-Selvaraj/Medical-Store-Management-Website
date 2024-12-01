import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setAutoLogin } from '../../store/userSlice';

function CheckAutologin(props) {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setAutoLogin())
    },[])


  return props.children
 
}

export default CheckAutologin;