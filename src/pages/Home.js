import React from 'react';
import ContactUs from '../components/ContactUs';
import Mission from '../components/Mission';
import Carousel from '../components/Carousel';
import Map from '../components/Map'; // Import the Map component
import AboutUs from '../components/AboutUs';
import 'animate.css';
const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Map />
      <Mission />
      <ContactUs />
    </div>
  );
}

export default Home;