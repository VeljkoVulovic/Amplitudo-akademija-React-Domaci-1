import React from "react";
import Image from "../Image/Image";
import "./IdCard.css";

const IdCard = ({ name, date, city, image }) => {
  return (
    <div className="id-card">
      <div>
        <Image src={image} />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <b>Date:</b> <i>{date}</i>
      </div>
      <div>
        <b>City:</b> {city}
      </div>
    </div>
  );
};

export default IdCard;
