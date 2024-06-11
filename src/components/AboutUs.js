import React from 'react';
import background_image from '../data/background_about_us.jpeg';
import about_us_image from '../data/samagra siksha logo.png';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background_image})` }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0 flex py-16 px-20 justify-center">
        <div className="bg-white bg-opacity-75 backdrop-blur-lg rounded-lg p-10 w-full mx-4">
        <h1 className="text-3xl font-bold mt-4 mb-4 text-center texthead leading-relaxed font-[600]"><span className='bg-orange-400 px-1 py-1 bg-opacity rounded-md text-[#fff]'>About</span> Us</h1>
          <div className="flex px-20 flex-col lg:flex-row md:px-8 lg:px-16 mt-16" >
            <div className="w-1/3 pr-16 ">
              <img src={about_us_image} alt="About Us" className="rounded-lg w-full h-full object-cover" />
            </div>
            <div className="w-2/3 flex mt-1 pr-10">
              <div>
                <p className="text-[22px] font-sora">
                At Vidya Samiksha Kendra, our mission is to significantly enhance the academic performance of students while empowering teachers through innovative educational strategies and the optimal use of available resources. By fostering an environment where learning thrives, we are dedicated to unlocking the full potential of every student.                </p>
                <p className="text-[22px] mt-6 font-sora">
                At VSK, we believe in the power of data-driven insights to enhance the monitoring and management of the education system. By meticulously analyzing vast datasets, we identify trends, gaps, and opportunities for improvement, ensuring that every student's needs are met with precision and care. This comprehensive approach enables us to provide personalized learning experiences, fostering academic excellence and holistic development.                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
