import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import App from './App';
import Bongos from './Bongos';
import Characters from './Characters';
import Bucky from './Bucky';
import WishList from './WishList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Define the routes */}
      <Route path="/" element={<App />} />
      <Route path="/bongos" element={<Bongos />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/bucky" element={<Bucky />} />
      <Route path="/wishlist" element={<WishList />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();