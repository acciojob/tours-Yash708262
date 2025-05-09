import React from "react";
import Tour from "./Tour"; // Import the Tour component

const Tours = ({ tours, onDeleteTour }) => {
  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id} className="single-tour">
          <Tour {...tour} onDelete={onDeleteTour} />
        </div>
      ))}
    </div>
  );
};

export default Tours;
