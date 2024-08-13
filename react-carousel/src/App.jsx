import { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel.jsx';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  //http://jsonplaceholder.typicode.cim/photos?_limit=8
  const fetchImages = async(imgLimit) => {
    setLoading(true);
    try {
      const response = await fetch(
          `http://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(8);
  }, [])

  return <div className='carousel-container'>
    <Carousel 
      images={images}
      isLoading={loading}
      // omImgClick = {(image, index) => {}}
      imagePerSlide={3}
      imageLimit={8}
      customPrevButton={(onClick) => 
      <button className='btn prev' 
        style={{background: "red"}}
        onClick={onClick}>
        Prev
      </button>
      }
      customNextButton={(onClick) => 
        <button className='btn next' 
        style={{background: "red"}}
        onClick={onClick}>
          Next
        </button>}
    />
  </div>;
};

export default App;
