import React from "react";
import { useState } from "react";
function Tour({ tour, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="tour">
      <img src={tour.image} alt={tour.name} />
      <h3>{tour.name}</h3>
      <p>${tour.price}</p>
      <p>
        {showMore ? tour.info : tour.info.substring(0, 200)}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'See less' : 'Show more'}
        </button>
      </p>
      <button onClick={() => removeTour(tour.id)}>Remove</button>
    </div>
  );
}
export default Tour;