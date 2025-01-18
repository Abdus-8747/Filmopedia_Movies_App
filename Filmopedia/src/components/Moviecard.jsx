import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from "react-router-dom";

function Moviecard() {
  const { id } = useParams(); // Get the id from the URL params
  const [singleMovie, setSingleMovie] = useState(null); // State for single movie data
  const [loading, setLoading] = useState(true); // Loading state for single movie fetch
  const [error, setError] = useState(null); // Error state

  // Fetch single movie by id
  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`);
        const data = await response.json();
        if (data.Response === "True") {
          setSingleMovie(data);
        } else {
          setSingleMovie(null); // If movie not found
          setError("Movie not found.");
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
        setError("Failed to fetch movie.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error"><p>{error}</p></div>;
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        {singleMovie ? (
          <>
            <figure>
              <img src={singleMovie.Poster} alt={singleMovie.Title} />
            </figure>
            <div className="card-content">
              <p className="title">{singleMovie.Title}</p>
              <p className="card-text">{singleMovie.Released}</p>
              <p className="card-text">{singleMovie.Genre}</p>
              <p className="card-text">{singleMovie.imdbRating} / 10</p>
              <p className="card-text">{singleMovie.Country}</p>
              <NavLink to="/" className="back-btn">
                Go Back
              </NavLink>
            </div>
          </>
        ) : (
          <div>Movie not found!</div>
        )}
      </div>
    </section>
  );
}

export default Moviecard;
