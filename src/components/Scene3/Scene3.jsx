import React, { useRef, useState, useEffect } from "react";
import "./scene3.css";

export const Scene3 = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleParagraphClick = () => {
    setShowVideo(true);
  };

  useEffect(() => {
    if (showVideo && videoRef.current) {
      const video = videoRef.current;
      video.muted = false;
      video.play().catch((err) => {
        console.error("Не удалось запустить видео:", err);
      });
    }
  }, [showVideo]);

  return (
    <div className="container">
      <img src="public/macBurned.jpg" alt="mac burned" />
      <p onClick={handleParagraphClick} style={{ cursor: "pointer" }}>
        Товарищ Маргинал, а бортики !!!????
      </p>

      {showVideo && (
        <video
          ref={videoRef}
          src="public/abortici.MP4"
          loop
          autoPlay
          muted
          className="scene-video"
        />
      )}
    </div>
  );
};
