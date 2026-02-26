import React, { useEffect } from 'react';
import AOS from 'aos';
import './Hero.css';

function Hero() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* 导航栏 */}
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src="/images/image001.png" alt="雷曼老师" className="navbar-logo" />
            <span>雷曼老师</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#about">关于</a></li>
              <li className="nav-item"><a className="nav-link" href="#courses">课程</a></li>
              <li className="nav-item"><a className="nav-link" href="#clients">客户</a></li>
              <li className="nav-item"><a className="nav-link" href="#gallery">瞬间</a></li>
              <li className="nav-item"><a className="nav-link" href="/media" target="_blank">博主合作</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">联系</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero 内容 */}
      <div className="hero-content">
        <div className="particles-container">
          <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ left: '20%', animationDelay: '1s' }}></div>
          <div className="particle" style={{ left: '30%', animationDelay: '2s' }}></div>
          <div className="particle" style={{ left: '40%', animationDelay: '0.5s' }}></div>
          <div className="particle" style={{ left: '50%', animationDelay: '1.5s' }}></div>
          <div className="particle" style={{ left: '60%', animationDelay: '2.5s' }}></div>
          <div className="particle" style={{ left: '70%', animationDelay: '0.8s' }}></div>
          <div className="particle" style={{ left: '80%', animationDelay: '1.8s' }}></div>
          <div className="particle" style={{ left: '90%', animationDelay: '2.2s' }}></div>
        </div>
        
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 hero-text" data-aos="fade-right" data-aos-duration="1000">
              <p className="hero-subtitle">你好，我是</p>
              <h1 className="hero-title">雷曼</h1>
              <h2 className="hero-description">AI 提效实战专家</h2>
              <div className="hero-badges">
                <span className="badge-item">微软 AI 产品经理认证</span>
                <span className="badge-item">全网 80 万粉丝</span>
                <span className="badge-item">北航硕士</span>
              </div>
              <p className="hero-intro">
                原微软（中国）Office 资深产品经理，全网 80w+ 粉丝 AI 博主<br />
                曾为中国联通、国家电网、交通银行、Intel 等巨头提供定制培训<br />
                亲历 AI 产业全周期，现致力于帮助企业和个人用 AI 提升工作效率
              </p>
              <div className="hero-buttons">
                <a href="#courses" className="btn btn-gradient btn-lg">探索课程</a>
                <a href="#contact" className="btn btn-outline-light btn-lg">预约咨询</a>
              </div>
            </div>
            <div className="col-lg-6 hero-image" data-aos="fade-left" data-aos-duration="1000">
              <div className="hero-image-wrapper">
                <div className="image-glow"></div>
                <div className="placeholder-avatar">
                  <img src="/images/image001.png" alt="雷曼老师" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
