import React, { useEffect, useRef } from "react";

import ReactDOM from "react-dom/client";

export const Scene4 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch((err) => {
          console.log("Autoplay with sound blocked:", err);
        });
      }
    }, 500); // 0.5 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <p style={{ border: "none" }}>Вы сгорели!</p>
      <video ref={videoRef} autoPlay muted loop src="public/burned.MP4"></video>
    </div>
  );
};
