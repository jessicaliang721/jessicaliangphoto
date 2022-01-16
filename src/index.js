import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Collections from "./routes/Collections";
import About from "./routes/About";
import Collection from "./routes/Collection";
import Shop from "./routes/Shop";
import Contact from "./routes/Contact";
import Home from "./routes/Home";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route index element={<Home />} />
                  <Route path="collections" element={<Collections />}>
                  </Route>
                  <Route path="collections/:collectionName" element={<Collection />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route
                      path="*"
                      element={
                          <main style={{ padding: "1rem" }}>
                              <p>There's nothing here!</p>
                          </main>
                      }
                  />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
