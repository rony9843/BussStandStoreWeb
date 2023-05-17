import Button from "@mui/material/Button";
import React, { useRef, useState } from "react";
import StickyBox from "react-sticky-box";
import ReactToPrint from "react-to-print";
import { styled } from "styled-components";
import QrCodeGenerator from "../QrCodeGenerator/QrCodeGenerator";

export default function AddUser() {
  const componentRef = useRef();

  const [userImage, setUserImage] = useState(
    "https://i.ibb.co/zSXHJ2M/blank-profile-picture-gbaab5039d-1280.png"
  );

  const [inputImage, setInputImage] = useState("");
  const [infoType, setInfoType] = useState("NID");
  const accountNumber = Math.floor(Math.random() * 9000000000) + 1000000000;

  const onImageSubmitBtn = () => {
    setUserImage(inputImage);
  };

  // nid submit btn
  const submitBtn = () => {
    fetch("http://localhost:9990/createUser", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "jubayth hossen roni" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <AddUserStyle>
      <div className="p-2">
        <h3>Add User</h3>
        <div className="row w-100">
          <div className="col-4">
            <StickyBox offsetTop={20} offsetBottom={20}>
              <div>
                <img
                  src={userImage}
                  alt=""
                  style={{ height: "100%", width: "100%", borderRadius: "10%" }}
                />
              </div>
              <div className="input-group mb-3 mt-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Image link"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  onChange={(e) => setInputImage(e.target.value)}
                  value={inputImage}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={() => onImageSubmitBtn()}
                >
                  Press
                </button>
              </div>

              <div>
                Account Number : <b style={{ color: "red" }}>{accountNumber}</b>
              </div>
              <div style={{ textAlign: "center" }}>
                <QrCodeGenerator AccountNumber={accountNumber} />
              </div>
            </StickyBox>
          </div>

          <div className="col-8">
            <div className="mb-3">
              <label for="userName" className="form-label">
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="userName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="infoTypeContainerBox">
              <div className="infoTypeContainer">
                <div
                  className={`${
                    infoType === "NID" ? "infoOptionSelection" : "infoOption"
                  }`}
                  onClick={() => setInfoType("NID")}
                >
                  NID
                </div>
                <div
                  className={`${
                    infoType === "জন্ম নিবন্ধন"
                      ? "infoOptionSelection"
                      : "infoOption"
                  }`}
                  onClick={() => setInfoType("জন্ম নিবন্ধন")}
                >
                  জন্ম নিবন্ধন
                </div>
                <div
                  className={`${
                    infoType === "Passport"
                      ? "infoOptionSelection"
                      : "infoOption"
                  }`}
                  onClick={() => setInfoType("Passport")}
                >
                  Passport
                </div>
              </div>
            </div>

            <div>
              {infoType === "NID" && (
                <div className="row mt-2">
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        NID Number
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="userName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <h6>Date Of Birth</h6>
                    <div className="row">
                      {" "}
                      <div className="col-4">
                        <div className="mb-3">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mb-3">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mb-3">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Year</option>
                            <option value="">year</option>
                            <option value="1940">1940</option>
                            <option value="1941">1941</option>
                            <option value="1942">1942</option>
                            <option value="1943">1943</option>
                            <option value="1944">1944</option>
                            <option value="1945">1945</option>
                            <option value="1946">1946</option>
                            <option value="1947">1947</option>
                            <option value="1948">1948</option>
                            <option value="1949">1949</option>
                            <option value="1950">1950</option>
                            <option value="1951">1951</option>
                            <option value="1952">1952</option>
                            <option value="1953">1953</option>
                            <option value="1954">1954</option>
                            <option value="1955">1955</option>
                            <option value="1956">1956</option>
                            <option value="1957">1957</option>
                            <option value="1958">1958</option>
                            <option value="1959">1959</option>
                            <option value="1960">1960</option>
                            <option value="1961">1961</option>
                            <option value="1962">1962</option>
                            <option value="1963">1963</option>
                            <option value="1964">1964</option>
                            <option value="1965">1965</option>
                            <option value="1966">1966</option>
                            <option value="1967">1967</option>
                            <option value="1968">1968</option>
                            <option value="1969">1969</option>
                            <option value="1970">1970</option>
                            <option value="1971">1971</option>
                            <option value="1972">1972</option>
                            <option value="1973">1973</option>
                            <option value="1974">1974</option>
                            <option value="1975">1975</option>
                            <option value="1976">1976</option>
                            <option value="1977">1977</option>
                            <option value="1978">1978</option>
                            <option value="1979">1979</option>
                            <option value="1980">1980</option>
                            <option value="1981">1981</option>
                            <option value="1982">1982</option>
                            <option value="1983">1983</option>
                            <option value="1984">1984</option>
                            <option value="1985">1985</option>
                            <option value="1986">1986</option>
                            <option value="1987">1987</option>
                            <option value="1988">1988</option>
                            <option value="1989">1989</option>
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Father's name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="userName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Mother's name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="userName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Primary Phone Number
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="userName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Secondary Phone Number (Optional)
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="userName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Email (Optional)
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="userName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Pin
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="userName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div>
                    <Button onClick={() => submitBtn()} variant="contained">
                      Create New Member
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="mt-4" style={{ textAlign: "center" }}>
                <h1>PDF</h1>
              </div>
              <div
                className=""
                style={{
                  width: "100%",
                  border: "1px solid gray",
                  borderRadius: "5px",
                }}
              >
                <div ref={componentRef} className="p-2">
                  <div style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate, dicta?
                    <img
                      className="w-50 mt-3"
                      style={{ borderRadius: "5px" }}
                      src={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAXNSR0IArs4c6QAABJ5JREFUeF7tnduOYjEMBIf//+hZad84SJRa7RxIpvbVuThdtnNhYB+/v7+/P/47RoGHQI9h+X8hAj2Lp0AP4ylQgZ6mwGHrcQ8V6GEKHLYcM1Sghylw2HLMUIEepsBhyzFDBXqYAoctxwwV6GEKHLacOkMfj8etklw/vqX5qT19HEzjTy+e/KH5BAqf7wuUQqi0U8Zdh6f2lBECLYFRdwIkUApRUPgaweVwL7O146cZRgHzbeu7Cja+h37bggVKNe9ibzOIpmvHFygpLNBQoffN24C9veTenSEkENlfBLrcs2mPJdrUv92ylu+hAn1GLFDIkDajKCMoo+8OWKoAZmj4UkQZRoJTfwowGn97oJRBaQan7c1QCLE0ggX6LKgZasm9RMSHj/Vm6OEZSocGsrclf3p8Gu+4h4X0UEICCfTLSi4BI7tABUox8mRPAyYafOIb3OmhJHYwDJj0Yk7+kz1dT3rPTcdffm1JHUoX3ApO/cm+en3p+AJdXAEIyHTACFSg7x8WKCJbe3qooAxI7a3/1D89Ayy/h5LDrV2g7xUcL7ktMOovUIFW98Dpl6g0YKn9eMlNJ5xuT3vg9HzfPl5dcj+9QIFeDqm7/3ijQAX66aKydP665LYZQv3TQ0l7Cp5Wm+6VtP7UH4Eu/sKyQC9/42OGZjlqhpqh8FIBAlEJongc33NCoKn/5C/ZSY/lDwtUIlNBXhwOvxpBgpC/1/6p/wSM7OS/QC8KCBRChgRKI9wMzXK0PhRl0/38pCXm29pTgLUlOtVzecklh74NUOqPQGHPohKcCr66vUAFSkVr1F7voe0hqM2odM9q/SX12/VQxcL524/PWoFaAQT6rIAZeomIOkPCh480oM3Q8CHhzwPFiAkjlk6R0593EsDxDFr91t3uoQIlBS57nECffzHbDH0fQPWhiOKzLVnUP7W3p2Iq0akeqT84/uqSSw60dro2teOPC16eKWg9yzOUHGjtAh2+h7ZA2v4CFWgVQ9N7aDveyzWv3UM/nSF0KErvtdSeoiE9hdN4qb3eQwX6LLlAwxBsBWszmtxt/aPxyW6Ghj/eSIIeB3R8kw/vbWkGEqDWTlvSuF7Th6JxBwUaxdR4yRXo5V64+DF++bVFoIcDpT2E3kppT5y2p/607al/VG/v+PFGgWb/YW5b4ZbvoQIV6FOVmS6pdE+kEkgBmo5P8/25kksLTgOCxiNgVDLTgCB/bj/l0gIoQgkILZj63+0fzUcBgetd/bBACxDo+8d9AmiG3vyjHC+CL35o2P6USxGcllwqeW3FIX9bu0DLt2ICQAFC/VO7QAX6/q2SjvUUcdQ/jXhLLil+sZNg4XAvzafHpz2QAmban1af20+5rcPTAgoUiEwLTsd8yiAKIIEK9EmB1QFMAUn28VMuTdja00NTmpHUPn3ZStvXFWj66a8FRv0F+l4hM3TxU6AZCilqhi7OUCqR2u9VoC6597rrbKSAQEmhzewC3QwYuStQUmgzu0A3A0buCpQU2swu0M2AkbsCJYU2swt0M2DkrkBJoc3sAt0MGLkrUFJoM7tANwNG7gqUFNrMLtDNgJG7/wBpSCcOWoLSmgAAAABJRU5ErkJggg=="
                      }
                      alt=""
                    />
                    <h4>Jubayth Hossen </h4>
                  </div>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum sint totam rerum libero quidem, repellendus quaerat
                    enim expedita reprehenderit similique!
                  </div>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum sint totam rerum libero quidem, repellendus quaerat
                    enim expedita reprehenderit similique!
                  </div>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum sint totam rerum libero quidem, repellendus quaerat
                    enim expedita reprehenderit similique!
                  </div>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum sint totam rerum libero quidem, repellendus quaerat
                    enim expedita reprehenderit similique!
                  </div>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum sint totam rerum libero quidem, repellendus quaerat
                    enim expedita reprehenderit similique!
                  </div>
                </div>
              </div>
              <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
              />
            </div>
          </div>
        </div>
      </div>
    </AddUserStyle>
  );
}

const AddUserStyle = styled.div`
  .infoTypeContainerBox {
    width: 0px auto;
    display: flex;
    justify-content: center;
  }
  .infoTypeContainer {
    border: 1px solid #070b2e;
    border-radius: 10px;
    text-align: center;
    transition: 1s;

    display: flex;
    justify-content: center;
  }

  .infoOption {
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    transition: 1s;
  }
  .infoOption:hover {
    background-color: #070b2e;
    border-radius: 10px;
    color: white;
    transition: 1s;
  }
  .infoOptionSelection {
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    background-color: #070b2e;
    border-radius: 10px;
    color: white;
    transition: 1s;
  }
`;
