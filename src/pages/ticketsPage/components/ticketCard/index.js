import React from "react";

const TicketCard = ({item}) => {
  let statusStyle="";
  switch (item.status) {
    case "Bekliyor":
      statusStyle = "ticket-status-blue";
      break;
    case "Reddedildi":
      statusStyle = "ticket-status-red";
      break;
    case "Kabuledildi":
      statusStyle = "ticket-status-green";
      break;

    default:
      break;
  }
  return (
    <div className="tickets" key={item.code}>
      <p>{item.code}</p>
      <p>{item.name}</p>
      <p>{item.surname}</p>
      <p>{item.problem}</p>
      <p className={statusStyle}>{item.status}</p>
    </div>
  );
};

export default TicketCard;
