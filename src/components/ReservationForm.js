import React from 'react';
import './styles.css'; // Import the CSS file

const ReservationForm = () => {
  return (
    <section id="reservation-form">
      <h2>Reserve a Table</h2>
      <form action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="date">Reservation Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Reservation Time:</label>
        <input type="time" id="time" name="time" required />

        <label htmlFor="guests">Number of Guests:</label>
        <input type="number" id="guests" name="guests" min="1" required />
        <button type="submit">Submit Reservation</button>
      </form>
    </section>
  );
}

export default ReservationForm;

