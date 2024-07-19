import React, { useEffect, useState } from 'react';
//import './RatingsList.css';

const RatingsList = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetch('/api/ratings/');
        if (response.ok) {
          const data = await response.json();
          setRatings(data);
        }
      } catch (err) {
        console.error('Failed to fetch ratings');
      }
    };
    fetchRatings();
  }, []);

  return (
    <div className="ratings-list">
      <h2>User Ratings</h2>
      {ratings.length > 0 ? (
        ratings.map((rating) => (
          <div key={rating.id} className="rating">
            <p>Rating: {rating.rating} Stars</p>
            <p>Comment: {rating.comment}</p>
            <p>User: {rating.user.username}</p>
            <p>Date: {new Date(rating.created_at).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No ratings yet</p>
      )}
    </div>
  );
};

export default RatingsList;
