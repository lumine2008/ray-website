import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MediaPage from './components/MediaPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 初始化 AOS 动画库
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/media.html" element={<MediaPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
