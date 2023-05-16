import React, { useState } from "react";
import { styled } from "styled-components";

export default function RegisterPage() {
  const [error, setError] = useState({
    message: "",
    state: false,
  });

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
              />
            </div>

            <button
              onClick={() =>
                setError({
                  message: "",
                  state: true,
                })
              }
              type="submit"
              className="btn btn-primary w-100"
            >
              Submit
            </button>
          </div>
          {error.state && (
            <div className="alert alert-danger mt-5" role="alert">
              A simple danger alert—check it out!
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
