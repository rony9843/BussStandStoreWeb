import React from "react";
import { styled } from "styled-components";

export default function UserCard() {
  return (
    <UserCardStyle>
      <div className="businessCard materialize">
        <div className="background">
          <div className="diagonals"></div>
        </div>
        <div className="card-panel z-depth-4 hoverable">
          <div className="row valign-wrapper">
            <div className="col s8 leftSide">
              <div className="row nameAndTitleSection">
                <div className="fullName col s12">Mr. Joshua Tzucker</div>
                <div
                  className="divider col s12"
                  style={{ height: "2px" }}
                ></div>
                <div className="jobTitle col s11 offset-s1">
                  Professional Tinkerer
                </div>
              </div>
              <div className="row">
                <div className="col s11 offset-s1 linksAndDetailsSection">
                  <div className="emailAddress col s12 valign-wrapper">
                    <div className="iconWrapper z-depth-2 iconsSolidBackground">
                      <div className="icon">
                        <i className="material-icons left">email</i>
                      </div>
                    </div>
                    <div className="textWrapper">
                      <a
                        href="mailto:email@example.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        email@example.com
                      </a>
                    </div>
                  </div>
                  <div className="rowJoinerWrapper">
                    <div className="rowJoiner iconsSolidBackground"></div>
                  </div>
                  <div className="geography col s12 valign-wrapper">
                    <div className="iconWrapper z-depth-2 iconsSolidBackground">
                      <div className="icon">
                        <i className="material-icons left">map</i>
                      </div>
                    </div>
                    <div className="textWrapper">
                      <span>Greater Seattle Area</span>
                    </div>
                  </div>
                  <div className="rowJoinerWrapper">
                    <div className="rowJoiner iconsSolidBackground"></div>
                  </div>
                  <div className="linkedInURL col s12 valign-wrapper">
                    <div className="iconWrapper z-depth-2 iconsSolidBackground">
                      <div className="icon">
                        <i className="material-icons left">link</i>
                        <i
                          className="fa fa-linkedin-square iconsSolidBackground"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div className="textWrapper">
                      <a
                        href="https://www.linkedin.com/in/joshuatzucker"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  <div className="rowJoinerWrapper">
                    <div className="rowJoiner iconsSolidBackground"></div>
                  </div>
                  <div className="codingProfileURL col s12 valign-wrapper">
                    <div className="iconWrapper z-depth-2 iconsSolidBackground">
                      <div className="icon">
                        <i className="material-icons left">code</i>
                        <i
                          className="fa fa-github iconsSolidBackground"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div className="textWrapper">
                      <a
                        href="https://github.com/joshuatz"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s4 rightSide">
              <div className="valign-wrapper">
                <div className="profilePictureWrapper col s12 z-depth-2">
                  <img
                    className="profilePicture responsive-img"
                    src={
                      " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAP8AAP/qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOYV9agAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4xLjQTQGjEAAADqElEQVR42u3cMRLDIAwAwSij/z8Z+QduGMYCdvvYRFxUJurHzf5GIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAOwgV78gzNgGQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAAJiVCjzbMH8EgAAQAAJAAAgAASAABIAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAALgBNn9gOWOXoUNgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACEAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAB0kKd/wVj8/Gp+PhsAASAABIAAEAACQAAIAAEgAAEYgQAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAuAIefsARvNfyLABEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAPw/wPbKBkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAAQgAASAABAAAkAACAABIABukGEGNgACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAARAd6kQGwABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAKgvZx9QE1+PtyBDYAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAEYAQCQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAAbC//PoA5Q5sAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABCAAIxAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIgP3l7APi8gGGDYAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAGwXhjB3soGQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABCAABIAAEAACQAAIAAEgAG7wANIDDhaO2U6TAAAAAElFTkSuQmCC "
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="ageWrapper col s12 center">
                <span>Age ----</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserCardStyle>
  );
}

const UserCardStyle = styled.div`
  .businessCard {
    width: 80%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    font-family: "lato", "sans-serif";
    font-size: 1.1em;
    position: relative;
  }
  .businessCard .fullName {
    font-weight: bolder;
    font-size: 2em;
  }
  .businessCard .jobTitle {
    font-style: italic;
    font-size: 1.3em;
  }
  .businessCard .profilePictureWrapper {
    overflow: hidden;
    border-radius: 50%;
    padding: 10px;
    border: 4px solid black;
    margin-top: 38%;
  }
  .businessCard .linksAndDetailsSection .rowJoinerWrapper {
    width: 34px;
    height: 15px;
    padding-left: 0.75rem;
    min-height: 1px;
    position: relative;
    text-align: center;
    z-index: 999;
    float: left;
    margin-bottom: -1px;
    margin-top: -1px;
  }
  .businessCard .linksAndDetailsSection .rowJoiner {
    width: 50%;
    height: 100%;
    margin-left: auto;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
  .businessCard .linkedInURL i,
  .businessCard .codingProfileURL i {
    position: absolute;
    width: 24px;
    height: 24px;
    text-align: center;
    font-size: large;
  }
  .businessCard .linksAndDetailsSection i.fa {
    font-size: x-large;
  }
  .businessCard .linksAndDetailsSection .iconWrapper {
    display: inline-block;
    width: 34px;
    height: 31px;
    padding-top: 3px;
    padding-left: 4px;
    margin-right: 10px;
    border-radius: 8px;
    border: 1px solid black;
  }
  .businessCard .linksAndDetailsSection .textWrapper {
    display: inline-block;
  }
  .businessCard .iconsSolidBackground {
    background-color: black;
    color: white !important;
  }
  .businessCard .diagonals {
    position: absolute;
    height: 200%;
    width: 14px;
    top: -50%;
    right: 222px;
    border-left: 4px solid red;
    border-right: 4px solid red;
    transform: rotateZ(24deg);
    background-color: #38013d;
  }
  .businessCard > .card-panel {
    position: relative;
    background-color: unset;
  }
  .businessCard .background {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0px;
    left: 0px;
    overflow: hidden;
    background-color: white;
  }
  .businessCard .ageWrapper {
    margin-top: 4px;
    font-size: medium;
    font-style: italic;
  }
  .businessCard .linksAndDetailsSection {
    min-height: 88px;
  }
  .businessCard .fixedUpperRightToolbar {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  @media (max-width: 600px) {
    .businessCard .profilePictureWrapper {
      margin-top: 0px;
    }
  }
`;
