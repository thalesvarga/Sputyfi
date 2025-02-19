import "./main.css";
import React from "react";
import ItemList from "../ItemList";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

const MainPrincipal = ({type = undefined}) => {

  return (
    <div className="main">

      {type === "artists" || type === undefined ? <ItemList
        title="Artistas"
        items={5}
        itemArray={artistArray}
        path="/artists"
        idPath="/artist"
      /> :<></>}
 
 
    {type === "songs" || type === undefined ? <ItemList
        title="Músicas"
        items={20}
        itemArray={songsArray}
        path="/songs"
        idPath="/song"
      />: <></>}
      
    </div>
);
};


export default MainPrincipal;
