import React, { FC } from "react";
import { getImg } from "../checkImg";
import { IArtist } from "../types/types";

interface IArtistProps{
    artist:IArtist
}

const ArtistItem:FC<IArtistProps>=({artist})=> {
  return (
    <div className="artist_card">
      <img
        src={getImg(artist.image[3]["#text"])}
        alt="artist"
        width="250"
        height="250"
      />
      <div className="artist_text">
        <span className="name">{artist.name}</span>
        <span className="listeners">{artist.listeners} listeners</span>
      </div>
    </div>
  );
}

export default ArtistItem;
