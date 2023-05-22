import React, { useEffect, useRef, useState } from "react";

export default function AddProduct() {
  const [inputProductQrCode, setInputProductQrCode] = useState("");
  const [productQrCode, setProductQrCode] = useState([]);
  const [productQrCodeWithQty, setProductQrCodeWithQty] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    if (
      inputProductQrCode.charAt(0) === "e" &&
      inputProductQrCode.at(-1) === "e"
    ) {
      timerQrCode();
    }
  }, [inputProductQrCode]);

  useEffect(() => {
    const data = productQrCode;

    const result = data.reduce(function (prev, curr) {
      const index = prev.findIndex((el) => el.name === curr);

      if (index !== -1) {
        prev[index].count += 1;
      } else {
        prev.push({ name: curr, count: 1 });
      }

      return prev;
    }, []);

    console.log(result);
    setProductQrCodeWithQty(result);
  }, [productQrCode]);

  const timerQrCode = () => {
    setTimeout(() => {
      setProductQrCode([...productQrCode, inputProductQrCode]);

      setInputProductQrCode("");
      ref.current.focus();

      filterArray();
    }, 500);
  };

  const filterArray = () => {
    console.log("tt");
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
        <h2>
          Value :{" "}
          {productQrCodeWithQty.map((dt) => (
            <h3>
              barcode : {dt.name} - Qty : {dt.count}
            </h3>
          ))}
        </h2>
      </div>
      <button onClick={() => ref.current.focus()}>focus</button>
    </div>
  );
}
