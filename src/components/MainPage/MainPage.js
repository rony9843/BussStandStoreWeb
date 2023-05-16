import React, { useState } from "react";
import MainLeftSide from "./MainLeftSide";
import MainRightSide from "./MainRightSide";

export default function MainPage() {
  const [optionSelection, setOptionSelection] = useState("Add User");

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
