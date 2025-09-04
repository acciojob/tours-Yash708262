import React from "react";
import Tour from "./Tour"; 
function Tours({ tours, removeTour }) {
  return (
    <div>
      {tours.map(tour => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
}
export default Tours;