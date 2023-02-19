import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import SearchPage from "../pages/search";
function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default MainRouter;
