import React,{useState} from 'react'
import Navbar from '../Navbar';
import { Link,useNavigate,useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { updateMeds } from '../../store/medicineSlice';
import checkAuth from '../auth/CheckAuth';

function EditMed() {

    const medData = useSelector((store)=>store.meds.medicines)
    const {Id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const filterMed = medData.filter((items)=>items.id === Number(Id)) // The Id corresponding array get here.

    console.log(filterMed[0]) // filter get 1 array of object so array of index 0 

    const {medName,stock} = filterMed[0]

    const [name,setName] = useState(medName)
    const [stocks,setStocks] = useState(stock)
    const time = new Date().toLocaleTimeString()

    const [errorMessage,setErrorMessage] = useState('')


    const handleEdit = ()=>{

        if(name.trim() && stock){

            let updatedData = {
                id:Number(Id),
                newName:name,
                newStock:stocks,
                updatedTime:time
            }

            dispatch(updateMeds(updatedData))
            navigate('/med/list/view/'+Id)   
        }
        setErrorMessage('Please fill both fields')
    }

  return (
    <div id='editbody'>
        <Navbar/>

        <div className="container">
            <div className="row">
                <div className="col mx-auto mt-5" style={{maxWidth:"700px"}}>
                    <div className="card" id='EditCard'>
                        <div className="card-header" style={{backgroundColor:'#aeb6bf ' }}>
                        <h6 className='text-center font-weight-normal text-white  display-4'>Edit Medicine</h6>
                        </div>
                        <div className="card-body" style={{backgroundColor:'#d6dbdf'}}>
                     {errorMessage ? <div className='alert alert-danger'>{errorMessage}</div>:""}
                    
                    <label>Name</label>
                    <input type="text" className='form-control' placeholder='Enter medicine name' value={name} onChange={(evt)=>setName(evt.target.value)} />
                    <label className='mt-3'>Stocks</label>
                    <input type="number" className='form-control mb-2' placeholder='Enter available stocks' value={stocks} onChange={(evt)=>setStocks(evt.target.value)} />
                    <button className='btn btn-primary mt-3 mr-3' onClick={handleEdit} >Confirm</button>
                    <Link className='btn btn-danger mt-3' to={'/med/list'} >Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default checkAuth(EditMed);