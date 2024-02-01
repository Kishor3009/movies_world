// ShowDetails.js

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ShowDetails.css"; // Import the CSS file for styling
import BookingForm from "./BookingForm";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="show-details-container">
      {show ? (
        <div className="show-card">
          <img
            src={show.image?.medium}
            alt={show.name}
            className="show-image"
          />
          <div className="card-content">
            <h1 className="show-title">{show.name}</h1>
            <p className="show-summary">{show.summary.replace('<p>',"").replace('</p>',"")
              }</p>
            <div className="action-links">
              <Link to="/showlist" className="back-link">
                Back to Show List
              </Link>
              <Link to={`/booking/${id}`} className="booking-link">
                Book Tickets
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;
