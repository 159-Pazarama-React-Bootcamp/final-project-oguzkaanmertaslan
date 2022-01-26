import React from "react";
import { useSelector } from "react-redux";
import { selectUserTicket } from "../../redux/features/userTicketSlice";
import "./style.css";

const UserTicket = () => {
  const userTicket = useSelector(selectUserTicket);
  const ticket = userTicket[0];
  
  return (
    <div className="user-ticket-container">
      <div className="user-ticket-code-area">
        <div className="user-ticket-header">
          <div className="succsess-logo">
            <img src="/succsess.jpg" alt="nike-just-do-it" />
          </div>
          <h3>Başvurunuz başarılı bir şekilde alınmıştır</h3>
          <h4>Başvuru Kodunuz: {ticket.item.code}</h4>
        </div>
      </div>
      <div className="user-ticket-information-area">
        <div className="user-ticket-left-area">
          <p>
            Ad: <b>{ticket.item.name} </b>{" "}
          </p>
          <p>
            Soyad: <b>{ticket.item.surname}</b>{" "}
          </p>
          <p>
            Yaş: <b>{ticket.item.age}</b>{" "}
          </p>
          <p>
            Tc: <b>{ticket.item.tc} </b>
          </p>
          <p>
            Problem: <b>{ticket.item.problem}</b>
          </p>
        </div>
        <div className="user-ticket-right-area">
          <p>
            Adres: <b>{ticket.item.address}</b>
          </p>
          <p>Photo: <img src={ticket.item.file} height="200px" /></p>
          <p>
            Başvuru Kodu: <b>{ticket.item.code}</b>
          </p>
          <p>
            Durum: <b>{ticket.item.status}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserTicket;
