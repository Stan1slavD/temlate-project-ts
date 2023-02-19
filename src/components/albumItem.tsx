import React, { FC } from "react";
import { IAlbum } from "../types/types";
import { getImg } from "../checkImg";

interface AlbumItemProps {
  album: IAlbum;
}

const AlbumItem: FC<AlbumItemProps> = ({ album }) => {
  return (
    <div className="artist_card">
      <img
        src={getImg(album.image[3]["#text"])}
        alt="album"
        width="250"
        height="250"
      />
      <div className="artist_text">
        <span className="name">{album.name}</span>
        <span className="listeners">{album.artist}</span>
      </div>
    </div>
  );
};

export default AlbumItem;
