import React from "react";
import { useSelector } from "react-redux";
import { selectTicket } from "../../redux/features/ticketsSlice";
import "./style.css";

const StatusTicketPage = () => {
  const ticket=useSelector(selectTicket)
  console.log(ticket);
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
        </div>
        <div className="status-ticket-right-area">
          <p>Adres: {ticket.address}</p>
          <p>Dosya: </p>
          <p>Başvuru Kodu: {ticket.code}</p>
          <p>Durum: {ticket.status}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusTicketPage;
