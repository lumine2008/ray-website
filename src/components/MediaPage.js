import React from 'react';
import { Link } from 'react-router-dom';
import './MediaPage.css';
import Media from './Media';

function MediaPage() {
  return (
    <div className="media-page">
      {/* 导航栏 */}
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/images/image001.png" alt="雷曼老师" className="navbar-logo" />
            <span>雷曼老师</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="/#about">关于</a></li>
              <li className="nav-item"><a className="nav-link" href="/#courses">课程</a></li>
              <li className="nav-item"><a className="nav-link" href="/#clients">客户</a></li>
              <li className="nav-item"><a className="nav-link" href="/#gallery">瞬间</a></li>
              <li className="nav-item"><a className="nav-link" href="/#contact">联系</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 博主合作内容 */}
      <Media />
    </div>
  );
}

export default MediaPage;
