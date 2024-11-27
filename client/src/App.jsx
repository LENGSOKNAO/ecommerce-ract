import React from "react";
import { Route, Routes } from "react-router";
import HomeScreen from "./screen/HomeScreen";
import Data from "./api/Data";
import Men from "./screen/Men";
import Jewelery from "./screen/Jewelery";
import Electronics from "./screen/Electronics";
import Women from "./screen/Women";
import ProductPage from "./screen/Page";
import Out from "./screen/Out";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/men" element={<Men />} />
      <Route path="/jewelery" element={<Jewelery />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/women" element={<Women />} />
      <Route path="/page/:id" element={<ProductPage />} />
      <Route path="/out" element={<Out />} />
    </Routes>
  );
};

export default App;
