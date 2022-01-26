import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTicket } from "../../redux/features/ticketsSlice";
import Select from "react-select";
import { updateTicket } from "../../services";
import "./style.css";

const StatusTicketPage = () => {
  const ticket = useSelector(selectTicket);
  const [input, setInput] = useState();
  const [status,setStatus]=useState(ticket.status);
  
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const options = [
    { value: "Bekliyor", label: "Bekliyor" },
    { value: "Reddedildi", label: "Reddedildi" },
    { value: "Kabuledildi", label: "Kabul Edildi" },
  ];
  const updatedTicket = () => {
    updateTicket(ticket.id,{description:input,status:status.value}
      );
  };
  return (
    <div className="status-page-container">
      <div className="status-title">
        <h2>Başvuru Durumu: {ticket.status} </h2>
      </div>
      <div className="status-page-area">
        <div className="status-ticket-left-area">
          <p>Ad: {ticket.name}</p>
          <p>Soyad: {ticket.surname}</p>
          <p>Yaş: {ticket.age}</p>
          <p>Tc: {ticket.tc}</p>
          <p>Problem: {ticket.problem}</p>
          <div className="admin-area">
            {isLoggedIn ? (
              <>
                <p>Durumu Güncelle: </p>{" "}
                <div className="select-box">
                  <Select options={options} value={status} onChange={setStatus} />
                </div>{" "}
              </>
            ) : null}
          </div>
        </div>
        <div className="status-ticket-right-area">
          <p>Adres: {ticket.address}</p>
          <p>Dosya: </p>
          <p>Başvuru Kodu: {ticket.code}</p>
          <p>Durum: {ticket.status}</p>
          <p>Açıklama: {ticket.description}</p>
          <div className="admin-area">
            {isLoggedIn ? (
              <div className="admin-right-area">
                <div className="admin-input-area">
                  <p>Açıklamayı Güncelle: </p>{" "}
                  <div className="input-area">
                    <input
                      className="inn"
                      type="text"
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </div>{" "}
                </div>
                <div className="admin-buton">
                  <button onClick={updatedTicket} className="admin-button-area">
                    Güncelle
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusTicketPage;
