// App.js
import React from 'react';
import Header from './Header';
import ReservationForm from './ReservationForm';
import homeimage from './homeimage.jpg';
import footer from './logolemon.jpg';

const App = () => {
  return (
    <div>
      <Header/>
      <img src={homeimage} alt="Home Page Image" style={{ width: '100%', height: 'auto', margin: '0 auto' }} />
      <ReservationForm/>
      <img src={footer} alt="Footer Little Lemon" style={{ width: '100%', height: 'auto', margin: '0 auto' }}/>
    </div>
  );
}

export default App;

