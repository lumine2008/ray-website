import React, { useState } from 'react';
import './Courses.css';

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      icon: '🚀',
      title: 'AI 重塑生产力',
      subtitle: '办公效率 10 倍提升',
      duration: '2 天',
      audience: '企业全员',
      description: '掌握 AI 工具在办公场景中的实战应用，让工作效率实现质的飞跃',
      gains: [
        '人效翻倍——高频业务场景，AI 替代 50% 重复耗时工作',
        '决策降本——用数据推演替代直觉判断，压缩试错成本',
        '经验留痕——把骨干的 AI 指令集沉淀为组织可复用的资产',
        '风险归零——建立数据合规与内容安全的企业级红线',
        '团队进化——培养人机协作标准'
      ],
      outline: [
        '第一讲：认知红利——大模型时代战略身位（AI 发展趋势、产业应用全景）',
        '第二讲：提示词工程——CO-STAR 公式、乔哈里视窗（角色设定、上下文构建、任务拆解）',
        '第三讲：AI 助力公文写作（通知、报告、总结、讲话稿等 10+ 种公文类型）',
        '第四讲：AI 助力总结、汇报和智能 PPT（工作总结、述职汇报、PPT 自动生成）',
        '第五讲：数据处理、分析和可视化（数据清洗、透视表、函数公式、图表制作）',
        '第六讲：AI 助力营销和新媒体运营（爆款文案、短视频脚本、直播话术）',
        '第七讲：打造企业大脑——知识库（RAG 原理、搭建实战、应用场景）',
        '第八讲：智能体搭建实战（智能体核心概念、开发平台、业务应用场景）',
        '第九讲：AI 的挑战和未来（风险预警、伦理原则、发展趋势、行动规划）'
      ]
    },
    {
      icon: '📊',
      title: 'AI 时代下 Excel',
      subtitle: '数据处理与分析实战',
      duration: '1 天',
      audience: '需要频繁进行数据处理、分析和制作报告的各类岗位人员',
      description: '学习 AI 与 Excel 结合的数据处理技巧，让数据分析更智能高效',
      gains: [
        '掌握自动化数据清洗与整合，报表处理效率提升 80% 以上',
        '掌握数据透视表与核心函数组合，实现多维度灵活分析',
        '学会可视化仪表盘设计与数据故事化表达',
        '运用宏录制与 AI 辅助编写 VBA 代码，实现办公自动化',
        '掌握 AI 实战核心技巧，完成数据分析和洞察'
      ],
      outline: [
        '第一讲：数智化新起点——Excel+AI 的融合价值（发展趋势、应用场景、效率对比）',
        '第二讲：数据处理基石（数据规范、数据类型、质量挑战、清洗技巧）',
        '第三讲：数据分析利器（数据透视表、切片器、多表关联、动态分析）',
        '第四讲：高级函数与公式实战（逻辑函数、查找函数、统计函数、文本函数、日期函数）',
        '第五讲：数据可视化呈现与智能仪表盘（图表选择、配色原则、交互式看板）',
        '第六讲：自动化与 AI 综合实战（宏/VBA 基础、Power Query、AI 预测与分析、综合案例）',
        '第七讲：AI 的挑战和未来（数据安全风险、AI 幻觉识别、发展趋势）'
      ]
    },
    {
      icon: '📽️',
      title: 'AI 时代 PPT 设计',
      subtitle: '高效视觉表达',
      duration: '2 天',
      audience: '企业内部各级需要 PPT 汇报的人员',
      description: '用 AI 辅助 PPT 设计，快速制作专业级演示文稿',
      gains: [
        '重塑逻辑思维：掌握金字塔原理与八大思维',
        '提升 AI 效率：学会用 AI 工具 10 倍提速',
        '掌握设计法则：运用 CRAP 原则与数据可视化',
        '精进演讲技巧：用 SCQA、PREP 等模型打造有感染力的表达',
        '产出实战成果：完成一份高质量 PPT 作品并进行路演'
      ],
      outline: [
        '第一讲：谋定后动——AI 重塑 PPT 逻辑（认知跃迁、场景重构、新媒体应用）',
        '第二讲：PPT 思维——好逻辑胜过好设计（金字塔原理、受众思维、SCQA 模型）',
        '第三讲：PPT 视觉设计——让逻辑被看见（CRAP 原则、色彩理论、图表可视化）',
        '第四讲：AI 赋能从 PPT 制作到演讲呈现（演讲技巧、AI+PPT 智能创作全流程）',
        '第五讲：综合实战——终极路演与未来展望（作品展示、点评指导、发展趋势）'
      ]
    },
    {
      icon: '💰',
      title: 'AI 财务风暴',
      subtitle: '效率提升实战营',
      duration: '2 天',
      audience: '财务从业者、财务管理者、财会从业人员',
      description: '专为财务人员打造的 AI 应用课程，解决财务工作中的效率痛点',
      gains: [
        '掌握提示词工程核心方法，让 AI 精准输出高质量财务内容',
        'Excel+AI 数据清洗与分析，从"表哥表姐"进阶为数据洞察专家',
        '学会用 AI 快速生成专业报告、PPT 和汇报材料',
        '搭建财务知识库沉淀组织经验，实现 7×24 小时智能问答',
        '洞察 AI 财务趋势与风险，规划个人转型路径'
      ],
      outline: [
        '第一讲：AI 财务革命入门（趋势认知、转型坐标、财务人职业发展）',
        '第二讲：提示词工程（CO-STAR 公式、乔哈里视窗、财务场景应用）',
        '第三讲：财务日常工作效能革命（AI 写作、信息检索、合同审阅、发票处理）',
        '第四讲：AI 助力财务工作报告与 PPT（月报/年报生成、汇报材料制作）',
        '第五讲：Excel+AI 数据分析（函数代码、数据可视化、财报风险挖掘）',
        '第六讲：打造财务智慧大脑——财务知识库（制度沉淀、智能问答、案例库）',
        '第七讲：AI 财务未来图谱（转型路径、人机协同、职业发展规划）'
      ]
    },
    {
      icon: '📱',
      title: 'AI 破局',
      subtitle: '新媒体爆款内容与增长',
      duration: '2 天',
      audience: '新媒体工作者、宣传人员、企事业管理层',
      description: '掌握 AI 创作新媒体内容的核心方法，实现流量快速增长',
      gains: [
        '重构 AI 创作思维，掌握爆款内容底层逻辑与全场景应用能力',
        '掌握图文短视频智能生产，实现数字人克隆与效率倍增',
        '掌握直播全流程 AI 赋能方法，打造数据驱动的持续优化能力',
        '构建矩阵运营，实现流量精准获取与规模化增长',
        '规避 AI 应用风险，建立安全合规的新媒体技术护城河'
      ],
      outline: [
        '第一讲：AI 重塑新媒体创作（认知跃迁、应用全景、爆款底层逻辑）',
        '第二讲：AI 驱动图文爆款生产（选题策划、封面优化、爆款图文笔记、人设定位）',
        '第三讲：AI 提速短视频创作（脚本仿写、AI 解说、数字人生成、图文转视频）',
        '第四讲：AI 赋能直播内容创作与互动优化（直播内容创作、数据复盘与优化）',
        '第五讲：AI 赋能新媒体运营（算法推荐机制、矩阵账号运营、粉丝增长）',
        '第六讲：AI 的挑战和未来（风险预警、发展趋势、合规指南）'
      ]
    },
    {
      icon: '📚',
      title: 'AI 办公三件套',
      subtitle: 'Excel、PPT、Word 效率提升',
      duration: '3 天',
      audience: '企业全员',
      description: '全面掌握 AI 在办公软件中的应用，成为办公效率达人',
      gains: [
        '建立数据规范思维：掌握数据清洗与整理的六大核心技能',
        '精通 Excel 核心函数：熟练运用逻辑、查找、统计等常用函数',
        '构建动态仪表盘：学会用数据透视表 + 切片器搭建交互式看板',
        '掌握 PPT 设计心法：运用金字塔原理与 CRAP 法则',
        '解锁 AI 办公新技能：用 AI 自动处理数据、生成报告、优化演讲稿',
        '输出完整工作成果：带回销售仪表盘、精品汇报 PPT 和规范公文'
      ],
      outline: [
        '第一板块 Excel：数据规范、数据透视表、高级函数与公式、数据可视化与智能仪表盘、自动化与 AI 综合实战',
        '第二板块 PPT：PPT 思维与逻辑、视觉设计（CRAP 原则）、AI 赋能 PPT 制作与演讲',
        '第三板块 Word：高效编辑实战、文档排版美化、AI 助力公文写作'
      ]
    },
    {
      icon: '🤖',
      title: '数字员工实战',
      subtitle: '智能体 + 数字人工作坊',
      duration: '1 天',
      audience: '企业全员',
      description: '从 0 到 1 构建数字员工，掌握智能体和数字人开发实战技能',
      gains: [
        '洞察大模型技术本质与商业演进逻辑',
        '推动企业知识库构建与智能应用',
        '实现业务流程自动化与智能体开发',
        '学会数字人形象生成与交互服务落地',
        '树立 AI 合规与安全实践意识'
      ],
      outline: [
        '第一讲：认知红利（大模型时代战略身位、技术本质、商业演进）',
        '第二讲：构建企业知识库（RAG 原理、搭建全流程、应用场景、业务赋能）',
        '第三讲：智能体开发（智能体核心概念、开发平台、应用场景、搭建流程、无代码搭建）',
        '第四讲：数字人——7×24 小时交互服务（核心价值、技术拆解、场景重构、实战工坊）',
        '第五讲：AI 落地风险与未来行动（风险预警、伦理原则、发展趋势、行动规划）'
      ]
    },
    {
      icon: '🏢',
      title: '企业 AI 落地',
      subtitle: '驱动组织人效 10 倍提升',
      duration: '2 天',
      audience: '企业全员',
      description: '帮助企业全面落地 AI，实现组织人效的质的飞跃',
      gains: [
        '人效翻倍——高频业务场景，AI 替代 80% 重复耗时工作',
        '决策降本——用数据推演替代直觉判断，压缩试错成本',
        '经验留痕——把骨干的 AI 指令集沉淀为组织可复用的资产',
        '风险归零——建立数据合规与内容安全的企业级红线',
        '团队进化——培养人机协作标准'
      ],
      outline: [
        '第一讲：认知红利（大模型时代战略身位、AI 发展趋势）',
        '第二讲：提示词工程（CO-STAR 公式、乔哈里视窗、企业场景应用）',
        '第三讲：AI 助力总结、汇报和智能 PPT（工作总结、述职汇报、PPT 自动生成）',
        '第四讲：AI 助力公文写作（通知、报告、制度、流程等 10+ 种类型）',
        '第五讲：数据处理、分析和可视化（数据清洗、透视表、函数公式、图表制作）',
        '第六讲：AI 助力营销和新媒体运营（爆款文案、短视频脚本、直播话术）',
        '第七讲：打造企业大脑——知识库（RAG 原理、搭建实战、应用场景）',
        '第八讲：智能体搭建实战（智能体核心、开发平台、业务应用场景）',
        '第九讲：AI 的挑战和未来（风险预警、伦理原则、发展趋势）'
      ]
    },
    {
      icon: '🧠',
      title: '企业知识库',
      subtitle: '知识库 + 智能体实战',
      duration: '1 天',
      audience: '企业全员',
      description: '掌握企业知识库搭建和智能体开发的核心技能',
      gains: [
        '洞察大模型技术本质与商业演进逻辑',
        '掌握企业知识库搭建全流程与 RAG 原理',
        '精通智能体开发平台与数字员工构建',
        '全面识别 AI 落地风险并构建安全体系'
      ],
      outline: [
        '第一讲：认知红利（大模型时代战略身位、技术本质、商业演进）',
        '第二讲：构建企业知识库（RAG 原理、搭建全流程、应用场景、业务赋能）',
        '第三讲：智能体开发（智能体核心概念、开发平台、应用场景、搭建流程、无代码搭建）',
        '第四讲：AI 落地风险与未来行动（风险预警、伦理原则、发展趋势、行动规划）'
      ]
    },
    {
      icon: '📝',
      title: 'AI 公文提效',
      subtitle: '国企 AI 效能突围',
      duration: '1 天',
      audience: '央企/国企中高层管理者、办公室主任及党群战略部门骨干',
      description: '专为国企央企打造的 AI 公文写作和效能提升课程',
      gains: [
        '从被动执行到主动赋能，升级为人机协同决策者',
        '公文写作效率飙升 10 倍，6D 拔高法让材料有思想、有政治高度',
        '精准挖掘工作亮点与隐性价值，流水账秒变价值简报',
        'PPT 从熬夜排版到秒级生成，掌握控场讲述与即兴回应',
        '筑牢数据安全与合规红线，精准识别 AI 幻觉与敏感信息'
      ],
      outline: [
        '第一讲：AI 时代的战略重构（认知跃迁、场景重构、国企应用）',
        '第二讲：提示词工程与思维对齐（CO-STAR 公式、乔哈里视窗、公文场景）',
        '第三讲：AI 公文写作（避坑清单、高效写作、润色拔高、6D 拔高法）',
        '第四讲：AI 赋能工作总结与汇报（工作总结、工作汇报、价值提炼）',
        '第五讲：AI+PPT 高质量汇报材料（PPT 技巧、演讲呈现、控场技巧）',
        '第六讲：AI 合规、安全与未来（风险预警、数据安全、发展趋势）'
      ]
    },
    {
      icon: '🏛️',
      title: 'AI 政务实战',
      subtitle: '数字素养与效能倍增',
      duration: '2 天',
      audience: '各级政府部门及国央企领导干部、业务骨干、基层公务员',
      description: '专为政府机关打造的 AI 数字素养与效能提升课程',
      gains: [
        '重塑 AI 认知：从基础了解到政务深度融合',
        '掌握公文写作技巧：借助 AI 实现框架生成、内容润色、语病校对与思想拔高',
        '熟悉政策检索分析：运用 AI 智能拆解、多轮对话追问与比对分析',
        '赋能数据处理能力：通过 AI 清洗整理数据、一键生成可视化图表与调研报告',
        '优化公共服务沟通：构建人机协同应答模式，搭建智能知识库',
        '严守安全伦理底线：全面识别数据泄露、AI 幻觉与合规风险'
      ],
      outline: [
        '第一讲：AI 政务应用前景（认知跃迁、场景重构、典型场景、发展趋势）',
        '第二讲：AI 辅助公文写作与材料整理（避坑清单、高效写作、润色拔高、工作总结、PPT 技巧）',
        '第三讲：AI 赋能数据整理与分析（表格处理、图表生成、调研数据分析）',
        '第四讲：AI 在公共服务与沟通中的应用（智能应答、跨部门协作、知识库搭建）',
        '第五讲：AI 在政策查询与信息检索中的应用（政策检索、提示词设计、政策分析、报告生成）',
        '第六讲：AI 使用伦理与信息安全（风险预警、伦理原则、数据安全、发展趋势）'
      ]
    }
  ];

  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>精品课程</h2>
          <p>实战、实用、实效，助力企业和个人效率提升</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="course-card"
              data-aos="flip-left"
              data-aos-delay={index * 100}
              onClick={() => setSelectedCourse(course)}
            >
              <div className="course-card-inner">
                <div className="course-card-front">
                  <div className="course-icon">{course.icon}</div>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-subtitle">{course.subtitle}</p>
                  <div className="course-meta">
                    <span className="meta-item">⏱️ {course.duration}</span>
                  </div>
                  <div className="course-hover-hint">点击查看详情</div>
                </div>
                <div className="course-card-back">
                  <p className="course-description">{course.description}</p>
                  <div className="course-audience">
                    <strong>适合人群：</strong>{course.audience}
                  </div>
                  <a href="#contact" className="btn btn-gradient btn-sm" onClick={(e) => e.stopPropagation()}>
                    预约课程
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 课程详情弹窗 */}
      {selectedCourse && (
        <div className="course-modal" onClick={() => setSelectedCourse(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCourse(null)}>×</button>
            
            <div className="modal-header">
              <div className="modal-icon">{selectedCourse.icon}</div>
              <div className="modal-title-wrapper">
                <h3>{selectedCourse.title}</h3>
                <p>{selectedCourse.subtitle}</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>📌 课程时长</h4>
                <p>{selectedCourse.duration}</p>
              </div>

              <div className="modal-section">
                <h4>👥 适合人群</h4>
                <p>{selectedCourse.audience}</p>
              </div>

              <div className="modal-section">
                <h4>🎯 课程收获</h4>
                <ul className="gains-list">
                  {selectedCourse.gains.map((gain, idx) => (
                    <li key={idx}>{gain}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>📚 课程大纲</h4>
                <ul className="outline-list">
                  {selectedCourse.outline.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-footer">
              <a href="#contact" className="btn btn-gradient btn-lg">
                预约此课程
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Courses;
