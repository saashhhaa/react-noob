import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Scene1 = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.play().catch(err => {
      console.log("Автоплей заблокирован:", err);
    });
  }, []);

  const handleClick = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.play();
    }
  };

  return (
    <div className="container">
      <img
        onClick={handleClick}
        src={process.env.PUBLIC_URL + "/macdonalds.jpg"}
        alt="Macdonalds"
        style={{ cursor: "pointer" }}
      />
      <button onClick={() => navigate("/scene2")}>Поджечь</button>
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/pennivaize.mp3"}
        autoPlay
        loop
        muted
        hidden
      />
    </div>
  );
};
