import React,{useState} from 'react'
import Navbar from '../Navbar';
import { addMeds } from '../../store/medicineSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import checkAuth from '../auth/CheckAuth';
import './list.css'


function CreateMed() {

    const [name,setName] = useState('')
    const [stock,setstock] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const time = new Date().toLocaleTimeString()

    const meds = useSelector((store)=> store.meds.medicines);
    

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleCreate = ()=>{
        if(name.trim() && stock.trim()){
            let newMeds = {
                id:meds.length + 1,
                medName:name,
                stock:stock,
                added_time:time
            }
                dispatch(addMeds(newMeds))
                navigate('/med/list')  
            
        }

        setErrorMessage('Please fill both fields')
    }

//#DFDCE3

  return (
    <div id='CreateBody'>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col mx-auto mt-5" style={{maxWidth:"700px"}}>
                    <div className="card" id='CreateCard'>
                        <div className="card-header" style={{backgroundColor:'#8cbcd0' }}>  
                        <h6 className='text-center font-weight-normal text-white  display-4'>Add Medicines</h6>
                        </div>
                        <div className="card-body" style={{backgroundColor:'#8cbcd0'}}>
                    {errorMessage ? <div className='alert alert-danger'>{errorMessage}</div>:""}
                    <label>Name</label>
                    <input type="text" className='form-control' placeholder='Enter medicine name' value={name} onInput={(evt)=> setName(evt.target.value)} />
                    <label className='mt-3'>Stocks</label>
                    <input type="number" className='form-control mb-2' placeholder='Enter available stocks' value={stock} onInput={(evt)=> setstock(evt.target.value)} />
                    <button className='btn btn-primary mt-3 btn-block' onClick={handleCreate}>Add to List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default checkAuth(CreateMed);