import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Auth, Profile, NotFound, Registration, Guide, About, Product } from "../pages";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/signup" element={<Registration/>} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/guide" element={<Guide/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;