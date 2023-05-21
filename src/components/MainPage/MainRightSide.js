import React from "react";
import AddUser from "../AddUser/AddUser";

export default function MainRightSide({ optionSelection, socket }) {
  return (
    <div>{optionSelection === "Add User" && <AddUser socket={socket} />}</div>
  );
}
