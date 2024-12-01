import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams,Link, useNavigate } from 'react-router-dom';
import { deleteMeds } from '../../store/medicineSlice';
import checkAuth from '../auth/CheckAuth';


function DeleteMed() {

    var {Id,name} = useParams()
     Id = Number(Id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = ()=>{

        dispatch(deleteMeds({id:Id})) // if (ID) not passed as object state not get updated
        navigate('/med/list')

    }


  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card mt-5 text-center">
                        <div className="card-header">
                            <h2>Medicine Name:&nbsp;<span className='text-danger'>{name}</span></h2>
                            <div className="card-body">
                                <div className="card-title"><p className='lead font-weight-normal'>Are you sure you want to delete?</p></div>
                                <button className='btn btn-danger btn-sm mr-2' onClick={handleDelete}>Confirm</button>
                                <Link className='btn btn-primary btn-sm' to={'/med/list'}>Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default checkAuth(DeleteMed);