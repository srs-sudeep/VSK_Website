import React, {useRef, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video1 from "../data/videos/VID-20240609-WA0001.mp4";
import video2 from "../data/videos/VID-20240609-WA0002.mp4";
import video3 from "../data/videos/VID-20240609-WA0003.mp4";
import video4 from "../data/videos/VID-20240609-WA0004.mp4";
import video5 from "../data/videos/VID-20240609-WA0005.mp4";
import video6 from "../data/videos/VID-20240609-WA0006.mp4";
import video7 from "../data/videos/VID-20240609-WA0007.mp4";

const videos = [video1, video2, video3, video4, video5, video6, video7];

const Carousel = () => {
  const videoRefs = useRef([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    beforeChange: (current, next) => {
        if (videoRefs.current[current]) {
          videoRefs.current[current].pause();
        }
      },
    afterChange: (current) => {
        if (videoRefs.current[current]) {
          videoRefs.current[current].play();
        }
    },
  };

  useEffect(() => {
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="relative w-full">
            <video
              ref={el => videoRefs.current[index] = el}
              className="w-full object-cover transform scale-125"
              src={video}
              autoPlay
              loop
              muted
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 scale-125"></div> {/* Black overlay */}
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 sm:p-8 z-20">
          <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">Vidya Sameeksha Kendra</h1>
          <p className="text-md sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium">Education for all</p>
      </div>
    </div>
  );
};

export default Carousel;