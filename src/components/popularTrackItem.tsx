import React, { FC } from "react";
import { IPopularTrack } from "../types/types";

interface PopularTrackItemProps {
  popularTrack: IPopularTrack;
}
const PopularTrackItem: FC<PopularTrackItemProps> = ({ popularTrack }) => {
  return (
    <div className="popular_track_card">
      <a href={popularTrack.url} className="link">
        <div className="card_content">
          <img
            src={popularTrack.image[3]["#text"]}
            alt={popularTrack.name}
            width="75"
            height="75"
          />
          <div className="card_text">
            <span className="track_name">{popularTrack.name}</span>
            <span className="track_group"> {popularTrack.artist.name} </span>
            <span className="track_ganre">
              listeners: {popularTrack.listeners}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PopularTrackItem;
