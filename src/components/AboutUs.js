import React from 'react';
import background_image from '../data/background_about_us.jpeg';
import about_us_image from '../data/samagra siksha logo.png';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="relative h-screen bg-cover bg-center" style={styles.container}>
        {/* <div className="absolute inset-0 bg-gray-800 opacity-90"></div> */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white shadow-lg w-[79%] flex-row rounded-lg p-10 w-full mx-4" style={styles.card}>
        <h1 className="text-3xl font-bold mt-4 mb-4 text-center texthead leading-relaxed font-[600]"><span className='bg-orange-400 px-1 py-1 bg-opacity rounded-md text-[#fff]'>About</span> Us</h1>
          <div className="flex px-20 md:px-8 lg:px-16 mt-16 items-center" >
            <div className="w-1/3 pr-16 flex-col">
              <img src={about_us_image} alt="About Us" className="rounded-lg w-full h-full object-cover" />
            </div>
            <div className="w-2/3 flex mt-1 pr-10 flex-col">
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

const styles = {
  container: {
    background: "linear-gradient(to left, #fff 0%, #feebc8 50%, #fff 100%)"
  },
  card: {
    boxShadow: "0 20px 30px -5px rgba(254, 235, 200, 1), 0 8px 12px -4px rgba(254, 235, 200, 0.5)"
  }
}

export default AboutUsSection;
