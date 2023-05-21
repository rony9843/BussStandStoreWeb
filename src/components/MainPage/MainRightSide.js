import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import AddUser from "../AddUser/AddUser";

export default function MainRightSide({ optionSelection, socket }) {
  return (
    <div>
      <div>{optionSelection === "Add User" && <AddUser socket={socket} />}</div>
      <div>{optionSelection === "Add Product" && <AddProduct />}</div>
    </div>
  );
}
