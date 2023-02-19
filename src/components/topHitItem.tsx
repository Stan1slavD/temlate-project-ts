import React, { FC } from "react";
import { ITopHit } from "../types/types";

interface TopHitItemProps{
    hit:ITopHit
}

const TopHitItem:FC<TopHitItemProps> = ({hit})=>{
  console.log(hit);
  return (
    <div className="hit_card">
      <a href="${data.url}" className="link">
        <img
          src={hit.image[3]["#text"]}
          height="150"
          alt="${data.name}"
          className="hit_img"
        />
        <div className="hit_text">
          <span className="autor">{hit.name}</span>
          <span className="ganre">listeners: {hit.listeners}</span>
        </div>
      </a>
    </div>
  );
}

export default TopHitItem;
