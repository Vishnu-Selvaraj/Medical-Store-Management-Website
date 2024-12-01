import React, { useState } from "react";
import Navbar from "../Navbar";
import { useDispatch,useSelector } from "react-redux";
import { signupUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import './signup.css'


function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store)=>store.user.users)
  const exisitingUser = user.find((items)=>items.email === email.trim() && items.password === password.trim())


const handleSignup = (evt)=>{
    evt.preventDefault()
    if(name === ""||email === ""||password === ""||passwordConf === ""){

        setErrorMessage('Please fill all fields')

    }else if (password != passwordConf){

        setErrorMessage('Passwords do not Match')

    }else if(exisitingUser){

        setErrorMessage('Email ID already exists')
    }else{

        let userData = {
            id: user.length + 1,
            name:name,
            email:email,
            password:password,
            confirm_password:password
        }

        dispatch(signupUser(userData))
        navigate('/login')

    }
}

  return (
    <div id="SignupBody">
      <Navbar />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col my-5 " style={{maxWidth:"700px"}}>
            <div className="card" id="signupCard">
              <div className="card-header">
                <div className="card-body rounded">
                  <form onSubmit={handleSignup}>
                    <h1 className="text-center"> {/*style={{ color: "#3d3d3f" }}*/}
                      Signup Form
                    </h1>
                    {errorMessage ? <div className="alert alert-danger mt-4">{errorMessage}</div>:''}
                    <div className="form-group mt-4">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter FullName"
                        value={name}
                        onInput={(evt)=>setName(evt.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onInput={(evt)=>setEmail(evt.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onInput={(evt)=>setPassword(evt.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={passwordConf}
                        onInput={(evt)=>setPasswordConf(evt.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn font-weight-bold btn-primary p-2 btn-block"
                    >
                      Signup
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
