import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import React from "react";
import { styled } from "styled-components";

export default function MainLeftSide({ optionSelection, setOptionSelection }) {
  return (
    <MainLeftSideStyle>
      <div>
        <div>
          {" "}
          <h3 style={{ margin: 0, textAlign: "center", color: "white" }}>
            Dashboard
          </h3>{" "}
          <h6
            style={{
              fontWeight: "lighter",
              textAlign: "center",
              color: "white",
            }}
          >
            Masum Kaka
          </h6>
          <div className="d-flex justify-content-center">
            <hr
              style={{
                backgroundColor: "white",
                height: "3px",
                width: "60%",
                margin: 0,
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <div
              onClick={() => setOptionSelection("Add User")}
              className="optionContainer px-2 pt-3"
            >
              <div
                className={`${
                  optionSelection === "Add User"
                    ? "optionContainerMainSelection"
                    : "optionContainerMain"
                } `}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <AccountCircleIcon
                    className={`${
                      optionSelection === "Add User"
                        ? "optionIconSelection"
                        : "optionIcon"
                    } `}
                  ></AccountCircleIcon>
                </div>
                <div
                  className={`${
                    optionSelection === "Add User"
                      ? "optionNameSelection"
                      : "optionName"
                  } `}
                >
                  {" "}
                  <span>Add User</span>{" "}
                </div>
              </div>
            </div>
            <div
              onClick={() => setOptionSelection("Add Product")}
              className="optionContainer px-2 pt-3"
            >
              <div
                className={`${
                  optionSelection === "Add Product"
                    ? "optionContainerMainSelection"
                    : "optionContainerMain"
                } `}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <StoreIcon
                    className={`${
                      optionSelection === "Add Product"
                        ? "optionIconSelection"
                        : "optionIcon"
                    } `}
                  ></StoreIcon>
                </div>
                <div
                  className={`${
                    optionSelection === "Add Product"
                      ? "optionNameSelection"
                      : "optionName"
                  } `}
                >
                  {" "}
                  <span>Add Product</span>{" "}
                </div>
              </div>
            </div>
            <div
              onClick={() => setOptionSelection("Order")}
              className="optionContainer px-2 pt-3"
            >
              <div
                className={`${
                  optionSelection === "Order"
                    ? "optionContainerMainSelection"
                    : "optionContainerMain"
                } `}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <ShoppingBasketIcon
                    className={`${
                      optionSelection === "Order"
                        ? "optionIconSelection"
                        : "optionIcon"
                    } `}
                  ></ShoppingBasketIcon>
                </div>
                <div
                  className={`${
                    optionSelection === "Order"
                      ? "optionNameSelection"
                      : "optionName"
                  } `}
                >
                  {" "}
                  <span>Order</span>{" "}
                </div>
              </div>
            </div>
            <div
              onClick={() => setOptionSelection("Stock")}
              className="optionContainer px-2 pt-3"
            >
              <div
                className={`${
                  optionSelection === "Stock"
                    ? "optionContainerMainSelection"
                    : "optionContainerMain"
                } `}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <AccountCircleIcon
                    className={`${
                      optionSelection === "Stock"
                        ? "optionIconSelection"
                        : "optionIcon"
                    } `}
                  ></AccountCircleIcon>
                </div>
                <div
                  className={`${
                    optionSelection === "Stock"
                      ? "optionNameSelection"
                      : "optionName"
                  } `}
                >
                  {" "}
                  <span>Stock</span>{" "}
                </div>
              </div>
            </div>
            <div
              onClick={() => setOptionSelection("Stock")}
              className="optionContainer px-2 pt-3"
            >
              <div
                className={`${
                  optionSelection === "Stock"
                    ? "optionContainerMainSelection"
                    : "optionContainerMain"
                } `}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <AccountCircleIcon
                    className={`${
                      optionSelection === "Stock"
                        ? "optionIconSelection"
                        : "optionIcon"
                    } `}
                  ></AccountCircleIcon>
                </div>
                <div
                  className={`${
                    optionSelection === "Stock"
                      ? "optionNameSelection"
                      : "optionName"
                  } `}
                >
                  {" "}
                  <span>Stock</span>{" "}
                </div>
              </div>
            </div>
            <div
              onClick={() => setOptionSelection("Stock")}
              className="optionContainer px-2 pt-3"
            >
              <div
                className={`${
                  optionSelection === "Stock"
                    ? "optionContainerMainSelection"
                    : "optionContainerMain"
                } `}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <AccountCircleIcon
                    className={`${
                      optionSelection === "Stock"
                        ? "optionIconSelection"
                        : "optionIcon"
                    } `}
                  ></AccountCircleIcon>
                </div>
                <div
                  className={`${
                    optionSelection === "Stock"
                      ? "optionNameSelection"
                      : "optionName"
                  } `}
                >
                  {" "}
                  <span>Stock</span>{" "}
                </div>
              </div>
            </div>
            <div
              onClick={() => setOptionSelection("Stock")}
              className="optionContainer px-2 pt-3"
            >
              <div
                className={`${
                  optionSelection === "Stock"
                    ? "optionContainerMainSelection"
                    : "optionContainerMain"
                } `}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <AccountCircleIcon
                    className={`${
                      optionSelection === "Stock"
                        ? "optionIconSelection"
                        : "optionIcon"
                    } `}
                  ></AccountCircleIcon>
                </div>
                <div
                  className={`${
                    optionSelection === "Stock"
                      ? "optionNameSelection"
                      : "optionName"
                  } `}
                >
                  {" "}
                  <span>Stock</span>{" "}
                </div>
              </div>
            </div>
            <div
              onClick={() => setOptionSelection("Stock")}
              className="optionContainer px-2 pt-3"
            >
              <div
                className={`${
                  optionSelection === "Stock"
                    ? "optionContainerMainSelection"
                    : "optionContainerMain"
                } `}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <AccountCircleIcon
                    className={`${
                      optionSelection === "Stock"
                        ? "optionIconSelection"
                        : "optionIcon"
                    } `}
                  ></AccountCircleIcon>
                </div>
                <div
                  className={`${
                    optionSelection === "Stock"
                      ? "optionNameSelection"
                      : "optionName"
                  } `}
                >
                  {" "}
                  <span>Stock</span>{" "}
                </div>
              </div>
            </div>
            <div
              onClick={() => setOptionSelection("Stock")}
              className="optionContainer px-2 pt-3"
            >
              <div
                className={`${
                  optionSelection === "Stock"
                    ? "optionContainerMainSelection"
                    : "optionContainerMain"
                } `}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <AccountCircleIcon
                    className={`${
                      optionSelection === "Stock"
                        ? "optionIconSelection"
                        : "optionIcon"
                    } `}
                  ></AccountCircleIcon>
                </div>
                <div
                  className={`${
                    optionSelection === "Stock"
                      ? "optionNameSelection"
                      : "optionName"
                  } `}
                >
                  {" "}
                  <span>Stock</span>{" "}
                </div>
              </div>
            </div>
            <div
              onClick={() => setOptionSelection("Stock")}
              className="optionContainer px-2 pt-3"
            >
              <div
                className={`${
                  optionSelection === "Stock"
                    ? "optionContainerMainSelection"
                    : "optionContainerMain"
                } `}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <AccountCircleIcon
                    className={`${
                      optionSelection === "Stock"
                        ? "optionIconSelection"
                        : "optionIcon"
                    } `}
                  ></AccountCircleIcon>
                </div>
                <div
                  className={`${
                    optionSelection === "Stock"
                      ? "optionNameSelection"
                      : "optionName"
                  } `}
                >
                  {" "}
                  <span>Stock</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLeftSideStyle>
  );
}

const MainLeftSideStyle = styled.div`
  .optionIcon {
    color: #1d267d;
    transition: 1s;
  }
  .optionName {
    color: #1d267d;
    font-size: 16px;
    transition: 1s;
    padding-left: 10px;
  }

  .optionContainerMain {
    padding: 5px;
    border-radius: 5px;
    transition: 1s;
    cursor: pointer;
  }

  .optionContainerMain:hover {
    background-color: #070b2e;
    transition: 1s;

    .optionIcon {
      color: #4353e9;
      transition: 1s;
    }
    .optionName {
      padding-left: 20px;
      transition: 1s;
      color: #4353e9;
    }
  }

  .optionContainerMainSelection {
    background-color: #070b2e;
    padding: 5px;
    border-radius: 5px;
    transition: 1s;
    cursor: pointer;
  }
  .optionIconSelection {
    color: #4353e9;
  }
  .optionNameSelection {
    padding-left: 20px;
    transition: 1s;
    color: #4353e9;
  }
`;
