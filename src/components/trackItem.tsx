import React, { FC } from "react";
import { getImg } from "../checkImg";
import { ITrack } from "../types/types";

interface TrackItemProps {
  track: ITrack;
}

const TrackItem: FC<TrackItemProps> = ({ track }) => {
  return (
    <div className="track">
      <button className="clear_btn">
        <img src="icons/play.svg" alt="play" width="50" height="50" />
      </button>
      <img
        src={getImg(track.image[3]["#text"])}
        width="50"
        height="50"
        alt="track"
      />
      <a href="" className="h_link">
        <img src="icons/heart.svg" alt="" width="25" height="25" />
      </a>
      <span className="song">{track.name}</span>
      <span className="singer">{track.artist}</span>
      <span className="duration">listeners: {track.listeners}</span>
    </div>
  );
};

export default TrackItem;
