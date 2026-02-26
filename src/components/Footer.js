import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>雷曼老师</h3>
            <p>AI 提效实战专家</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>快速链接</h4>
              <a href="#about">关于我</a>
              <a href="#courses">精品课程</a>
              <a href="#clients">服务客户</a>
              <a href="#gallery">精彩瞬间</a>
            </div>
            <div className="footer-column">
              <h4>课程分类</h4>
              <a href="#courses">AI 办公提效</a>
              <a href="#courses">数据分析</a>
              <a href="#courses">新媒体运营</a>
              <a href="#courses">企业定制</a>
            </div>
            <div className="footer-column">
              <h4>联系方式</h4>
              <p>📧 lumine2008@hotmail.com</p>
              <p>📱 小红书：zcareers</p>
              <p>📍 北京</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} 雷曼老师。All Rights Reserved.</p>
          <p>Designed with ❤️ for AI Efficiency</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
