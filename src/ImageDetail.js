import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

function ImageDetail() {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const imageDoc = await getDoc(doc(firestore, "images", id));
      if (imageDoc.exists()) {
        setImage(imageDoc.data());
      }
    };
    fetchImage();
  }, [id]);

  if (!image) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div>
        <img src={image.url} alt="" style={{ maxWidth: "80vw", maxHeight: "80vh", objectFit: "contain" }} />
        <p>Timestamp: {image.timestamp?.toDate().toString()}</p>
      </div>
    </div>
  );
}

export default ImageDetail;
