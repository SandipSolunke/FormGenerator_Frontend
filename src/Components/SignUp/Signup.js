import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import handleSingup from "../Auth/HandleSignup.js";


const Signup = () => {

  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (email === '' || password === '' || confirmPassword === '' || email === null || password === null || confirmPassword === null) {
      alert("All detals are mandatory !")
    }

    else {
      const userInput = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };

      const accessFlag = await handleSingup(userInput);

      if (accessFlag === true) {
        alert("User Registered Succesfully")
      }
      else {
        alert("Failed, try again")
      }
    }
  };

  return (
    <div>
      <div className="formBuilder formSupport">
        <h1>Get started with your Form Generator journey!</h1>
      </div>

      <div className="container">
        <h1>Sign Up</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="item">
            <label htmlFor="email">Email&nbsp;&nbsp;&nbsp;</label>
            <input
              className="item1"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
            ></input>
          </div>

          <div className="item">
            <label htmlFor="password">Password&nbsp;&nbsp;&nbsp;</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
            ></input>
          </div>

          <div className="item">
            <label htmlFor="confirmPassword">
              Confirm Password&nbsp;&nbsp;
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              autoComplete="off"
            ></input>
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        <div className="item">
          <span>
            Already have an account?<button onClick={() => { navigate('/') }}> Log in</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;