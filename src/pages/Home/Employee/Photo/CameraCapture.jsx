import React, { useRef, useState } from "react";
import GetPhoto from "../../../../utils/GetPhoto";

const CameraCapture = ({ setImageUrl }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  // Start the camera (request back camera)
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" }, // Ideal back camera
        },
      });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error accessing the camera: ", err);
      setError("Unable to access the camera");
    }
  };

  // Capture photo
  const takePhoto = async () => {
    if (!videoRef.current) return;

    const width = videoRef.current.videoWidth;
    const height = videoRef.current.videoHeight;

    if (canvasRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      const ctx = canvasRef.current.getContext("2d");
      ctx.drawImage(videoRef.current, 0, 0, width, height);

      const imageData = canvasRef.current.toDataURL("image/png");
      setPhoto(imageData);
      const imageUrl = await GetPhoto(imageData.split(",")[1]);
      setImageUrl(imageUrl);
    } else {
      setError("Error capturing the photo");
    }
  };

  return (
    <div>
      <div>
        <video ref={videoRef} autoPlay style={{ width: "300px" }} />
        <button onClick={startCamera}>Start Cameraa</button>
        <button onClick={takePhoto}>Take Photo</button>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />

      {photo && (
        <div>
          <h3>Captured Photo:</h3>
          <img src={photo} alt="Captured" />
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CameraCapture;
