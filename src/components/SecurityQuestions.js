import React, { useState, useEffect } from 'react';
//import './SecurityQuestions.css';

const SecurityQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState({ question: '', answer: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/security-questions/')
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/validate-security-question/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => setMessage(data.message || data.error));
  };

  return (
    <div className="security-questions">
      <h2>Security Questions</h2>
      <form onSubmit={handleSubmit}>
        <select name="question" value={form.question} onChange={handleChange} required>
          <option value="" disabled>Select a question</option>
          {questions.map((q) => (
            <option key={q.id} value={q.question}>{q.question}</option>
          ))}
        </select>
        <input
          type="text"
          name="answer"
          placeholder="Answer"
          value={form.answer}
          onChange={handleChange}
          required
        />
        <button type="submit">Validate</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SecurityQuestions;
