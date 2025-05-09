import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <div className="tour-info">
        {isExpanded ? info : `${info.slice(0, 200)}...`}
        <button onClick={toggleDescription}>
          {isExpanded ? "See Less" : "Show More"}
        </button>
      </div>
      <div className="tour-price">
        <p>
          <strong>Price: ${price}</strong>
        </p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        Remove Tour
      </button>
    </div>
  );
};

export default Tour;
