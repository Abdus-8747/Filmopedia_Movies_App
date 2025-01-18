import React from "react";
import Movies from "./Movies";
import Search from './Search'
import Footer from "./Footer";

const Home = () => (
  <div>
    <div className="container">
        <Search />
        <Movies />
        <Footer />
        
      </div>
  </div>
);

export default Home;