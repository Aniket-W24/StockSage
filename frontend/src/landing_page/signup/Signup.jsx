import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import BottomText from "./BottomText";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        navigate("/support");
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container" style={{ margin: "5rem 15rem" }}>
      <div className="row">
        <div className="col-6">
          <img src="/media/images/landingSignup.png" />
        </div>
        <div className="col-6 p-5">
          <h2 className="fw-medium">Signup Now</h2>
          <p className="text-muted">Or track your existing application</p>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                id="outlined-basic"
                label="email"
                variant="outlined"
                onChange={handleOnChange}
                value={email}
                name="email"
                type="email"
                style={{ margin: "1rem 0rem", padding: "0.5rem 0rem" }}
              />
            </div>
            <div>
            
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={handleOnChange}
                value={username}
                name="username"
                type="text"
              />
            </div>
            <div>
             
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={handleOnChange}
                value={password}
                name="password"
                type="password"
                style={{ margin: "1rem 0rem", padding: "0.5rem 0rem" }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "10rem",
                borderRadius: "0.5rem",
                border: "none",
                padding: "0.5rem",
                backgroundColor: "#387ed1",
                color: "white",
                marginBottom: "1rem"
              }}
            >
              Submit
            </button>
            <br></br>
            <span className="mt-5">
              Already have an account? <Link to={"/login"} style={{textDecoration: "none"}}>Login</Link>
            </span>
          </form>

          <ToastContainer />
        </div>
      </div>
      <BottomText />
    </div>
  );
};

export default Signup;
