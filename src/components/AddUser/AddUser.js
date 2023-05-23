import Button from "@mui/material/Button";
import QRCode from "qrcode";
import React, { useEffect, useRef, useState } from "react";
import StickyBox from "react-sticky-box";
import ReactToPrint from "react-to-print";
import { styled } from "styled-components";
import handshakeIcon from "../../asset/handshake.png";
import QrCodeGenerator from "../QrCodeGenerator/QrCodeGenerator";
import UserCard from "./UserCard";

export default function AddUser({ optionSelection, socket }) {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  const [qrCodeStateCon, setQrCodeStateCon] = useState(false);

  // !! qrcode socket io
  // const qrCodeSocketIo = () => {
  //   socket.emit("QrCodeState", qrCodeStateCon);
  // };

  useEffect(() => {
    socket.on("QrCodeStateResponse", (data) => setQrCodeStateCon(data));
  }, [socket]);

  const [barCodeItem, setBarCodeItems] = useState([]);

  useEffect(() => {
    socket.on("orderItemList", (data) => setBarCodeItems(data));
  }, [socket]);

  const componentRef = useRef();
  const componentCardRef = useRef();
  const componentCardNoImageRef = useRef();

  const [userImage, setUserImage] = useState(
    "https://i.ibb.co/zSXHJ2M/blank-profile-picture-gbaab5039d-1280.png"
  );

  const [pageMode, setPageMode] = useState("create");

  const [inputImage, setInputImage] = useState("");
  const [infoType, setInfoType] = useState("NID");
  const [accountNumber, _setAccountNumber] = useState(
    Math.floor(Math.random() * 9000000000) + 1000000000
  );

  const [loading, setLoading] = useState(false);
  const [QrCodeImg, setQrCodeImg] = useState();
  const [userName, setUserName] = useState("");
  const [userIdNumber, setUserIdNumber] = useState("");
  const [userDate, setUserDate] = useState("");
  const [userMonth, setUserMonth] = useState("");
  const [userYear, setUserYear] = useState("");
  const [userFathersName, setUserFathersName] = useState("");
  const [userMothersName, setUserMothersName] = useState("");
  const [userPrimaryPhoneNumber, setUserPrimaryPhoneNumber] = useState("");
  const [userSecondaryPhoneNumber, setUserSecondaryPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userVillage, setUserVillage] = useState("");
  const [userUnion, setUserUnion] = useState("");
  const [userThana, setUserThana] = useState("");
  const [userZela, setUserZela] = useState("");
  const [userCredit, setUserCredit] = useState("");
  const [userPin, setUserPin] = useState("");

  // ? error
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const onImageSubmitBtn = () => {
    setUserImage(inputImage);
  };

  const generateQrCode = async (props) => {
    try {
      const res = await QRCode.toDataURL(`"${props}"`);
      console.log(res);

      setQrCodeImg(res);
    } catch (error) {
      console.log("error for qrcode ", error);
    }
  };

  useEffect(() => {
    generateQrCode(accountNumber);
  }, [accountNumber]);

  // nid submit btn
  const submitBtn = () => {
    if (userName === "") {
      setError({
        state: true,
        message: "Please, Enter valid name",
      });
    } else if (userIdNumber === "") {
      setError({
        state: true,
        message: `Please, Enter valid ${infoType} Number`,
      });
    } else if (userDate === "") {
      setError({
        state: true,
        message: `Please, Enter valid Date of Birth`,
      });
    } else if (userMonth === "") {
      setError({
        state: true,
        message: `Please, Enter valid Date of Birth`,
      });
    } else if (userYear === "") {
      setError({
        state: true,
        message: `Please, Enter valid Date of Birth`,
      });
    } else if (userFathersName === "") {
      setError({
        state: true,
        message: `Please, Enter valid Father's name`,
      });
    } else if (userMothersName === "") {
      setError({
        state: true,
        message: `Please, Enter valid Mother's name`,
      });
    } else if (userPrimaryPhoneNumber === "") {
      setError({
        state: true,
        message: `Please, Enter valid Primary Phone Number`,
      });
    } else if (userVillage === "") {
      setError({
        state: true,
        message: `Please, Enter গ্রাম`,
      });
    } else if (userUnion === "") {
      setError({
        state: true,
        message: `Please, Enter ইউনিয়ন`,
      });
    } else if (userThana === "") {
      setError({
        state: true,
        message: `Please, Enter থানা`,
      });
    } else if (userZela === "") {
      setError({
        state: true,
        message: `Please, Enter জেলা`,
      });
    } else if (userCredit === "") {
      setError({
        state: true,
        message: `Please, Enter Credit`,
      });
    } else if (userPin === "") {
      setError({
        state: true,
        message: `Please, Enter Pin`,
      });
    } else if (inputImage === "") {
      setError({
        state: true,
        message: `Please, Enter Image Link`,
      });
    } else {
      const payload = {
        userName,
        userImage,
        userAccountNumber: accountNumber,
        qrCodeImage: QrCodeImg,
        infoType,
        userIdNumber,
        userDate,
        userMonth,
        userYear,
        userFathersName,
        userMothersName,
        userPrimaryPhoneNumber,
        userSecondaryPhoneNumber:
          userSecondaryPhoneNumber === "" ? null : userSecondaryPhoneNumber,
        userEmail: userEmail === "" ? null : userEmail,
        userVillage,
        userUnion,
        userThana,
        userZela,
        userCredit,
        userPin,
        createdDate: new Date(),
      };
      setLoading(true);

      fetch(
        "https://bussstandstoreserver-production.up.railway.app/createUser",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setLoading(false);
          if (data.status === 200) {
            setPageMode("pdf");
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error:", error);
        });
    }
  };

  /**
   * ? jela
   * ? thana
   * ? union
   * ? village
   */

  return (
    <AddUserStyle>
      {pageMode === "create" ? (
        <div className="p-2">
          <h3>Add User</h3>
          <div>
            <div>
              <button>
                QrCode socketIo --{qrCodeStateCon === false ? "false" : "true"}
              </button>
            </div>
            <div>
              {barCodeItem.map((dt) => (
                <div>{dt.data}</div>
              ))}
            </div>
          </div>

          <div className="row w-100">
            <div className="col-4">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <div>
                  <img
                    src={userImage}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10%",
                    }}
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
                  Account Number :{" "}
                  <b style={{ color: "red" }}>{accountNumber}</b>
                </div>
                <div style={{ textAlign: "center" }}>
                  <QrCodeGenerator QrCodeImg={QrCodeImg} />
                </div>
              </StickyBox>
            </div>

            <div className="col-8">
              <div className="mb-3">
                <label for="userName" className="form-label">
                  Name
                </label>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="userName"
                  aria-describedby="text"
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
                <div className="row mt-2">
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        {infoType === "NID" && "NID Number"}
                        {infoType === "জন্ম নিবন্ধন" && "জন্ম নিবন্ধন Number"}
                        {infoType === "Passport" && "Passport Number"}
                      </label>
                      <input
                        onChange={(e) => setUserIdNumber(e.target.value)}
                        type="text"
                        className="form-control"
                        id="userName"
                        aria-describedby="idNumber"
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
                            onChange={(e) => setUserDate(e.target.value)}
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
                            onChange={(e) => setUserMonth(e.target.value)}
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
                            onChange={(e) => setUserYear(e.target.value)}
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
                        onChange={(e) => setUserFathersName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="userName"
                        aria-describedby="fathersName"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Mother's name
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setUserMothersName(e.target.value)}
                        className="form-control"
                        id="userName"
                        aria-describedby="mothersName"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Primary Phone Number
                      </label>
                      <input
                        onChange={(e) =>
                          setUserPrimaryPhoneNumber(e.target.value)
                        }
                        type="number"
                        className="form-control"
                        id="userName"
                        aria-describedby="1stPhone"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Secondary Phone Number (Optional)
                      </label>
                      <input
                        onChange={(e) =>
                          setUserSecondaryPhoneNumber(e.target.value)
                        }
                        type="number"
                        className="form-control"
                        id="userName"
                        aria-describedby="2ndPhone"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Email (Optional)
                      </label>
                      <input
                        onChange={(e) => setUserEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        id="userName"
                        aria-describedby="email"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        গ্রাম
                      </label>
                      <input
                        onChange={(e) => setUserVillage(e.target.value)}
                        type="text"
                        className="form-control"
                        id="userName"
                        aria-describedby="village"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        ইউনিয়ন
                      </label>
                      <input
                        onChange={(e) => setUserUnion(e.target.value)}
                        type="text"
                        className="form-control"
                        id="userName"
                        aria-describedby="Union"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        থানা
                      </label>
                      <input
                        onChange={(e) => setUserThana(e.target.value)}
                        type="text"
                        className="form-control"
                        id="userName"
                        aria-describedby="thana"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        জেলা
                      </label>
                      <input
                        onChange={(e) => setUserZela(e.target.value)}
                        type="text"
                        className="form-control"
                        id="userName"
                        aria-describedby="jela"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Credit (TK)
                      </label>
                      <input
                        onChange={(e) => setUserCredit(e.target.value)}
                        type="number"
                        className="form-control"
                        id="userName"
                        aria-describedby="Credit"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="userName" className="form-label">
                        Pin
                      </label>
                      <input
                        onChange={(e) => setUserPin(e.target.value)}
                        type="password"
                        className="form-control"
                        id="userName"
                        aria-describedby="pin"
                      />
                    </div>
                  </div>
                  {error.state === true && (
                    <div>
                      <div className="alert alert-danger" role="alert">
                        {error.message}
                      </div>
                    </div>
                  )}

                  <div style={{ textAlign: "right" }}>
                    {loading === true ? (
                      <Button variant="contained">Loading...</Button>
                    ) : (
                      <Button onClick={() => submitBtn()} variant="contained">
                        Create New Member
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="p-5 m-5">
            <div className="p-2 border">
              <div ref={componentRef} className="p-5">
                <div>
                  <div className="d-flex justify-content-center">
                    <div style={{ textAlign: "center" }}>
                      <div>
                        <img
                          style={{ width: "10%" }}
                          src={handshakeIcon}
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="mt-3">
                          <b>
                            তোফা এন্ড সুফা{" "}
                            <b style={{ color: "red" }}>এন্টারপ্রাইজ</b>{" "}
                          </b>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <h5> ফোন : ০১৮৭৭১৩৪৭৩১</h5>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div>
                      <span>কার্ড সংক্রান্ত তথ্য</span>
                    </div>
                  </div>
                  <div
                    className="
                d-flex justify-content-center"
                  >
                    <hr style={{ width: "30%" }} />
                  </div>
                </div>
                <div className="p-2 mt-3">
                  <div className="  row">
                    <div className="col-8">
                      <div>
                        <h5>
                          <b style={{ color: "red" }}>ব্যক্তিগত তথ্য :</b>{" "}
                        </h5>
                      </div>
                      <div style={{ marginLeft: "15px" }}>
                        <div className="row">
                          <div className="col-4">নাম</div>
                          <div className="col-6">
                            : <b>{userName}</b>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4">
                            {infoType === "NID" && "NID নম্বর"}
                            {infoType === "জন্ম নিবন্ধন" &&
                              "জন্ম নিবন্ধন নম্বর"}
                            {infoType === "জন্ম নিবন্ধন" && "Passport নম্বর"}
                          </div>
                          <div className="col-6">
                            : <b>{userIdNumber}</b>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4">ইমেইল</div>
                          <div className="col-6">
                            : {userEmail === "" ? "নাই" : userEmail}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4">জন্ম তারিখ</div>
                          <div className="col-6">
                            : {userDate} / {userMonth} / {userYear}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4">প্রথমিক ফোন</div>
                          <div className="col-6">
                            : <b>{userPrimaryPhoneNumber}</b>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4">দ্বিতীয় ফোন</div>
                          <div className="col-6">
                            :{" "}
                            {userSecondaryPhoneNumber === ""
                              ? "নাই"
                              : userSecondaryPhoneNumber}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5>
                          <b style={{ color: "red" }}>পারিবারিক তথ্য :</b>{" "}
                        </h5>
                      </div>
                      <div style={{ marginLeft: "15px" }}>
                        <div className="row">
                          <div className="col-4">পিতার নাম</div>
                          <div className="col-6">: {userFathersName}</div>
                        </div>
                        <div className="row">
                          <div className="col-4">মাতার নাম</div>
                          <div className="col-6">: {userMothersName}</div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5>
                          <b style={{ color: "red" }}>ঠিকানা :</b>{" "}
                        </h5>
                      </div>
                      <div style={{ marginLeft: "15px" }}>
                        <div className="row">
                          <div className="col-4">গ্রাম</div>
                          <div className="col-6">: {userVillage}</div>
                        </div>
                        <div className="row">
                          <div className="col-4">ইউনিয়ন</div>
                          <div className="col-6">: {userUnion}</div>
                        </div>
                        <div className="row">
                          <div className="col-4">থানা</div>
                          <div className="col-6">: {userThana}</div>
                        </div>
                        <div className="row">
                          <div className="col-4">জেলা</div>
                          <div className="col-6">: {userZela}</div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5>
                          <b style={{ color: "red" }}>
                            অ্যাকাউন্ট সংক্রান্ত তথ্য :
                          </b>{" "}
                        </h5>
                      </div>
                      <div style={{ marginLeft: "15px" }}>
                        <div className="row">
                          <div className="col-4">ক্রেডিট</div>
                          <div className="col-6">
                            : <b>{userCredit} টাকা</b>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4">অ্যাকাউন্ট নম্বর</div>
                          <div className="col-6">
                            : <b>{accountNumber}</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 ">
                      <div>
                        <img
                          style={{ borderRadius: "10px" }}
                          src={inputImage}
                          alt=""
                          className="w-100"
                        />
                      </div>
                      <div className="mt-5 pt-5">
                        <div>
                          <img
                            style={{ borderRadius: "10px" }}
                            src={QrCodeImg}
                            alt=""
                            className="w-100"
                          />
                        </div>
                        <div className="mt-2 d-flex justify-content-center">
                          <h5>
                            {" "}
                            <b style={{ color: "red" }}>{accountNumber}</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <ReactToPrint
                trigger={() => (
                  <Button variant="contained">Print Document</Button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </div>
          <div className="mt-5 p-5 m-5">
            <div className="p-2 border">
              <div
                ref={componentCardRef}
                className="border m-3"
                style={{ width: "450px", height: "300px" }}
              >
                <div className="mt-2 d-flex justify-content-center">
                  <div style={{ textAlign: "center" }}>
                    <div>
                      <img
                        style={{ width: "10%" }}
                        src={handshakeIcon}
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 style={{ fontSize: "14px" }} className="mt-2">
                        <b>
                          তোফা এন্ড সুফা{" "}
                          <b style={{ color: "red" }}>এন্টারপ্রাইজ</b>{" "}
                        </b>
                      </h6>
                    </div>
                    <div className="d-flex justify-content-center">
                      <span style={{ fontSize: "12px" }}>
                        {" "}
                        <b>ফোন : ০১৮৭৭১৩৪৭৩১</b>
                      </span>
                    </div>
                    <div
                      className="
                d-flex justify-content-center"
                    >
                      <hr style={{ width: "30%", margin: "10px" }} />
                    </div>
                    <div className="">
                      <div className="row">
                        <div className="col-5">
                          {" "}
                          <div>
                            <img src={QrCodeImg} alt="" />
                          </div>{" "}
                          <span>
                            {" "}
                            <b style={{ color: "red" }}>{accountNumber}</b>
                          </span>
                        </div>
                        <div
                          className="col-1 d-flex justify-content-center"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            textAlign: "center",
                          }}
                        >
                          <div className="d-flex" style={{ height: "150px" }}>
                            <div className="vr"></div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div>
                            <img
                              style={{ width: "40%", borderRadius: "10%" }}
                              src={userImage}
                              alt=""
                            />
                          </div>
                          <div>
                            <b>{userName}</b>
                          </div>
                          <div>
                            <span style={{ fontSize: "14px" }}>
                              {infoType} :{" "}
                              <b style={{ color: "red" }}>{accountNumber}</b>
                            </span>
                          </div>
                          <div>
                            <span style={{ fontSize: "14px" }}>
                              ফোন : {userPrimaryPhoneNumber}
                            </span>
                          </div>
                          <div>
                            <span style={{ fontSize: "14px" }}>
                              {userSecondaryPhoneNumber !== "" &&
                                `${userSecondaryPhoneNumber}`}{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div>
                <ReactToPrint
                  trigger={() => (
                    <Button variant="contained">Print Card</Button>
                  )}
                  content={() => componentCardRef.current}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 p-5 m-5">
            <div className="p-2 border">
              <div
                ref={componentCardNoImageRef}
                className="border m-3"
                style={{ width: "450px", height: "300px" }}
              >
                <div className="mt-2 d-flex justify-content-center">
                  <div style={{ textAlign: "center" }}>
                    <div>
                      <img
                        style={{ width: "10%" }}
                        src={handshakeIcon}
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 style={{ fontSize: "14px" }} className="mt-2">
                        <b>
                          তোফা এন্ড সুফা{" "}
                          <b style={{ color: "red" }}>এন্টারপ্রাইজ</b>{" "}
                        </b>
                      </h6>
                    </div>
                    <div className="d-flex justify-content-center">
                      <span style={{ fontSize: "12px" }}>
                        {" "}
                        <b>ফোন : ০১৮৭৭১৩৪৭৩১</b>
                      </span>
                    </div>
                    <div
                      className="
                d-flex justify-content-center"
                    >
                      <hr style={{ width: "30%", margin: "10px" }} />
                    </div>
                    <div className="">
                      <div className="row">
                        <div className="col-5">
                          {" "}
                          <div>
                            <img src={QrCodeImg} alt="" />
                          </div>{" "}
                          <span>
                            {" "}
                            <b style={{ color: "red" }}>{accountNumber}</b>
                          </span>
                        </div>
                        <div
                          className="col-1 d-flex justify-content-center"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            textAlign: "center",
                          }}
                        >
                          <div className="d-flex" style={{ height: "150px" }}>
                            <div className="vr"></div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div style={{ textAlign: "left", fontSize: "14px" }}>
                            <div>
                              নাম : <b>{userName}</b>
                            </div>
                            <div>
                              <span style={{ fontSize: "14px" }}>
                                {infoType} :{" "}
                                <b style={{ color: "red" }}>{accountNumber}</b>
                              </span>
                            </div>
                            <div>
                              <span style={{ fontSize: "14px" }}>
                                ফোন : {userPrimaryPhoneNumber}{" "}
                                {userSecondaryPhoneNumber !== "" && `,`}{" "}
                              </span>
                            </div>
                            <div>
                              <span
                                style={{ fontSize: "14px", marginLeft: "40px" }}
                              >
                                {userSecondaryPhoneNumber !== "" &&
                                  `${userSecondaryPhoneNumber}`}{" "}
                              </span>
                            </div>
                            <div>গ্রাম :{userVillage}</div>
                            <div>ইউনিয়ন : {userUnion}</div>
                            <div>থানা : {userThana}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div>
                <ReactToPrint
                  trigger={() => (
                    <Button variant="contained">Print Card</Button>
                  )}
                  content={() => componentCardNoImageRef.current}
                />
              </div>
            </div>
          </div>
          <div>
            <UserCard></UserCard>
          </div>
        </div>
      )}
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
