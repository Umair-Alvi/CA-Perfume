import React, { useState } from 'react';

const ImageGallery = () => {
  // List of images for the gallery
  const images = ["/Asset1.png", "/Asset2.png", "/Asset2.png","/Asset1.png", "/Asset2.png", "/Asset2.png"];

  // State to hold the current index of the main image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle right arrow click (next image)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle left arrow click (previous image)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-gallery">
        {/* Thumbnail Images */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Thumbnail ${index + 1}`} 
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)} 
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button className="arrow left-arrow" onClick={handlePrev}>
        &#10094; {/* HTML code for left arrow */}
      </button>

      {/* Main Product Image */}
      <img src={images[currentIndex]} alt="Product" className="main-image" />

      {/* Right Arrow */}
      <button className="arrow right-arrow" onClick={handleNext}>
        &#10095; {/* HTML code for right arrow */}
      </button>

      
      
    </div>
  );
};

export default ImageGallery;
