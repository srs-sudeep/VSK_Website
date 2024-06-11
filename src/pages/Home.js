import React from 'react';
import ContactUs from '../components/ContactUs';
import Mission from '../components/Mission';
import Carousel from '../components/Carousel';
import Map from '../components/Map'; // Import the Map component
import AboutUs from '../components/AboutUs';
const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Mission />
      <Map />
      <ContactUs />
    </div>
  );
}

export default Home;