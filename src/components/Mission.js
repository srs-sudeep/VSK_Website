import React, { useState, useEffect, useRef } from 'react';

const Mission = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
    const totalSlides = 5; // Total number of slides

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const width = carouselRef.current.children[0].offsetWidth;
        carouselRef.current.style.transform = `translateX(-${currentSlide * width}px)`;
    }, [currentSlide]);

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-center mb-16 text-3xl">Our Mission</h1>
            <div className="relative overflow-hidden">
                <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out w-full">
                    {["Jason Walker", "Dave Wood", "Nathan Jones", "Mark Jones", "James Wood"].map((name, index) => (
                        <div key={index} className="flex-shrink-0 w-full text-center">
                                <div className="relative overflow-hidden w-24 h-24 rounded-full mx-auto border-5 border-white shadow-inner shadow-gray-500">
                                    <img src={`img/${index + 1}.jpg`} alt="" className="w-full" />
                                </div>
                                <div className="mt-6">
                                    <p className="leading-tight text-center mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatibus!
                                    </p>
                                    <h2 className="uppercase font-light mt-4 text-center">- {name}</h2>
                                </div>
                        </div>
                    ))}
                </div>
                <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg focus:outline-none">Prev</button>
                <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg focus:outline-none">Next</button>
            </div>
            <div className="text-center mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        className={`inline-block h-5 w-5 bg-white rounded-full mx-1 ${currentSlide === index ? 'opacity-100' : 'opacity-50'}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Mission;
