import React,{useState} from 'react'
import Navbar from '../Navbar';
import { useDispatch,useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/userSlice';
import './Login.css'

function Login() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errorMessage,setErrorMessage] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((store)=>store.user.users)
    const authenticate = user.find((auth)=>auth.email === email.trim() && auth.password === password.trim())


    const handleLogin = (evt)=>{
        evt.preventDefault()

        if(email === '' || password === ''){

            setErrorMessage('Please fill both fields')

        }else if(!authenticate){

            setErrorMessage('Invalid credentials')

        }else{

            let logUser = {email:email}
            dispatch(loginUser(logUser))
            navigate('/med/list')
            
        }

    }

  return (
    <div id='loginBody'>
        <Navbar/>
        <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col my-5 "style={{maxWidth:"700px"}}>
            <div className="card" id='loginCard'>
              <div
                className="card-header"
              >
                <div className="card-body rounded">
                  <form onSubmit={handleLogin}>
                    <h1 className="text-center">
                      Login Form
                    </h1>
                    {errorMessage ? (
                      <div className="alert alert-danger mt-4">
                        {errorMessage}
                      </div>
                    ) : (
                      ""
                    )}
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
                        placeholder="Enter Password"
                        value={password}
                        onInput={(evt)=>setPassword(evt.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block font-weight-bold ">
                      Login
                    </button>
                  </form>
                </div>
              </div>
              <div className='card-footer text-center'>
                  <p className='text-white font-weight-bold'>Don't have an account? &nbsp; <Link className='card-link' to={'/signup'} style={{textShadow:'1px 1px 2px #111'}}>SignUp</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;