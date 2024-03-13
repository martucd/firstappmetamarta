// App.js
import React, { useState } from 'react';
import Header from './Header';
import ReservationForm from './ReservationForm';
import homeimage from './homeimage.jpg';
import footer from './logolemon.jpg';

const App = () => {

  const initialAvailableTimes = ['12:00 PM', '1:00 PM', '6:00 PM', '7:00 PM'];

  const [availableTimes, setAvailableTimes] = useState(initialAvailableTimes);

  return (
    <div>
      <Header/>
      <img src={homeimage} alt="Home Page Image" style={{ width: '100%', height: 'auto', margin: '0 auto' }} />
      <ReservationForm availableTimes={availableTimes} />
      <img src={footer} alt="Footer Little Lemon" style={{ width: '100%', height: 'auto', margin: '0 auto' }}/>
    </div>
  );
}

export default App;

