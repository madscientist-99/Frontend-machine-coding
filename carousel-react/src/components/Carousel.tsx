import { useEffect, useState, useRef } from "react";

const Carousel = ({
  images = [], 
  isLoading = false, 
  imageLimit = images.length,
  // customPrevButton,
  // customNextButton,
  imagePerSlide = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  const imgRef = useRef(null);

  useEffect(() => {
    if(images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images]);

  const goToPrev = () => {
    setCurrentIndex(prevIndex => prevIndex===0? images.length - 1 : prevIndex - 1);
  };
  const goToNext = () => {
    setCurrentIndex(prevIndex => prevIndex === images.length-1 ? 0 : prevIndex + 1);
  };

  console.log(imgRef.current.offsetWidth);
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="carousel">
      <div className="image-container">
        {images.slice(0, imageLimit > images.length ? images.length : imageLimit).map((image, index) => {
           return <img 
              ref={imgRef}
              key={image.id}
              src={image.url}
              alt={image.title}
              className="image"
            />
          })}
      </div>
      <button className="btn prev" onClick={goToPrev}>Prev</button>
      <button className="btn next" onClick={goToNext}>Next</button>
    </div>
  )
}

export default Carousel;