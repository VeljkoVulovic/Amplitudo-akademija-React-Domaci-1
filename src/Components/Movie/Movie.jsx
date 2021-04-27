import React from "react";
import Image from "../Image/Image";
import "./Movie.css";

const Movie = ({ name, year, genre, producer, actors, image }) => {
  const actorsLength = actors.length;
  return (
    <div className="movie-card">
      <div>
        <Image src={image} />
      </div>

      <div>
        <h4>{name}</h4>
      </div>
      <div className="movie-info">
        <div>
          <b>Year:</b> <i>{year}</i>
        </div>
        <div>
          <b>Genre:</b> {genre}
        </div>
        <div>
          <b>Producer:</b> {producer}
        </div>
        <div>
          <b>Actors: </b>
          {actors.map((actor, i) => {
            if (actorsLength === i + 1) {
              return actor;
            } else {
              return actor + ", ";
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Movie;
