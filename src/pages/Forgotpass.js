import React from "react";
import "./Forgot.css";

const Forgotpass = () => {
  return (
    <div>
      <form className="form-login">
        <h2 className="h-2">Forgot Password</h2>
        <p>
          Enter your phone number below to receive your password reset
          instructions.
        </p>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Phone Number
          </label>
          <input
            type="Numbers"
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
          <button type="submit" className="btn1">
            Recover Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forgotpass;
