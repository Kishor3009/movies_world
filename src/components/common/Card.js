// Card.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // Import the CSS file for styling

const Card = ({ show }) => {
  return (
    <div className="card">
      <img src={show.image?.medium} alt={show.name} className="card-image" />
      <div className="card-content">
        <h3>{show.name}</h3>
        <p>
          <strong>Genres:</strong> {show.genres.join(', ')}
        </p>
        <p>
          <strong>Rating:</strong> {show.rating.average}
        </p>
        <Link to={`/details/${show.id}`}>See Details</Link>
      </div>
    </div>
  );
};

export default Card;
