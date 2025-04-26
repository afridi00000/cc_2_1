import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, removeTour }) {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
}

export default Gallery;
