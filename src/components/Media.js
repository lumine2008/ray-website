import React from 'react';
import './Media.css';

function Media() {
  const platforms = [
    {
      name: '小红书',
      icon: '📕',
      followers: '12 万',
      avatar: '图文/视频',
      avatarPrice: '图文 ¥4,599',
      video: '视频',
      videoPrice: '¥6,999',
      live: '-',
      livePrice: '-',
      note: '深耕 AI 领域 2 年深度观察者，以「技术解析」与「用户视角」的双重价值，让复杂科技被看见、被理解、被信任。'
    },
    {
      name: '视频号（主号）',
      icon: '🎬',
      followers: '41 万',
      avatar: '视频 0-60s',
      avatarPrice: '¥6,999',
      video: '视频>60s',
      videoPrice: '¥8,599',
      live: '-',
      livePrice: '-',
      note: ''
    },
    {
      name: '抖音',
      icon: '▶️',
      followers: '9.9 万',
      avatar: '视频',
      avatarPrice: '¥4,500',
      video: '-',
      videoPrice: '-',
      live: '-',
      livePrice: '-',
      note: ''
    },
    {
      name: '视频小号',
      icon: '📹',
      followers: '4.7 万 + 1.6 万',
      avatar: '视频 0-60s',
      avatarPrice: '¥2,500',
      video: '视频>60s',
      videoPrice: '¥3,000',
      live: '-',
      livePrice: '-',
      note: '不单独接单（AI 进行时 + 雷老师讲 AI）'
    },
    {
      name: 'B 站',
      icon: '📺',
      followers: '2.2 万',
      avatar: '视频',
      avatarPrice: '¥3,500',
      video: '-',
      videoPrice: '-',
      live: '-',
      livePrice: '-',
      note: '不单独接单'
    },
    {
      name: '快手',
      icon: '📱',
      followers: '3 万 + 2.2 万',
      avatar: '视频',
      avatarPrice: '¥2,800',
      video: '-',
      videoPrice: '-',
      live: '-',
      livePrice: '-',
      note: '不单独接单'
    },
    {
      name: '头条',
      icon: '📰',
      followers: '2.7 万',
      avatar: '图文/视频',
      avatarPrice: '¥2,000',
      video: '-',
      videoPrice: '-',
      live: '-',
      livePrice: '-',
      note: '不单独接单'
    },
    {
      name: '公众号',
      icon: '💬',
      followers: '1.5 万',
      avatar: '图文',
      avatarPrice: '¥2,000',
      video: '-',
      videoPrice: '-',
      live: '-',
      livePrice: '-',
      note: '不单独接单'
    }
  ];

  const packageDeal = {
    name: '打包套餐',
    followers: '80 万粉丝触达',
    price: '¥19,999',
    note: '价格可根据不同平台组合灵活调整'
  };

  const cases = [
    { brand: '千问 APP', title: '千问升级 + 全免费！一个入口搞定全场景 AI', link: 'http://xhslink.com/o/538WCAGLQYj', platform: '小红书' },
    { brand: '光帆 Lightwear', title: 'AI 眼镜？NO！这才是马斯克预言的手机替代品', link: 'http://xhslink.com/o/15ItIOsIIr5', platform: '小红书' },
    { brand: '蚂蚁灵光', title: '1 句话 1 分钟生成小应用，蚂蚁灵光太灵了', link: 'http://xhslink.com/o/5Hpb3uS6tvv', platform: '小红书' },
    { brand: '天猫首发', title: '库克亲自下场直播带货 iPhone Air，天猫首发', link: '', platform: '视频号' },
    { brand: '百度秒哒黑客松探展', title: '12 岁初中生逆袭！从沉迷游戏到 AI 大佬', link: 'http://xhslink.com/o/8Le2bffRryu', platform: '小红书' },
    { brand: '百度云智大会探展', title: '科技圈顶流秀场！全链路 AI 狂欢，七大展区、...', link: 'http://xhslink.com/o/8sVSCnJ2JnL', platform: '小红书' },
    { brand: '百度智能云一见', title: 'AI 助力餐饮连锁管理', link: '', platform: '视频号' },
    { brand: '阿里云通义 AI', title: '摄像头也会思考了？AI 让每个设备都懂你！AI+ 消费电子...', link: 'http://xhslink.com/o/5mW9GODLCHk', platform: '小红书' },
    { brand: '阿里 Qwen', title: '超越 Deepseek，Qwen 居然成了世界的底座 这次阿里真的...', link: 'http://xhslink.com/o/1tg1JGYz3g8', platform: '小红书' },
    { brand: '阿里魔搭社区 MCP', title: 'MCP 是什么？小白怎么用 MCP 服务？教程来了！🎉最近爆...', link: 'http://xhslink.com/o/8HxKOmW2qOn', platform: '小红书' },
    { brand: '阿里 Qwen3', title: '阿里通义千问 Qwen3 登顶开源模型榜单 阿里通义 Qwen3 杀...', link: 'http://xhslink.com/o/9oXmBoQGwiU', platform: '小红书' },
    { brand: '联想百应智能体', title: 'Deepseek 服务器繁忙？本地部署 Deepseek 教程 ✨ 别卷了...', link: 'http://xhslink.com/o/3LXtXfK9Egj', platform: '小红书' },
    { brand: '联想 ThinkPad', title: '联想 ThinkPad X1 Carbon', link: '', platform: '视频号' },
    { brand: '联想集团 Q3', title: 'AI 工厂打造"平行时空"，物理世界反成副本？', link: '', platform: '视频号' },
    { brand: 'INAIR 眼镜', title: '这款无屏电脑你见过吗？', link: 'http://xhslink.com/o/9kMTTyXDEIU', platform: '小红书' },
    { brand: '讯飞耳机', title: '95 后冠军揭秘：AI 提示词万能公式', link: 'http://xhslink.com/o/AppaUwMLu4t', platform: '小红书' },
    { brand: '拍我 AI', title: '一句话生成完整短片！每个人都能当导演了', link: 'http://xhslink.com/o/5wAqybfzNLB', platform: '小红书' },
    { brand: 'AGI 大会探展', title: '最优秀 00 后在干啥？18 岁花 100 万办黑客松？', link: 'http://xhslink.com/o/4bouLUBHgX4', platform: '小红书' },
    { brand: '华为', title: 'Ruipath 病理模型正式开源', link: '', platform: '视频号' },
    { brand: '银河麒麟 OS', title: '最强国产操作系统上手体验来了！', link: '', platform: '视频号' },
    { brand: '夸克 AI', title: '用 AI 解决 99% 的烦恼！学会强到离谱❗ 建议每个人都用上...', link: 'http://xhslink.com/o/8UMA3t9wy9T', platform: '小红书' },
    { brand: '智普 AI', title: '裸辞创业，89 年温州小伙靠 AI 年入百万!', link: 'http://xhslink.com/o/5xfMNFBRiDj', platform: '小红书' },
    { brand: '柒牌 AI', title: '会「说话」的衣服 7 位冠军共同见证，AI 如何颠覆服装行...', link: 'http://xhslink.com/o/4yosgoxPvFr', platform: '小红书' },
    { brand: '字节豆包 AI', title: '液冷技术有多牛？遇到问题找豆包', link: 'https://www.douyin.com/video/7444087403473554728', platform: '抖音' },
    { brand: '字节豆包 AI', title: '字节跳动首个 AI 大模型，使用完全免费甚至不限次数时长！', link: 'https://v.douyin.com/KqxIlH2hQeI', platform: '抖音' },
    { brand: '字节豆包 AI', title: '神舟 18 号返回地球 舱外和舱内的温度是多少？', link: 'https://v.douyin.com/U5A96k1R4tc', platform: '抖音' },
    { brand: '字节豆包 AI', title: '24 层楼高的火箭回收 火箭回收的误差需要控制多少？能省多少钱？', link: 'https://v.douyin.com/I0ZMkw3ZopU', platform: '抖音' },
    { brand: '字节豆包 AI', title: '《自然》发布：癌症预测新方法 AI 大模型预测准确率高达 94%', link: 'https://v.douyin.com/qOImJFVpGv0/', platform: '抖音' },
    { brand: '字节豆包 AI', title: '诺贝尔奖颁给了人工智能 物理奖和化学奖都给了 AI，AI 的下一个奖项会是什么？', link: 'https://v.douyin.com/MLQY4j-jv6c/', platform: '抖音' },
    { brand: '字节豆包 AI', title: '国产机器狗火到国外 看看外媒是怎么评价泰山机器狗的？', link: 'https://v.douyin.com/de6OX6gVg0M', platform: '抖音' },
    { brand: '字节豆包 AI', title: '未来出行', link: 'https://v.douyin.com/iGV6K0pRvYs', platform: '抖音' }
  ];

  return (
    <section className="media-section" id="media">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>博主合作报价</h2>
          <p>全网 80 万 + 粉丝，助力品牌快速增长</p>
        </div>

        {/* 平台数据表格 */}
        <div className="media-table-wrapper" data-aos="fade-up">
          <table className="media-table">
            <thead>
              <tr>
                <th>渠道</th>
                <th>粉丝数量</th>
                <th>形式</th>
                <th>价格</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((platform, index) => (
                <tr key={index}>
                  <td>
                    <div className="platform-name">
                      <span className="platform-icon">{platform.icon}</span>
                      {platform.name}
                    </div>
                  </td>
                  <td className="followers">{platform.followers}</td>
                  <td>{platform.avatar}</td>
                  <td className="price">{platform.avatarPrice}</td>
                  <td className="note">{platform.note}</td>
                </tr>
              ))}
              {/* 打包套餐行 */}
              <tr className="package-row">
                <td colSpan="5">
                  <div className="package-deal">
                    <span className="package-icon">🎁</span>
                    <strong>{packageDeal.name}</strong>
                    <span>{packageDeal.followers}</span>
                    <span className="package-price">{packageDeal.price}</span>
                    <span className="package-note">{packageDeal.note}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 合作案例 */}
        <div className="cases-section" data-aos="fade-up">
          <h3 className="cases-title">合作案例</h3>
          <div className="cases-grid">
            {cases.map((item, index) => (
              <div key={index} className="case-card">
                <div className="case-header">
                  <h4>{item.brand}</h4>
                  <span className="case-platform">{item.platform}</span>
                </div>
                <p className="case-title-text">{item.title}</p>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="case-link">
                    查看详情 →
                  </a>
                ) : (
                  <span className="case-note">视频号链接需复制到手机微信打开</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 合作流程 */}
        <div className="process-section" data-aos="fade-up">
          <h3 className="process-title">合作流程</h3>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-title">需求沟通</div>
              <div className="step-desc">了解品牌需求与目标</div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-title">方案定制</div>
              <div className="step-desc">制定专属推广方案</div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-title">内容创作</div>
              <div className="step-desc">专业团队内容制作</div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-title">发布推广</div>
              <div className="step-desc">全平台同步发布</div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-title">数据复盘</div>
              <div className="step-desc">提供详细数据报告</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Media;
