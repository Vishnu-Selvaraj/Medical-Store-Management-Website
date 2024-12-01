import React from "react";
import Navbar from "./components/Navbar";
import img from "./images/img4.jpg";
import { useNavigate } from "react-router-dom";

import "./App.css";

function App() {

  const navigate = useNavigate()

  const handleRedirect = ()=>{
    navigate('/login')
  }

  return (
    <div className="App" id="HomeBody">
      <Navbar />
      <div className="container-fluid">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            id="sideImg"
            className="col-sm-6 col-md-6"
            style={{
              background: `rgba(0,0,0,0.7) url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflowX:'hidden',
              height: "90vh",
            }}
          ></div>
          <div className="col-sm-6">
            <div
              className="text-center"
              style={{ position: "absolute", top: "50%", right: "10%" }}
            >
              <h1 className="text-info" id="sideContents">Welcome to Medscart</h1>
              <button id="sideBtn" onClick={handleRedirect} className="btn btn-success">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
