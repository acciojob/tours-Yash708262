import React from "react";
import { useState } from "react";
function Tour({ tour, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="tour">
      <img src={tour.image} alt={tour.name} />
      <h3>{tour.name}</h3>
      <p>${tour.price}</p>
      <p id={`tour-item-para-${tour.id}`}> 
        {showMore ? tour.info : tour.info.substring(0, 200)}
        <button id={`see-more-${tour.id}`} onClick={() => setShowMore(!showMore)}>
          {showMore ? 'See less' : 'See more'}
        </button>
      </p>
      <button  id={`delete-btn-${tour.id}`} onClick={() => removeTour(tour.id)}>Remove</button>
    </div>
  );
}
export default Tour;