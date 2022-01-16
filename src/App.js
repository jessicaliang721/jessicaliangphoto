import React from 'react';
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Container from "@mui/material/Container";

const App = () => {
  return (
      <div>
        <Navbar />
          <Container maxWidth="xl">
              <Outlet />
          </Container>
      </div>
  );
}

export default App;
