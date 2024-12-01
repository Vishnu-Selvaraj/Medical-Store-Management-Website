import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import checkAuth from "../auth/CheckAuth";

import './list.css'

function List() {

  const medicine = useSelector((store) => store.meds.medicines); //Data from store
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  // Pagination variables

  const [currentPage,setCurrentPage] = useState(1)
  const data_per_page = 2
  const lastIndex = currentPage * data_per_page
  const firstIndex = lastIndex - data_per_page
  const medData = filteredList.slice(firstIndex,lastIndex)
  const numberOfPages = Math.ceil(filteredList.length / data_per_page)
  const number = [...Array(numberOfPages + 1 ).keys()].slice(1)

  console.log(number)

  // pagination variables Ends here

  // Search functions start Here

  useEffect(() => {
    setFilteredList(medicine);
  }, [medicine]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredList(medicine);
    } else {
      const filtered = medicine.filter((items) => {
        return items.medName.toLowerCase().includes(searchTerm.toLowerCase());
      });

      setFilteredList(filtered);
    }
  };

  const handleReset = () => {
    setFilteredList(medicine);
    setCurrentPage(1)
    setSearchTerm("");
  };

  // Search functions Ends Here

  // Pagination Functions starts

  const handlePrev = ()=>{
      if(currentPage !== 1){

        setCurrentPage(currentPage - 1)
      }
  }

  const handleNext = () =>{

    if(currentPage !== numberOfPages){

      setCurrentPage(currentPage + 1)
    }

  }

  const handlePageChange = (num) =>{
    setCurrentPage(num)
  }

  //Pagination Functions ends

  return (
    <div id="listBody">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5 offset-2 my-3">
            <Link id="addBtn" className="btn btn-primary btn-lg" to={"/med/create"}>
              Add Medicine <b className="h4 font-weight-bold">+</b>
            </Link>
          </div>
          <div className="col-4 my-4" id="searchComponent">
            <div className="form-inline" style={{minWidth:'768px'}}>
              <input
                type="text"
                className="form-control form-control-sm mr-2"
                placeholder="Search Medicine Name"
                value={searchTerm}
                onChange={(evt) => setSearchTerm(evt.target.value)}
              />
              <button
                className="btn btn-outline-success btn-sm"
                onClick={handleSearch}
              >
                Search
              </button>
              <button
                className="btn btn-outline-danger btn-sm mx-2"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 mt-4 mx-auto">
            <div className="card" id="listCardHeader">
              <div
                className="card-header rounded"
                style={{ background:'linear-gradient(to bottom, rgba(36, 174, 177, 0) 5%, rgba(36, 174, 177, .7) 130%), linear-gradient(to bottom, #fff, #fff)' }}
              >
                <h1
                  className="text-center  font-weight-normal"
                  style={{ color: "#2c2c2c" }}
                >
                  Medicines List
                </h1>
              </div>
            </div>

            { medData.length === 0 ? (
              <p className="lead text-center mt-4 font-weight-bold">No Data Found!!</p>

            ) : ( medData.map((meds, index) => {
                return (
                  <div className="card mt-3 text-center text-white" id="listCards" key={meds.id} style={{background:'linear-gradient(to bottom, rgb(255 255 255 / -2%), rgba(255, 255, 255, .4) 78%), linear-gradient(180deg, #5ECDDE, #5ECDDE)'}}>
                    <div className="card-body rounded border border-info">
                      <h3 className="card-title">
                        
                        {meds.medName}
                      </h3>
                      <Link
                        className="btn btn-success mt-2"
                        to={"view/" + meds.id}
                      >
                        View
                      </Link>
                      &nbsp;
                      <Link
                        className="btn btn-warning mt-2"
                        to={"edit/" + meds.id}
                      >
                        Edit
                      </Link>
                      &nbsp;
                      <Link
                        className="btn btn-danger mt-2"
                        to={"delete/" + meds.id + "/" + meds.medName}
                      >
                        Delete
                      </Link>
                      &nbsp;
                    </div>
                  </div>
                );
              })
            )}

                {/* Pagination */}

                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center mt-3">
                    <li className="page-item">
                      <Link className="page-link" onClick={handlePrev}>Prev</Link>
                    </li>

                    { number.map((num,index)=>(
                      <li className={`page-item ${currentPage === num ? 'active':''}`} key={index}>
                        <Link className="page-link" onClick={()=>handlePageChange(num)}>{num}</Link>
                      </li>
                    ))
                    }

                    <li className="page-item">
                      <Link className="page-link" onClick={handleNext}>Next</Link>
                    </li>
                  </ul>
                </nav>


          </div>
        </div>
      </div>
    </div>
  );
}

export default checkAuth(List);
