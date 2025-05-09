import React, { useState, useEffect } from "react";
import Tours from "./Tours"; // Import Tours component
import data from "./data"; // Import the predefined tour data


const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTours(data); // Simulating a data fetch
      setLoading(false); // Hide loading after data is loaded
    }, 2000); // Simulating network delay
  }, []);

  const handleDeleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  const refreshPage = () => {
    setTours(data); // Reset to original data
  };

  return (
    <div id="main">
      <h1 className="title">Tour Packages</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : tours.length === 0 ? (
        <div>
          <p>No more tours</p>
          <button className="btn" onClick={refreshPage}>
            Refresh
          </button>
        </div>
      ) : (
        <Tours tours={tours} onDeleteTour={handleDeleteTour} />
      )}
    </div>
  );
};

export default App;
