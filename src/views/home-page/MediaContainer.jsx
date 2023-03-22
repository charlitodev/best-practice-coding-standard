import React, { useContext } from "react";
import { HoverContextProvider } from "../../context/HoverContext";
import { mediaData } from "../../configs/mediaData";

import YoutubeShorts from "./YoutubeShorts";
import GenresContainer from "./GenresContainer";
import MediaIndex from "./MediaIndex";

const MediaContainer = () => {
  return (
    <div>
      <GenresContainer />
      <div className="media__container">
        {mediaData.map((item) => {
          return (
            <MediaIndex
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              youtuber={item.youtuber}
              views={item.views}
            />
          );
        })}
      </div>
      <YoutubeShorts />
      <div className="media__container">
        {mediaData.map((item) => {
          return (
            <MediaIndex
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              youtuber={item.youtuber}
              views={item.views}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MediaContainer;
