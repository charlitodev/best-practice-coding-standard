import React from "react";
import { mediaData } from "../../configs/mediaData";

const YoutubeShorts = () => {
  return (
    <div className="youtube__shorts">
      <h3>Shorts</h3>
      <div className="youtube__shorts__container">
        {mediaData.map((item, id) => {
          return (
            <div key={id} className="youtube__container">
              <img
                src={item.thumbnail}
                alt={item.thumbnail}
                className="youtube__shorts__thumnail"
              />
              <p>{item.title}</p>
              <small>{item.views}</small>
            </div>
          );
        })}
      </div>
      <i className="fa-solid fa-caret-down"></i>
    </div>
  );
};

export default YoutubeShorts;
