import React, { useState } from "react";
import "./style.css";
const CheckTicket = () => {
  const [input,setInput]=useState("");

  return (
    <div className="check-page-area">
      <div className="check-title">
        <h1>Başvuru Durumunuzu Sorgulayın</h1>
      </div>
      <div className="check-subtitle">
        <h4>Başvurunuzu size verilen kod ile sorgulayabilirsiniz</h4>
      </div>
      <div className="input-area">
        <input className="input1" type="text" name="code" value={input} placeholder="Başvuru Takip Kodunuz" onChange={e=>setInput(e.target.value)}/>
      </div>
      <div className="buton">
        <button className="buttons">Başvuru Sorgula</button>
      </div>
    </div>
  );
};

export default CheckTicket;
