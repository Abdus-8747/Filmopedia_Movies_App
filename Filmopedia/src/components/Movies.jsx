import React from "react";
import { useGlobalContext } from "../context.jsx";
import { NavLink } from "react-router-dom";

function Movies() {
  const { movies, isLoading, isError } = useGlobalContext();

  // Loading state
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  // Error state
  if (isError) {
    return <div className="error"><p>{isError}</p></div>; // Corrected here
  }

  return (
    <section className="movie-page">
      <div className="grid grid-4-col">
        {movies.map((currMovie) => {
          const { imdbID, Title, Poster } = currMovie;
          const movieName = Title.length > 17 ? `${Title.substring(0, 17)}...` : Title;

          return (
            <NavLink to={`/movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>{movieName}</h2>
                  <img
                    src={Poster}
                    alt={Title}
                    onError={(e) => e.target.src = "https://via.placeholder.com/150"} // Optional fallback image
                  />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default Movies;
