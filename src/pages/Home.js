import React from 'react';
import ContactUs from '../components/ContactUs';
import Map from '../components/Map'; // Import the Map component

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ContactUs />
      <Map /> {/* Include the Map component */}
    </div>
  );
}

export default Home;