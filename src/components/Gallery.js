import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // 授课活动照片列表（从 HTML 文件提取的真实数据）
  const photos = [
    { id: 1, title: '华夏银行《AI 效率工作坊》', category: '金融', image: '/images/image002.png' },
    { id: 2, title: '国家电网《AI 办公效率 10 倍提升》', category: '国企', image: '/images/image003.jpg' },
    { id: 3, title: '中国职工技术协会《AI 赋能工会效率提升》', category: '协会', image: '/images/image004.jpg' },
    { id: 4, title: '中国邮政《Deepseek 驱动效能革命》', category: '国企', image: '/images/image005.png' },
    { id: 5, title: '渣打银行《AI 时代的时间和效率管理》', category: '金融', image: '/images/image006.png' },
    { id: 6, title: '中国海洋石油《AI+Excel 数据分析与可视化实战训练营》', category: '国企', image: '/images/image007.png' },
    { id: 7, title: '天津人才服务中心《AI 重塑生产力——办公效率 x10 倍提升》', category: '政府', image: '/images/image008.png' },
    { id: 8, title: '启迪之星《AI 重塑生产力——办公效率 10 倍提升》', category: '企业', image: '/images/image009.png' },
    { id: 9, title: '中原资产《AI 重塑生产力》', category: '金融', image: '/images/image010.jpg' },
    { id: 10, title: '国信证券《AI 未来趋势和端侧发展》', category: '金融', image: '/images/image011.jpg' },
    { id: 11, title: '北京排水集团《AI 助力生产力提升办公效率》', category: '国企', image: '/images/image012.jpg' },
    { id: 12, title: '渣打环球《AI 重塑生产力——办公效率 10 倍提升》', category: '金融', image: '/images/image013.png' },
    { id: 13, title: '书业电商大会《AI 与新媒体融合实践》', category: '大会', image: '/images/image014.png' },
    { id: 14, title: '爱存科技健康大会《AI 赋能医疗健康》', category: '大会', image: '/images/image015.png' },
    { id: 15, title: '微软技术大会 TechSummit《Office 跨平台解决方案》', category: '大会', image: '/images/image016.jpg' },
    { id: 16, title: '河北科技学院《AI 公文写作与汇报》', category: '院校', image: '/images/image017.jpg' },
    { id: 17, title: '航天某院航天材料研究所《解码未来城管理革新与开拓之道》', category: '科研', image: '/images/image018.jpg' },
    { id: 18, title: '广西糖业集团《AI 赋能生产力》', category: '国企', image: '/images/image019.jpg' },
    { id: 19, title: '银行信贷资产流转中心《AI+ 金融：金融行业智能化》', category: '金融', image: '/images/image020.jpg' },
    { id: 20, title: '交通银行《AI 重塑生产力》', category: '金融', image: '/images/image021.jpg' },
    { id: 21, title: '中国国能集团《AI 赋能下的数字化工作新范式》', category: '国企', image: '/images/image022.jpg' },
    { id: 22, title: '中国能建集团《AI 办公效率实战》', category: '国企', image: '/images/image023.jpg' },
    { id: 23, title: '常德卷烟厂《企业 AI 转型落地实战》', category: '国企', image: '/images/image024.jpg' },
    { id: 24, title: '中国能源建设集团北京电建《办公效率 10 倍提升》', category: '国企', image: '/images/image025.jpg' },
    { id: 25, title: '某市出版集团《AI 赋能书业新媒体》', category: '企业', image: '/images/image026.jpg' },
    { id: 26, title: '某教育出版公司《AI 重塑生产力》', category: '企业', image: '/images/image027.jpg' },
    { id: 27, title: '中国联通《AI 时代的企业知识库》', category: '国企', image: '/images/image028.jpg' },
    { id: 28, title: '长春联通一汽《PPT 设计思维》', category: '国企', image: '/images/image029.jpg' },
    { id: 29, title: '昆明滇池旅游集团《AI 赋能财务效率提升》', category: '企业', image: '/images/image030.jpg' },
    { id: 30, title: '某市总工会《AI 赋能工会效率提升》', category: '协会', image: '/images/image031.jpg' },
    { id: 31, title: '国家电网物资公司《AI 重塑生产力》', category: '国企', image: '/images/image032.jpg' },
    { id: 32, title: '中国林业集团《AI 赋能林业》', category: '国企', image: '/images/image033.jpg' },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>精彩瞬间</h2>
          <p>记录每一场精彩的授课时刻</p>
        </div>

        {/* 照片墙 */}
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={(index % 4) * 100}
              onClick={() => setSelectedImage(photo)}
            >
              <div className="gallery-image-wrapper">
                <img src={photo.image} alt={photo.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <div className="gallery-title">{photo.title}</div>
                  <div className="gallery-category">{photo.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 照片总数 */}
        <div className="gallery-footer" data-aos="fade-up">
          <p>已记录 {photos.length}+ 场精彩活动</p>
        </div>
      </div>

      {/* 灯箱弹窗 */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-image" />
            <div className="lightbox-info">
              <h4>{selectedImage.title}</h4>
              <span className="lightbox-category">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
