// ReservationForm.js
import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

const ReservationForm = ({ availableTimes }) => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are no validation errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      // TODO: Handle form submission logic (e.g., send data to server)
      console.log('Form submitted:', formData);
    }
  };

  // Function to validate form data
  const validateForm = (data) => {
    const errors = {};

    // Validate name
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate phone
    if (!data.phone.trim()) {
      errors.phone = 'Phone is required';
    }

    // Validate date
    if (!data.date) {
      errors.date = 'Date is required';
    }

    // Validate time
    if (!data.time) {
      errors.time = 'Time is required';
    }

    // Validate guests
    if (data.guests < 1) {
      errors.guests = 'Number of guests must be at least 1';
    }

    return errors;
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="reservation-form">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}

        <label htmlFor="date">Reservation Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        {errors.date && <p className="error-message">{errors.date}</p>}

        <label htmlFor="time">Reservation Time:</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && <p className="error-message">{errors.time}</p>}

        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleInputChange}
          min="1"
          required
        />
        {errors.guests && <p className="error-message">{errors.guests}</p>}

        <button type="submit">Submit Reservation</button>
      </form>
    </section>
  );
};

export default ReservationForm;
