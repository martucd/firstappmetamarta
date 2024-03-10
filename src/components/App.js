// App.js
import React from 'react';
import Header from './Header';
import ReservationForm from './ReservationForm';
import homeimage from './homeimage.jpg';

const App = () => {
  return (
    <div>
      <Header/>
      <img src={homeimage} alt="Home Page Image" style={{ width: '100%', height: 'auto', margin: '0 auto' }} />
      <ReservationForm/>
    </div>
  );
}

export default App;

