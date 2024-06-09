import React from 'react';
import ContactUs from '../components/ContactUs';
import Mission from '../components/Mission';
import Map from '../components/Map'; // Import the Map component

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Map /> 
      <Mission />
      <ContactUs />
    </div>
  );
}

export default Home;