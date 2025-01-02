import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import BottomText from "./BottomText";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://stocksage-backend.vercel.app/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        window.location.href = 'https://stocksage-dashboard.vercel.app';
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        console.log("inner error");
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container" style={{ margin: "5rem 15rem" }}>
    <div className="row">
      <div className="col-6">
        <img src="/media/images/landingSignup.png" />
      </div>
      <div className="col-6 p-5">
        <h2 className="fw-medium">Login</h2>
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
            New User ? <Link to={"/signup"} style={{textDecoration: "none"}}>Signup</Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
    <BottomText />
  </div>
  );
};

export default Login;