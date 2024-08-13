import { useEffect, useState } from 'react';
import './App.css'
import Carousel from './components/Carousel';

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
      // imagePerSlide={}
      // imageLimit={}
      // customPrevButton={}
      // customNextButton={}
    />
  </div>;
};

export default App;
