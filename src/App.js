// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookingForm from './components/BookingForm';
import Footer from './components/common/Footer'; // Import the Footer component

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/details/:id" element={<ShowDetails />} />
        <Route path="/booking/:id" element={<BookingForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
