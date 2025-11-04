import React from "react";
import { Routes, Route } from "react-router-dom";
import { Scene1 } from "./components/Scene1.jsx";
import { Scene2 } from "./components/Scene2/Scene2.jsx";
import { Scene3 } from "./components/Scene3/Scene3.jsx";
import { Scene4 } from "./components/Scene4.jsx";
import { Scene5 } from "./components/Scene5.jsx";
import "./main.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Scene1 />} />
      <Route path="/scene2" element={<Scene2 />} />
      <Route path="/scene3" element={<Scene3 />} />
      <Route path="/scene4" element={<Scene4 />} />
      <Route path="/scene5" element={<Scene5 />} />
    </Routes>
  );
};
