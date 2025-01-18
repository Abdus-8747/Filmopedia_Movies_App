import React, { useEffect, useState, useContext } from "react";

const AppContext = React.createContext();
export  const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;
const AppProvider = ({ children }) => {
 
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [query, setQuery] = useState("titanic");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search || []);
        setIsError(null); // Clear any previous errors
      } else {
        setIsError(data.Error || "Something went wrong.");
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setIsError("Failed to fetch movies.");
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 700);

    return () => clearTimeout(timeOut);
  }, [query]);

  return (
    <AppContext.Provider value={{ movies, isLoading, isError, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
