import { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  const [pageState, setPageState] = useState("RegisterPage");

  return (
    <div className="App">
      {pageState === "Main" ? (
        <MainPage></MainPage>
      ) : (
        <RegisterPage setPageState={setPageState}></RegisterPage>
      )}
    </div>
  );
}

export default App;
