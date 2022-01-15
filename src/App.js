import React from 'react';
import { Link, Outlet } from "react-router-dom";

import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
      <div>
        <Navbar />
        <Outlet />
      </div>
  );
}

export default App;
