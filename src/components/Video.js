import React, { useState } from 'react';
import './Video.css';

function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    // 打开小红书视频链接
    window.open('https://www.xiaohongshu.com/discovery/item/68686ecb0000000012022078?source=webshare&xhsshare=pc_web&xsec_token=ABo-ZrCVaRvSur_GAtW7AcUERuc817NVqql6WvsslHz64=&xsec_source=pc_share', '_blank');
  };

  return (
    <section className="video-section" id="video">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>授课视频</h2>
          <p>走进雷曼老师的课堂现场</p>
        </div>

        <div className="video-wrapper" data-aos="fade-up">
          <div className="video-placeholder">
            {/* 视频封面图片 */}
            <div className="video-cover">
              <img src="/images/image034.png" alt="AI 赋能大健康" className="cover-image" />
              <div className="cover-overlay"></div>
            </div>
            
            {/* 播放按钮 */}
            <button className="play-button" onClick={handlePlay}>
              <span className="play-icon">▶</span>
              <span className="play-text">点击播放</span>
            </button>
            
            <div className="video-info">
              <h3>AI 赋能大健康</h3>
              <p>点击观看精彩课程片段</p>
            </div>
            
            <a 
              href="https://www.xiaohongshu.com/discovery/item/68686ecb0000000012022078?source=webshare&xhsshare=pc_web&xsec_token=ABo-ZrCVaRvSur_GAtW7AcUERuc817NVqql6WvsslHz64=&xsec_source=pc_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gradient"
            >
              在小红书观看
            </a>
          </div>
        </div>

        {/* 视频特色 */}
        <div className="video-features" data-aos="fade-up">
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <div className="feature-title">实战导向</div>
            <div className="feature-desc">真实案例拆解，即学即用</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💡</div>
            <div className="feature-title">互动性强</div>
            <div className="feature-desc">课堂互动，答疑解惑</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📈</div>
            <div className="feature-title">效果显著</div>
            <div className="feature-desc">学员反馈效率提升 300%+</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏆</div>
            <div className="feature-title">权威认证</div>
            <div className="feature-desc">微软、谷歌等多项认证背书</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
