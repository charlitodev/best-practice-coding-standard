import React from "react";
import { genres } from "../../configs/genresData";

const GenresContainer = () => {
  return (
    <div className="genres__container">
      {genres.map((item, id) => {
        return (
          <p key={id} className="genres__categories">
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default GenresContainer;
