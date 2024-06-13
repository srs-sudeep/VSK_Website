import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Contact from '../data/Lottie/contact us.json';

const ContactUs = () => {
  const [isPortrait, setIsPortrait] = React.useState(window.innerWidth < window.innerHeight);

  React.useEffect(() => {
    const onResize = () => setIsPortrait(window.innerWidth < window.innerHeight);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
     <section id="contact-us">
    <div className=" py-12 mx-auto max-w-screen-lg">
      <div className="text-center mb-12">
        <h1 className="text-[27px] font-semibold text-gray-800">
          <span className="bg-orange-400 text-white px-4 py-2 rounded-md">Contact</span> Us
        </h1>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-6 md:justify-center md:space-x-8">
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <iframe
            title="Google Maps"
            src="https://maps.google.com/maps?q=37.7749,-122.4194&z=15&output=embed"
            className="w-full h-64 border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full md:w-5/12">
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mr-4">
                <Player
                  src={Contact}
                  className="player"
                  loop
                  autoplay
                />
              </div>
              <div className="text-left">
                <p className="text-lg text-gray-800 mb-2 flex items-center">
                  <FaPhone className="mr-2 text-orange-400" /> <strong>Call Us:</strong> +123 456 7890
                </p>
                <p className="text-lg text-gray-800 mb-2 flex items-center">
                  <FaEnvelope className="mr-2 text-orange-400" /> <strong>Email Us:</strong> vsk@iitbhilai.ac.in
                </p>
                <p className="text-lg text-gray-800 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-orange-400" /> <strong>Visit Us:</strong> Raipur, Chattisgarh
                </p>
              </div>
            </div>
            <div className="text-left text-gray-700">
              <p className="mb-4"><strong>Office Hours:</strong> Monday - Friday, 9am - 5pm</p>
              <p className="mb-4"><strong>Customer Support:</strong> Available 24/7 via email</p>
              <p><strong>Follow Us:</strong> 
                <a href="#" className="text-orange-400 ml-2">Facebook</a> | 
                <a href="#" className="text-orange-400 ml-2">Twitter</a> | 
                <a href="#" className="text-orange-400 ml-2">Instagram</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactUs;