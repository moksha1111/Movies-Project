import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <a className="movie-card">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "/no-movie.png"
        }
      />
      <div className="mt-4">
        <h3>{movie.title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>

          <span>•</span>
          <p className="year">{movie.release_date.split("-")[0]}</p>
          <span>•</span>
          <span className="lang">{movie.original_language}</span>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
