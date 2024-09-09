// src/components/BookCarousel.jsx
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Book data
const booksData = [
  { id: 1, cover: "/solo.jpg" },
  { id: 2, cover: "/my.webp" },
  { id: 3, cover: "/demon.webp" },
];

const BookCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, 
  };

  return (
    <Slider {...settings} afterChange={(index) => setCurrentIndex(index)}>
      {booksData.map((book, index) => (
        <div key={book.id} className="carousel-item">
          <img src={book.cover} alt={`Book cover ${book.id}`} />
          <div className="carousel-overlay">
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BookCarousel;