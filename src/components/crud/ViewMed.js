import React from 'react'
import Navbar from '../Navbar';
import { useSelector } from 'react-redux';
import { Link,useParams } from 'react-router-dom';
import checkAuth from '../auth/CheckAuth';

function ViewMed() {

    const med = useSelector((store)=>store.meds.medicines);
    const {Id} = useParams()
    const filterMed = med.filter((items)=> items.id === Number(Id))
    console.log(filterMed)

  return (
    <div>
        <Navbar/>
        <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-bordered table-hover mt-5 ">
              <thead className='text-center table-primary text-secondary'>
                <tr>
                  <th scope="col">Medicine Name</th>
                  <th scope="col">Available Stocks</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                    {filterMed.map((meds,index)=>{

                        return(
                            <tr key={index}>
                                <td>{meds.medName}</td>
                                <td>{meds.stock}</td>
                                <td>{meds.added_time}</td>
                            </tr>
                        )
                    })

                    }
              </tbody>
            </table>
            <Link to={'/med/list'}>Back to List</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default checkAuth(ViewMed);