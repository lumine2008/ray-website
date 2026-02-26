import React, { useState, useEffect } from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: '吴总',
      company: '英特尔',
      content: '听了雷老师的企业 AI 落地课，最惊喜的是他不是只讲理论，而是带着我们拆解，还给了适配我们行业的工具包。现在我们部门已经能自己用 AI 做客户分析了，效率提升明显。',
      rating: 5
    },
    {
      id: 2,
      name: '培训负责人',
      company: '中油首汽',
      content: '这两天学习了统计数据分析、AI 操作和 Excel 技巧。内容丰富且极具实用性，让我受益匪浅。雷老师的课程深入浅出，生动专业，把复杂的知识讲得有趣又易懂，太赞了！',
      rating: 5
    },
    {
      id: 3,
      name: '张总',
      company: '银行信贷资产流转中心',
      content: '特别感谢雷老师为这次授课投入的满满心意与精心准备！今天分享既专业又生动，每一个知识点都特别有启发，帮我们打开了不少新思路。同事们反响很热烈！',
      rating: 5
    },
    {
      id: 4,
      name: '韩总',
      company: '中海油',
      content: '听了雷老师的《AI+Excel 高效分析》才知道，原来 PowerQuery 和 AI 结合能省这么多事！他讲的 SAP 案例和我们公司的业务场景高度契合，当场就跟着操作完成了季度报表分析，比之前快了整整一天！',
      rating: 5
    },
    {
      id: 5,
      name: 'Iris',
      company: '字节跳动',
      content: '作为数据分析师，一直觉得 Excel 的高阶功能很难啃，但雷老师从他设计 API 的底层逻辑讲起，瞬间打通了我的思路。他分享的可视化案例，我照着复现到公司的销售数据里，领导开会时直接用我的图表做决策，成就感满满。',
      rating: 5
    },
    {
      id: 6,
      name: '张总',
      company: '渣打环球',
      content: 'AI 训练营今天课程收益匪浅，思路展开了，课程互动性十足，结合场景的提问总能引发深度思考，复杂原理经他讲解变得通俗易懂！',
      rating: 5
    },
    {
      id: 7,
      name: '培训负责人',
      company: '创银嘉信企业管理咨询有限公司',
      content: '雷曼老师的培训内容扎实，紧扣统计数据分析、AI 办公应用及 Excel 实操等重点，教学脉络清晰，学员普遍反馈收获显著。课程案例丰富、讲解生动，教学效果突出，深受好评。',
      rating: 5
    },
    {
      id: 8,
      name: '刘所长',
      company: '社区统计所',
      content: '雷曼老师的培训课程氛围活跃，老师授课风趣幽默，专业知识点讲解清晰透彻，内容非常实用，对解决实际工作难题、提升效率很有帮助，受益匪浅！',
      rating: 5
    },
    {
      id: 9,
      name: '曾经理',
      company: '常德卷烟厂',
      content: '感谢雷曼老师今天的精彩授课！通过课程，我们不仅深入了解了多种 AI 工具的功能与应用场景，还在您手把手的指导下进行了实际操作。这次学习不仅让我们明白了"AI 有什么用"，更掌握了"AI 怎么用"！',
      rating: 5
    },
    {
      id: 10,
      name: '学员',
      company: '统计培训网',
      content: '这两天的课程学习让我受益匪浅、收获满满！雷老师授课生动专业，既深入浅出又幽默易懂，不仅注重实操性，还能耐心解答每个问题，让学员在轻松氛围中高效掌握技能，对 AI 的理解豁然开朗。',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>学员评价</h2>
          <p>来自 100+ 企业的真实反馈</p>
        </div>

        <div className="testimonials-carousel" data-aos="fade-up">
          <button className="carousel-arrow prev" onClick={prevSlide}>‹</button>
          
          <div className="carousel-track">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <div className="testimonial-content">
                  "{testimonial.content}"
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <span>{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-arrow next" onClick={nextSlide}>›</button>
        </div>

        {/* 指示器 */}
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
