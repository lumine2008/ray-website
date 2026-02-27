import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MediaPage from './components/MediaPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 检测是否为移动设备
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// 初始化 AOS 动画库
AOS.init({
  duration: isMobile ? 0 : 800, // 移动端禁用动画
  easing: 'ease-in-out',
  once: true,
  offset: isMobile ? 0 : 100, // 移动端立即触发
  disable: isMobile // 移动端完全禁用动画
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
