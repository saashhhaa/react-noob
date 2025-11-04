import { useNavigate } from "react-router-dom";
import macBurned from "";

import "./scene2.css";

export const Scene2 = () => {
   const navigate = useNavigate();

  return ( 
    <div className="container">
      <img src="public/macBurned.jpg" alt="" />
      <div className="cover">
        <button onClick={() => navigate("/scene3")}>Сбежать</button>
        <button onClick={() => navigate("/scene4")}>
          идет медведь по лесу видит машина горит сел в нее и сгорел
        </button>
      </div>
    </div>
  );
};
