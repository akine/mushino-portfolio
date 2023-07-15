import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './ImageList.css';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesCollection = await getDocs(collection(firestore, 'images'));
      setImages(imagesCollection.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })));
    };
    fetchImages();
  }, []);

  return (
    <div className="image-grid">
      {images.map((image) => (
        <Link to={`/images/${image.id}`} key={image.id}>
          <div className="image-item">
            <img src={image.url} alt="" className="image" />
            <p>Timestamp: {image.timestamp?.toDate().toString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ImageList;
