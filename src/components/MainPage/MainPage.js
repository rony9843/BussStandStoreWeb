import React, { useEffect, useState } from "react";
import socketIO from "socket.io-client";
import MainLeftSide from "./MainLeftSide";
import MainRightSide from "./MainRightSide";

export default function MainPage() {
  const [optionSelection, setOptionSelection] = useState("Add User");
  const socket = socketIO.connect("http://localhost:5500/");

  const handleSubmit = () => {
    //sends the username and socket ID to the Node.js server
    socket.emit("newUser", "this is roni");
  };

  handleSubmit();

  useEffect(() => {
    socket.on("messageResponse", (data) =>
      console.log("this is message -> ", data)
    );
  }, [socket]);

  return (
    <div>
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          className="pt-2"
          style={{ width: "15%", backgroundColor: "#0C134F" }}
        >
          <MainLeftSide
            optionSelection={optionSelection}
            setOptionSelection={setOptionSelection}
          ></MainLeftSide>
        </div>
        <div style={{ width: "85%", height: "100vh", overflowY: "scroll" }}>
          <MainRightSide optionSelection={optionSelection}></MainRightSide>
        </div>
      </div>
    </div>
  );
}
