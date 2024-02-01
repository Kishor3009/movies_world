import React, { useState, useEffect } from 'react';
import Card from './common/Card';
import Footer from './common/Footer'; // Import the Footer component
import './ShowList.css'; // Import the CSS file for styling
import movieImage from './movie.jpeg'; // Import the movie image

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setShows(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="image-container">
        <img src={movieImage} alt="Movie" />
      </div>
      <div className="show-list">
        {shows.map((show) => (
          <Card key={show.show.id} show={show.show} />
        ))}
      </div>
      <Footer /> {/* Place the Footer component at the end of the ShowList page */}
    </div>
  );
};

export default ShowList;
