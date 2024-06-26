// src/Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Compound from "../Compound/Compound";
import Render from "./Render";
import Navbar from "../Navbar/Navbar";
import HOC from "../HOC/HOC";
import Layout from "../Layout/Layout";
const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compound" element={<Compound />} />
        <Route path="/render" element={<Render />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/hoc" element={<HOC />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
