import React from 'react';
import './About.css';

function About() {
  const certifications = [
    { icon: '🤖', name: '微软 AI 产品经理认证' },
    { icon: '📊', name: '微软 AI 数据分析认证' },
    { icon: '🧠', name: '谷歌生成式 AI 领导者认证' },
    { icon: '🎯', name: '美国项目管理师（PMP）' },
    { icon: '🏆', name: '阿里达摩院 AI 训练师（高级）' },
    { icon: '☁️', name: '亚马逊 AI 技术认证' },
    { icon: '💡', name: '科大讯飞 AI 大模型微调工程师' },
    { icon: '🚀', name: '科大讯飞 AI 智能体工程师' },
  ];

  const achievements = [
    { number: '80 万+', label: '全网粉丝' },
    { number: '100+', label: '服务企业' },
    { number: '50+', label: '行业覆盖' },
    { number: '10 万+', label: '培训学员' },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>关于雷曼</h2>
          <p>AI 技术落地实战专家，助力企业效率提升</p>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <div className="about-image-wrapper">
              <div className="placeholder-about-image">
                <img src="/images/image001.png" alt="雷曼老师" />
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h3 className="about-title">从微软产品经理到 AI 教育者</h3>
            <p className="about-text">
              曾任微软（中国）有限公司 Office 和 Windows 资深产品经理，主导 Excel 开发者平台 API 设计，
              助力 SAP、Oracle 等企业落地 Excel + AI 解决方案，推动数据处理效率提升 300%+。
            </p>
            <p className="about-text">
              创立《雷老师谈 AI》IP，收获 80 万 + 粉丝，单条 AI 教学视频播放量破 1300 万。
              多次在微软 Ignite、Global Excel Conference 等国际大会分享实战经验。
            </p>
            <p className="about-text">
              现为 PCon 全球产品经理创新大会、微软 TechSummit、微软 Ignite、
              2025 书业电商大会、中国 PMO 项目经理大会等权威平台主讲讲师。
            </p>
            
            <div className="achievements-grid">
              {achievements.map((item, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-number">{item.number}</div>
                  <div className="achievement-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 认证资质 */}
        <div className="certifications-section" data-aos="fade-up">
          <h3 className="certifications-title">专业认证</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="certification-icon">{cert.icon}</div>
                <div className="certification-name">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
