import { useState } from "react";
import webdev from "../assets/webdev.jpg";
import manup from "../assets/man_up.jpg"


const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        webdev,
        manup,
        webdev,
        // "/docs/images/carousel/carousel-2.svg",
        // "/docs/images/carousel/carousel-3.svg",
        // "/docs/images/carousel/carousel-4.svg",
        // "/docs/images/carousel/carousel-5.svg",
    ];

    const handlePrev = () => {
        setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    return (
        <div id="default-carousel" className="relative w-full">
            {/* Carousel Wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute block w-full transition-all duration-700 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className="block w-full"
                        />
                    </div>
                ))}
            </div>

            {/* Slider Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === activeSlide ? "bg-blue-500" : "bg-gray-300"
                            }`}
                        aria-current={index === activeSlide}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>

            {/* Slider Controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
