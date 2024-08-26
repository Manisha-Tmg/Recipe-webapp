import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <form className="form-login">
      <h2 className="h-2">LOGIN</h2>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="remember-forgot">
          <Link id="forgot" to={""}>
            Forgot Password?
          </Link>
        </div>
        <button type="submit" className="btn1">
          Login
        </button>
        <label className=" account" for="exampleCheck1">
          Don't have an account?{" "}
          <Link to={"/register"} className="sign">
            Sign Up
          </Link>{" "}
        </label>
      </div>
    </form>
  );
};

export default Login;
