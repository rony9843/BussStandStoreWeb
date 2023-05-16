import React, { useState } from "react";
import { styled } from "styled-components";

export default function RegisterPage({ setPageState }) {
  const [error, setError] = useState({
    message: "",
    state: false,
  });

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submitBtn = () => {
    if (email === "masumkaka223@gmail.com" && pass === "masumkaka111") {
      setPageState("Main");
    } else {
      setError({
        message: "Please, Enter valid email and password",
        state: true,
      });
    }
  };

  return (
    <StyleDiv>
      <div className="container">
        <div className="mid-container">
          <div className="title-div">
            <h2>Dashboard</h2>
          </div>
          <div className="input-container">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>

            <button
              onClick={() => submitBtn()}
              //   onClick={() => setPageState("Main")}
              type="submit"
              className="btn btn-primary w-100"
            >
              Submit
            </button>
          </div>
          {error.state && (
            <div className="alert alert-danger mt-5" role="alert">
              {error.message}
            </div>
          )}
        </div>
      </div>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  background-color: #0c134f;
  height: 100vh;
  padding: 200px;
  color: #fff;
  text-align: center;

  .mid-container {
    padding: 20px;
    border: 1px solid #ffffff54;
    border-radius: 10px;
    width: 50%;
    margin: 0px auto;
  }
  .input-container {
    text-align: left;
  }
`;
