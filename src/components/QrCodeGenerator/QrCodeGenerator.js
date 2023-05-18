import React from "react";

export default function QrCodeGenerator({ QrCodeImg }) {
  /**
     * 
        <input
          type="text"
          id="message"
          name="message"
          onChange={(e) => setQrCodeInput(e.target.value)}
        />
     */

  return (
    <div>
      <div className="w-100">
        <img style={{ width: "50%" }} src={QrCodeImg} alt="" />
      </div>
    </div>
  );
}
