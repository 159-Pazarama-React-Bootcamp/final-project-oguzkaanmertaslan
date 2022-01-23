import React from "react";
import "./style.css";

const UserTicket = () => {
  return (
    <div className="user-ticket-container">
      <div className="user-ticket-code-area">
        <div className="user-ticket-header">
          <div className="succsess-logo">
          <img src="/succsess.jpg" alt="nike-just-do-it"/>
          </div>
          <h3>Başvurunuz başarılı bir şekilde alınmıştır</h3>
          <h4>Başvuru Kodunuz:</h4>
        </div>
      </div>
      <div className="user-ticket-information-area">
        <div className="user-ticket-left-area">
          <p>Ad: </p>
          <p>Soyad: </p>
          <p>Yaş: </p>
          <p>Tc: </p>
          <p>Problem: </p>
        </div>
        <div className="user-ticket-right-area">
          <p>Address: </p>
          <p>Photo: </p>
          <p>Code: </p>
          <p>Status: </p>
        </div>
      </div>
    </div>
  );
};

export default UserTicket;
