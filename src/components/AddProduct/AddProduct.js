import React, { useEffect, useRef, useState } from "react";

export default function AddProduct() {
  const [inputProductQrCode, setInputProductQrCode] = useState("");
  const [productQrCode, setProductQrCode] = useState("");

  const [cursor, setCursor] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (
      inputProductQrCode.charAt(0) === "e" &&
      inputProductQrCode.at(-1) === "e"
    ) {
      timerQrCode();
    }
  }, [inputProductQrCode]);

  const timerQrCode = () => {
    setTimeout(() => {
      setProductQrCode(inputProductQrCode);
      setInputProductQrCode("");
      ref.current.focus();
    }, 500);
  };

  return (
    <div>
      <div>
        <input
          ref={ref}
          type="text"
          value={inputProductQrCode}
          onChange={(e) => setInputProductQrCode(e.target.value)}
        />
      </div>
      <div>
        <h2>Value : {productQrCode}</h2>
      </div>
    </div>
  );
}
