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
      <div></div>
    </div>
  );
}
