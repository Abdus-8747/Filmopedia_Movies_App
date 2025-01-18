import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
//import Movies from "./components/Movies";
import Moviecard from "./components/Moviecard";
import Error from "./components/Error";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Moviecard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;