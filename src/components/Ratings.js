// src/components/Ratings.js
import React, { useState } from 'react';
//import './Ratings.css';

const Ratings = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleRatingChange = (e) => setRating(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch('/api/ratings/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating,
          comment,
        }),
      });
      if (response.ok) {
        setSuccess('Rating submitted successfully!');
        setRating(0);
        setComment('');
      } else {
        setError('Failed to submit rating');
      }
    } catch (err) {
      setError('Failed to submit rating');
    }
  };

  return (
    <div className="ratings">
      <h2>Submit Your Rating</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <select value={rating} onChange={handleRatingChange}>
            <option value="0">Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <div>
          <label>Comment:</label>
          <textarea value={comment} onChange={handleCommentChange} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Ratings;
