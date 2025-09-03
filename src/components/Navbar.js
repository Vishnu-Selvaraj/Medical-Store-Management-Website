import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/userSlice";

function Navbar() {
  const user = useSelector((store) => store.user.currentUser);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    if (user) {
      dispatch(logoutUser())
      navigate("/login")
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor:'#32aeb1'}}>
        <NavLink className="navbar-brand" to="/">
          MediCart
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/med/list"}>
                View Medicines List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={"/signup"}
              >
                Signup
              </NavLink>
            </li>
            {user ? (
              <li className="nav-item">
                <NavLink className="nav-link" onClick={handleLogout}>
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to={"/login"}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
