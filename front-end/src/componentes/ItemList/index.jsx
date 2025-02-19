import "./itemList.css";
import React from "react";
import SingleItem from "../SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} Populares</h2>

        {isHome ? (
          <Link to={path} className="main__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="item-list__container">
        {itemArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              {...currObj}
              key={`${title}-${index}`}
              idPath={idPath}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
