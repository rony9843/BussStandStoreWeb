import QRCode from "qrcode";
import React, { useEffect, useState } from "react";

export default function QrCodeGenerator({ AccountNumber }) {
  /**
     * 
        <input
          type="text"
          id="message"
          name="message"
          onChange={(e) => setQrCodeInput(e.target.value)}
        />
     */

  const [QrCodeImg, setQrCodeImg] = useState();

  const generateQrCode = async (props) => {
    try {
      const res = await QRCode.toDataURL(`"${props}"`);
      console.log(res);
      setQrCodeImg(res);
    } catch (error) {
      console.log("error for qrcode ", error);
    }
  };

  useEffect(() => {
    generateQrCode(AccountNumber);
  }, [AccountNumber]);

  return (
    <div>
      <div className="w-100">
        <img style={{ width: "50%" }} src={QrCodeImg} alt="" />
      </div>
    </div>
  );
}
