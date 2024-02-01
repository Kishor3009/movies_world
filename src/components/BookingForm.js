import React, { useState, useEffect } from "react";
import "./BookingForm.css"; // Import the CSS file for styling
import { useParams } from "react-router-dom";

const BookingForm = () => {
  const { id } = useParams();
  const [Mname, setMname] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setMname(data.name);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    numberOfTickets: 1,
    prizeRange: 300,
  });

  const [totalPrize, setTotalPrize] = useState(300);

  useEffect(() => {
    // Set initial total prize when the component mounts
    updateTotalPrize(formData.numberOfTickets, formData.prizeRange);
  }, []); // Empty dependency array ensures it runs only once

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Check if the changed field is either numberOfTickets or prizeRange
    if (e.target.name === "numberOfTickets" || e.target.name === "prizeRange") {
      updateTotalPrize(formData.numberOfTickets, formData.prizeRange);
    }
  };

  const updateTotalPrize = (numberOfTickets, selectedPrizeRange) => {
    const totalPrice = numberOfTickets * parseInt(selectedPrizeRange, 10);
    setTotalPrize(totalPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your tickets for have been booked for ${Mname}. Total Prize: ${totalPrize}`
    );
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Book Tickets</h2>
        <p className="movie-name-info">You are booking tickets for {Mname}</p>
        <label className="form-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Number of Tickets:
          <input
            type="number"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
            className="form-input"
            min="1"
            required
          />
        </label>
        <label className="form-label">
          Prize Range:
          <select
            name="prizeRange"
            value={formData.prizeRange}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="300">300 First Row</option>
            <option value="400">400 Fourth Row</option>
            <option value="700">700 Sixth Row</option>
            <option value="1000">1000 Last two Rows</option>
          </select>
        </label>
        <p className="total-prize-info">Total Prize: ${totalPrize}</p>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
