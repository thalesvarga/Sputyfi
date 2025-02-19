import "./singleItem.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ _id, image, banner, name, artist, idPath }) => {
  return (
    
    <Link to={`${idPath}/${_id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Foto de ${name}`}
          />
        </div>
        <FontAwesomeIcon icon={faCirclePlay} className="single-item__icon" />
      </div>

      <div className="single-item__texts">
        <h2 className="single-item__title">{name}</h2>
        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
