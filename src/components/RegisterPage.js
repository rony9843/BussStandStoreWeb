import React from "react";
import { styled } from "styled-components";
import QrCodeGenerator from "./QrCodeGenerator/QrCodeGenerator";

export default function RegisterPage() {
  return (
    <StyleDiv>
      <div>
        <div>
          <QrCodeGenerator AccountNumber={6765765}></QrCodeGenerator>
        </div>
      </div>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  background-color: #0c134f;
  height: 100vh;
  color: #fff;
`;
