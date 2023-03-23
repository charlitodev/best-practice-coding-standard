import React, { useContext, useState } from "react";
import { HoverContextProvider } from "../../context/HoverContext";
import { userLogo } from "../../configs/externalUrl";

const MediaIndex = ({ thumbnail, title, youtuber, views }) => {
  const [isHovered, setIsHovered] = useState(false);
  var timeout;

  const handleMouseEnter = () => {
    if (timeout != null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      setIsHovered(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (timeout != null) {
      clearTimeout(timeout);
      setIsHovered(false);
      timeout = null;
    }
  };

  return (
    <div
      className="youtube__video__container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <iframe
          width="560"
          height="180"
          src="https://www.youtube.com/embed/Pv1QnqHvlg0?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="thumbnail"
        ></iframe>
      ) : (
        <img src={thumbnail} alt={thumbnail} className="thumbnail" />
      )}

      <div className="card">
        <img src={userLogo} alt={userLogo} className="user__logo" />
        <div className="card__details">
          <p>{title}</p>
          <small>{youtuber}</small>
          <br></br>
          <small className="views">{views}</small>
          <small>13 days ago</small>
        </div>
      </div>
    </div>
  );
};

export default MediaIndex;
