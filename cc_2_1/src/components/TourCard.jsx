import React from 'react';

function TourCard({ tour, removeTour }) {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-details">
        <h2>{name}</h2>
        <p>{info}</p>
        <p className="price">${price}</p>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default TourCard;
