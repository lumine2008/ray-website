import React, { useState } from 'react';
import './Clients.css';

function Clients() {
  const [activeCategory, setActiveCategory] = useState('all');

  // 客户列表（带品牌色）
  const clients = {
    government: [
      { name: '中国邮政', color: ['#0055A4', '#003366'] },
      { name: '国家电网', color: ['#009060', '#006837'] },
      { name: '中国联通', color: ['#E60012', '#99000C'] },
      { name: '国家能源集团', color: ['#0066CC', '#003366'] },
      { name: '中国林业集团', color: ['#228B22', '#006400'] },
      { name: '中国海油', color: ['#003366', '#001A33'] },
      { name: '中国能建集团', color: ['#1E90FF', '#0066CC'] },
      { name: '国能科环集团', color: ['#0099CC', '#006699'] },
      { name: '山东黄金集团', color: ['#FFD700', '#DAA520'] },
      { name: '航天材料研究所', color: ['#4169E1', '#1E3A8A'] },
      { name: '广西糖业集团', color: ['#DC143C', '#8B0000'] },
      { name: '天津人才服务中心', color: ['#4169E1', '#1E40AF'] },
      { name: '北京排水集团', color: ['#1E90FF', '#0066CC'] },
      { name: '北京市公安局', color: ['#1E3A8A', '#0F172A'] },
      { name: '河北出版集团', color: ['#DC2626', '#991B1B'] },
      { name: '新华书店', color: ['#DC2626', '#B91C1C'] },
      { name: '湖南中烟', color: ['#DC2626', '#7F1D1D'] },
      { name: '长春一汽', color: ['#003366', '#002244'] },
    ],
    finance: [
      { name: '交通银行', color: ['#004098', '#002766'] },
      { name: '华夏银行', color: ['#0055A4', '#003366'] },
      { name: '渣打银行', color: ['#003366', '#002244'] },
      { name: '国信证券', color: ['#DC2626', '#991B1B'] },
      { name: '银登中心', color: ['#0066CC', '#003366'] },
      { name: '银河证券', color: ['#004098', '#002766'] },
      { name: '银河德瑞', color: ['#004098', '#003366'] },
      { name: '中原资产集团', color: ['#009688', '#00695C'] },
    ],
    enterprise: [
      { name: '微软', color: ['#00A4EF', '#0078D4'] },
      { name: 'Intel', color: ['#0068B5', '#003C71'] },
      { name: 'SAP', color: ['#003366', '#001F3F'] },
      { name: 'Infor', color: ['#FF6900', '#CC5200'] },
      { name: 'Oracle', color: ['#C74634', '#993828'] },
      { name: '阿里巴巴', color: ['#FF6A00', '#CC5500'] },
      { name: '腾讯', color: ['#0052D9', '#003BB3'] },
      { name: '百度', color: ['#2932E1', '#1F22C4'] },
      { name: '奇虎 360', color: ['#009A44', '#006B30'] },
      { name: 'Refinitiv', color: ['#FF6600', '#CC5200'] },
      { name: 'Jedox', color: ['#E30613', '#B3050F'] },
      { name: 'Solver', color: ['#0078D4', '#005A9E'] },
      { name: '华生基因', color: ['#10B981', '#059669'] },
      { name: '爱存科技', color: ['#009688', '#00796B'] },
    ],
    education: [
      { name: '北京航空航天大学', color: ['#003366', '#002244'] },
      { name: '郑州大学', color: ['#8B0000', '#5C0000'] },
      { name: '中国海洋大学', color: ['#0055A4', '#003366'] },
      { name: '福州大学', color: ['#003366', '#002244'] },
      { name: '青岛科技大学', color: ['#0066CC', '#003366'] },
      { name: '郑州轻工业学院', color: ['#1E90FF', '#0066CC'] },
      { name: '河北科技大学', color: ['#009688', '#00796B'] },
      { name: '中国婴童协会', color: ['#FF69B4', '#DB7093'] },
      { name: '中国职工技术协会', color: ['#DC2626', '#B91C1C'] },
      { name: '市总工会', color: ['#DC2626', '#991B1B'] },
      { name: '启迪之星', color: ['#FF6600', '#CC5200'] },
    ]
  };

  const categories = [
    { key: 'all', label: '全部' },
    { key: 'government', label: '国企/政府' },
    { key: 'finance', label: '金融行业' },
    { key: 'enterprise', label: '知名企业' },
    { key: 'education', label: '院校协会' }
  ];

  const filteredClients = activeCategory === 'all' 
    ? [...clients.government, ...clients.finance, ...clients.enterprise, ...clients.education]
    : clients[activeCategory];

  // 获取客户名称的首字或缩写
  const getInitials = (name) => {
    if (name === 'Intel') return 'Intel';
    if (name === 'SAP') return 'SAP';
    if (name === 'Infor') return 'Infor';
    if (name === 'Oracle') return 'Oracle';
    if (name === 'Jedox') return 'Jedox';
    if (name === 'Solver') return 'Solver';
    if (name === 'Refinitiv') return 'Refinitiv';
    // 中文取前两个字
    return name.substring(0, 2);
  };

  return (
    <section className="clients-section" id="clients">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>服务客户</h2>
          <p>深受各行业领先企业信赖</p>
        </div>

        {/* 分类筛选 */}
        <div className="category-filter" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 客户 LOGO 墙 */}
        <div className="clients-grid" data-aos="fade-up">
          {filteredClients.map((client, index) => (
            <div key={index} className="client-item">
              <div 
                className="client-logo"
                style={{
                  background: `linear-gradient(135deg, ${client.color[0]}, ${client.color[1]})`
                }}
              >
                <span>{getInitials(client.name)}</span>
              </div>
              <div className="client-name">{client.name}</div>
            </div>
          ))}
        </div>

        {/* 客户数量统计 */}
        <div className="clients-stats" data-aos="fade-up">
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">服务企业</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">行业覆盖</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10 万+</div>
            <div className="stat-label">培训学员</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
