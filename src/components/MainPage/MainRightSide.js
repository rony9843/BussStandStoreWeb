import React from "react";
import AddUser from "../AddUser/AddUser";

export default function MainRightSide({ optionSelection }) {
  return <div>{optionSelection === "Add User" && <AddUser />}</div>;
}
