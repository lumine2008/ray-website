import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>联系我</h2>
          <p>期待与您携手，共创高效未来</p>
        </div>

        <div className="contact-content" data-aos="fade-up">
          {/* 联系方式卡片 */}
          <div className="contact-card">
            <div className="contact-header">
              <div className="contact-avatar">
                <img src="/images/image001.png" alt="雷曼老师" />
              </div>
              <h3>雷曼老师</h3>
              <p className="contact-subtitle">AI 提效实战专家</p>
            </div>

            <div className="contact-body">
              <div className="contact-info-item">
                <div className="info-icon email">📧</div>
                <div className="info-content">
                  <span className="info-label">邮箱</span>
                  <a href="mailto:lumine2008@hotmail.com">lumine2008@hotmail.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon social">📱</div>
                <div className="info-content">
                  <span className="info-label">小红书</span>
                  <span>zcareers</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon location">📍</div>
                <div className="info-content">
                  <span className="info-label">所在地</span>
                  <span>北京</span>
                </div>
              </div>
            </div>

            <div className="contact-footer">
              <span className="footer-label">关注我</span>
              <div className="social-links">
                <a href="https://www.xiaohongshu.com/user/profile/606890d90000000001001d68" target="_blank" rel="noopener noreferrer" className="social-btn xiaohongshu">
                  <span>📕</span>
                  <span>小红书</span>
                </a>
                <a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer" className="social-btn wechat">
                  <span>💬</span>
                  <span>微信</span>
                </a>
                <a href="https://www.douyin.com/" target="_blank" rel="noopener noreferrer" className="social-btn douyin">
                  <span>▶️</span>
                  <span>抖音</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
