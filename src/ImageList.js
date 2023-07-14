import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import './ImageList.css'; // CSSファイルをインポート

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesCollection = await getDocs(collection(firestore, 'images'));
      setImages(imagesCollection.docs.map(doc => {
        return {...doc.data(), id: doc.id};
      }));
    };
    fetchImages();
  }, []);

  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.url} alt="" className="image" />
          <p>Timestamp: {image.timestamp?.toDate().toString()}</p>
        </div>
      ))}
    </div>
  );
}

export default ImageList;
