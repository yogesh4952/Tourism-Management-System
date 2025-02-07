import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const testimonials = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/100",
    rating: 5,
    review: "The experience was absolutely amazing! The guide was knowledgeable and the hospitality was top-notch.",
  },
  {
    name: "Sarah Smith",
    image: "https://via.placeholder.com/100",
    rating: 4,
    review: "Beautiful destinations and very well-organized tours. Highly recommended!",
  },
  {
    name: "Michael Brown",
    image: "https://via.placeholder.com/100",
    rating: 5,
    review: "A truly unforgettable experience. Everything was seamless and enjoyable.",
  },
  {
    name: "Emily Johnson",
    image: "https://via.placeholder.com/100",
    rating: 4,
    review: "Great guides and excellent accommodations. Will definitely book again!",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 text-white rounded-lg relative">
      <h2 className="text-2xl font-bold text-center mb-4">What Our Guests Say</h2>
      <div className="flex flex-col items-center text-center space-y-4">
        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-20 h-20 rounded-full border-2 border-gray-400" />
        <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-500"} />
          ))}
        </div>
        <p className="text-gray-300 italic">"{testimonials[currentIndex].review}"</p>
      </div>
      <button onClick={prevTestimonial} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600">
        <MdArrowBack size={24} />
      </button>
      <button onClick={nextTestimonial} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600">
        <MdArrowForward size={24} />
      </button>
    </div>
  );
};

export default Testimonial;
