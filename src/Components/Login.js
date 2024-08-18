import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const credentials = [
  { email: "d@gmail.com", password: "d123" },
  { email: "e@gmail.com", password: "e123" },
  { email: "f@gmail.com", password: "f123" },
];

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let i = 0; i < credentials.length; i++) {
      if (
        credentials[i].email === email &&
        credentials[i].password === password
      ) {
        setIsAuthenticated(true);
        break;
      }
    }
    if (isAuthenticated) {
      navigate("/Home");
    } else {
      alert("invalid username or password");
    }
  };

  return (
    <form className="form">
      <h2>LOGIN</h2>
      {/* <img className="image" src={photo}></img> */}
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Remenber Me
            <label className="form-check-label" for="exampleCheck1">
              Forgot password
            </label>
          </label>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <label className=" account" for="exampleCheck1">
          Don't have an account? <p className="sign">Sign Up</p>{" "}
        </label>
      </div>
    </form>
  );
};
