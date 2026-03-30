import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, Users, BookOpen, Briefcase, Award, MessageSquare, 
  CheckCircle2, ArrowRight, Monitor, Cloud, Layers, Settings, 
  Target, TrendingUp, MapPin, Coffee, Laptop, Book, Cpu, 
  FileText, Headphones, UserCheck, Building2, GraduationCap, 
  Lightbulb, Zap, Globe, ShieldCheck, ChevronRight,
  Phone, Send, ChevronDown, Menu, X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navItems = [
    { name: "과정요약", href: "#hero" },
    { name: "교육비전&혜택", href: "#core-competencies" },
    { name: "커리큘럼", href: "#curriculum" },
    { name: "강사진", href: "#instructor-section" },
    { name: "취업지원", href: "#partners" },
    { name: "교육환경", href: "#support" },
    { name: "선발 절차", href: "#selection-process" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span 
              className="font-gmarket text-[#3752A6] text-xl font-bold cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              핀테크 인턴십 코스
            </span>
          </div>
          
          <div className="hidden md:flex gap-6 text-sm font-bold text-gray-700">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-blue-600 transition-colors">
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href="#apply" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors">
              지원하기
            </a>
          </div>

          {/* Mobile Apply Button */}
          <a 
            href="#apply" 
            className="md:hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse hover:animate-none transition-all"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#apply');
              if (element) {
                const isMobile = window.innerWidth < 768;
                const offset = isMobile ? 400 : 0; // 모바일에서 20행(약 400px) 아래로 이동
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset + offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
          >
            상담신청
          </a>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4 text-sm font-bold text-gray-700">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="hover:text-blue-600 transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white pt-12 pb-12 scroll-mt-20" id="hero">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-6 rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <img 
              src="https://postfiles.pstatic.net/MjAyNjAzMjZfNzkg/MDAxNzc0NTA3NzUwODY1._w_hKkdDtDgGrzl5YKuGQjRTSQO8tsmBaJXoDqFUmL8g.eTRuw-FJJQ1ETF_feX-BGrVCTOD6ZGqW6HoJel7LQ34g.JPEG/image+(30).jpg?type=w966" 
              alt="핀테크 인턴십 코스" 
              className="w-full aspect-[2048/1140] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm"
          >
            K-디지털 트레이닝 전액 국비지원
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl mb-6 tracking-tight leading-tight"
          >
            <span 
              className="font-gmarket text-[#3752A6] text-4xl md:text-6xl"
            >
              핀테크 인턴십 코스
            </span> <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-4xl md:text-6xl">서비스 기획자 과정</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-medium break-keep"
          >
            사용자 경험과 데이터 기반 사고를 바탕으로 서비스의 기획부터 실행까지 주도하는 실무형 서비스 기획자로 성장하세요.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex flex-col items-center">
              <Calendar className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-sm text-gray-500 font-medium mb-1">지원 일정</div>
              <div className="font-bold text-gray-900">26. 03. 11(수) - 04. 27(월)</div>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex flex-col items-center">
              <BookOpen className="w-8 h-8 text-indigo-600 mb-3" />
              <div className="text-sm text-gray-500 font-medium mb-1">교육 일정</div>
              <div className="font-bold text-gray-900">26. 04. 28(화) - 11. 02(월)</div>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex flex-col items-center">
              <Users className="w-8 h-8 text-purple-600 mb-3" />
              <div className="text-sm text-gray-500 font-medium mb-1">모집 인원</div>
              <div className="font-bold text-gray-900">25명 (선착순 마감)</div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Why Fintech */}
      <section className="py-24 bg-gray-900 text-white" id="intro">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">서비스 기획자 과정을 배워야 하는 이유</h2>
            <p className="text-gray-400 max-w-3xl text-lg break-keep">
              디지털 전환이 가속화되면서 기업들은 단순 개발이 아닌, 사용자 경험과 비즈니스 성과를 동시에 설계할 수 있는 서비스 기획자를 적극적으로 필요로 하고 있습니다. 데이터와 사용자 중심 사고를 기반으로 서비스의 방향을 결정하는 핵심 인재로 성장할 수 있는 분야입니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfMzAw/MDAxNzc0NTA1NjQwNjky.nHOdptDNxuiJTyhsfW3-NR6PfyCPyEXABmmZTJnpP3cg.fUjojcA7LA1lxqUNp9hpAb_bTZDXOEmuoVLQSn5UiS8g.JPEG/image_(35).jpg?type=w966" alt="핀테크 산업의 무한 확장" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10 flex-1">
                <Globe className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">서비스 산업의 빠른 성장과 확장</h3>
                <p className="text-gray-300 mb-6 leading-relaxed break-keep">
                  IT 서비스, 플랫폼, 커머스, 금융, 콘텐츠 등 다양한 산업에서 서비스 기획자의 역할이 확대되고 있습니다. 기업들은 고객 중심의 서비스 개선과 신규 서비스 출시를 위해 기획 역량을 핵심 경쟁력으로 삼고 있습니다.
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> 모바일·플랫폼 중심 시장 확대로 서비스 기획 수요 지속 증가</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> 스타트업부터 대기업까지 전 산업군에서 기획자 채용 증가</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfMTM4/MDAxNzc0NTA1NjQwMDYx.XhDsGVKtbPcdBoxAzaqa-XNfaHavYLadhmiY7ohn-G0g.lVSpQTEGnG0RKFYoZEGrUcWtAVBW37FEdXAIk_EiOJUg.JPEG/image_(37).jpg?type=w966" alt="취업 시장에서 경쟁력 있는 개발자로 성장" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10 flex-1">
                <TrendingUp className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">취업 시장에서 경쟁력 있는 핵심 직무</h3>
                <p className="text-gray-300 mb-6 leading-relaxed break-keep">
                  서비스 기획자는 개발자, 디자이너와 협업하며 서비스 전반을 이끄는 역할을 수행하기 때문에 높은 성장성과 확장성을 갖습니다. 단순 기획이 아닌 데이터 분석, UX 설계, 비즈니스 이해를 함께 갖춘 인재가 요구됩니다.

                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> 기획 + 데이터 + UX 역량을 갖춘 융합형 인재로 성장 가능</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> 실무 중심 교육을 통해 바로 현업에 투입 가능한 경쟁력 확보</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-12 bg-white scroll-mt-20" id="core-competencies">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">핀테크 신입 서비스 기획자가 갖춰야 할 역량</h2>
            <p className="text-gray-600 text-lg max-w-3xl break-keep">
              핀테크 신입 서비스 기획자는 데이터 분석을 기반으로 사용자 중심의 서비스를 설계하고, 금융 규제를 준수한 기획 역량이 필요합니다.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl mb-12 border border-blue-100">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1: A사 */}
              <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Layers className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">A사 주요 업무</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>고객 데이터 분석을 통한 맞춤형 금융 상품 개발</li>
                  <li>서비스를 출시/운영/관리하기 위해 필요한 업무 수행</li>
                </ul>
              </div>
              {/* Card 2: B사 */}
              <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Layers className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">B사 자격 요건</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>IT 관련 산업의 이해도가 높으신 분</li>
                  <li>Python, SQL 등의 언어로 데이터 핸들링 및 분석이 가능하신 분</li>
                </ul>
              </div>
              {/* Card 3: C사 */}
              <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Layers className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">C사 우대 사항</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>데이터 베이스에 대한 이해도를 갖추신 분</li>
                  <li>MLOps 라이브러리를 활용하여 데이터 예측 업무를 수행할 수 있는 분</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Data Driven Planning */}
      <section className="py-12 bg-blue-50" id="data-driven-planning">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">데이터를 활용한 고객분석과 서비스 기획</h2>
          <p className="text-gray-600 text-lg mb-16">구름톤 핀테크 과정은 핀테크 서비스 기획자에게 필요한 핵심 역량을 쌓도록 돕습니다. 데이터를 활용한 고객 분석을 통해 금융 서비스를 구현하는 과정을 직접 경험해보세요.</p>
          
          <div className="space-y-8">
            {[
              {
                title: "1. 사용자 니즈 파악",
                desc: "금융 행동 패턴, 투자 성향, 소비 행동을 분석해 사용자 맞춤형 서비스를 개발합니다.",
                examples: ["저축 습관 분석을 통한 맞춤형 저축 상품 제안", "투자 성향에 기반한 맞춤형 포트폴리오 추천"]
              },
              {
                title: "2. 맞춤 금융상품 개발",
                desc: "연령, 성별, 소득 등 고객의 프로파일을 바탕으로 맞춤형 금융 상품을 설계합니다.",
                examples: ["맞춤형 금융 상품 추천 시스템 구축", "특정 성향에 맞춘 저축/투자 상품 개발"]
              },
              {
                title: "3. 금융 규제 및 컴플라이언스 준수",
                desc: "내부 통제, 리스크 관리 등을 통해 금융 규제 및 컴플라이언스를 효과적으로 지원합니다.",
                examples: ["머신러닝으로 의심 거래 자동 감지 시스템 구축", "금융 거래 데이터로 신용 위험 모델 개발"]
              }
            ].map((step, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-6 items-center bg-white p-8 rounded-3xl border border-blue-100 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Layers className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-3">실무 적용 사례</h4>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                    {step.examples.map((ex, i) => <li key={i}>{ex}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="py-24 bg-white" id="fintech-training">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">핀테크기업 맞춤형 실무교육</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              핀테크 기업들의 채용 니즈를 커리큘럼에 반영했습니다. 데이터 분석과 실무 역량을 두루 갖춘 서비스 기획자로 성장하세요.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: "https://postfiles.pstatic.net/MjAyNjAzMjZfMjIg/MDAxNzc0NTA1NjQwMDgz.PV_zR1Jnc7E5FFLIxy04VzYRnbfxxJa-qURdwf09V8Mg.ZZGCI38s5DNVpbcu12tGQMkYTWUgqZt90tPTGRzyHKYg.JPEG/image_(32).jpg?type=w966", icon: Building2, title: "데이터 분석 기반 서비스 기획", desc: "핀테크 서비스 운영에 필요한 실무 중심의 데이터 분석 역량을 학습합니다." },
              { image: "https://postfiles.pstatic.net/MjAyNjAzMjZfMTU4/MDAxNzc0NTA1NjQwMDM3.Jk1c_meMQ9R5eCL2V8ar1UnZAYSDTdSPQCGQmLHw2nEg.CLpkqAYlY39s7Xi7oOqB2LL0qEwfR_Xb3skTjy9myzcg.JPEG/image_(33).jpg?type=w966", icon: Cloud, title: "실무 밀착형 프로젝트 수행 능력", desc: "금융 데이터를 활용해 기업의 요구 과제를 직접 수행합니다." },
              { image: "https://postfiles.pstatic.net/MjAyNjAzMjZfMTU0/MDAxNzc0NTA1NjQwNjU1.MGNrBqSGp_YCkV7P9-l4ECcX8p2Q6oij8DBo-0Z7IWgg.oDn05bJJNqHC2EHqlhZa5cq0Oywyhk3uLqYLY2lYI7Ug.JPEG/image_(36).jpg?type=w966", icon: Layers, title: "로직 구현을 위한 문제 해결 역량", desc: "핀테크에 특화된 로직을 구현하기 위해 다양한 미션들을 경험합니다." },
              
            ].map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="h-48 w-full overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 flex-1">
                  <item.icon className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed break-keep">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-gray-50" id="benefits">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">특별한 혜택</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Award, title: "훈련장려금", desc: "최대 300,000원" },
              { icon: Laptop, title: "학습용 PC", desc: "고성능 데스크톱 및\n노트북 지원" },
              { icon: Book, title: "전문 서적", desc: "15만 원 상당 교재 지원" },
              { icon: Settings, title: "실무용 도구", desc: "실전 프로젝트\n수행 도구 지원" },
              { icon: Cpu, title: "생성형 AI 서비스", desc: "자체 AI Claude 계정 및\nChat GPT 제공" },
              { icon: FileText, title: "자격증 응시료", desc: "취득 자격증\n응시료 환급" },
              { icon: MapPin, title: "구름톤 in JEJU", desc: "우수 수료생 대상\n구름 해커톤 지원 시 가산점" },
              { icon: Cloud, title: "쿠버네티스 클러스터", desc: "창업자 대상\n창업 관련 혜택 지원" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 text-center shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-blue-600 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-12">이런 분들께 추천합니다</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "디지털 금융에 흥미 또는 관련 역량을 갖춘 핀테크 전문가를 꿈꾸는 분",
              "다양한 기술 스택을 실습 중심으로 익히고 바로 투입 가능한 실력을 쌓고 싶은 분",
              "핀테크 기업과제 경험하며 직무 이해도와 커리어 연계성을 높이고 싶은 분"
            ].map((text, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-left">
                <CheckCircle2 className="w-8 h-8 text-blue-300 mb-4" />
                <p className="text-lg font-medium leading-relaxed break-keep">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-[#CDE8FF] scroll-mt-20" id="curriculum">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">교육 과정 로드맵</h2>
            <p className="text-gray-700 text-lg max-w-3xl break-keep font-medium">
              금융(Fintech) 도메인 지식을 바탕으로 데이터 분석 역량을 다지고, 최신 머신러닝 및 생성형 AI(LLM) 기술을 더해 차별화된 서비스를 구현합니다. 단순 이론 학습을 넘어 현업 수준의 프로젝트를 주도하는 기획·개발 융합형 서비스 기획자 양성을 목표로 합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { month: "1개월", title: "핀테크기초및 DB 이론" },
              { month: "2개월", title: "프로그래밍 기초 및 데이터 수집" },
              { month: "3개월", title: "데이터 분석및 머신러닝 이론드" },
              { month: "4개월", title: "딥러닝/LLM 및 서비스 배포 실습" },
              { month: "5-6개월", title: "기업 연계 프로젝트" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-[#2B449C] shadow-sm flex flex-col items-center justify-center text-center min-h-[200px] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 mb-4 text-[#2B449C]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div className="text-xl font-extrabold text-gray-900 mb-3">{item.month}</div>
                <div className="text-base font-bold text-gray-800 whitespace-pre-line leading-snug break-keep">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Curriculum Steps */}
      <section className="py-24 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="mb-16 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">상세 커리큘럼</h2>
            <p className="text-gray-600 text-lg max-w-3xl break-keep">
              핀테크의 기본부터 금융 데이터 분석, 금융 규제 이해까지 실무에 필요한 역량을 포괄적으로 다룹니다. 실무 전문가와 함께 사용자 중심의 핀테크 서비스 기획 경험을 쌓을 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-left">
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold rounded-full mb-4">온라인</div>
              <h3 className="text-2xl font-bold mb-2">이론 교육</h3>
              <p className="text-gray-600 break-keep">탄탄한 기본기를 쌓고 능동적인 학습 환경에서 자기주도 학습 능력을 키웁니다.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-left">
              <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 font-bold rounded-full mb-4">오프라인</div>
              <h3 className="text-2xl font-bold mb-2">기업 연계 및 팀 프로젝트</h3>
              <p className="text-gray-600 break-keep">실제 연계 기업에 상주하며 실무 역량을 기릅니다. 팀 그리고 멘토와 함께 성장합니다.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {[
              { step: "STEP 1", title: "핀테크 산업과 서비스 리서치", desc: "핀테크 도메인 이해, 트렌드 분석, 서비스 벤치마킹\n실제 금융 데이터 흐름과 서비스 구조 파악" },
              { step: "STEP 2", title: "데이터 기반 기획을 위한 DB 설계 및 활용", desc: "Database 기본 구조, ERD 설계, DML 실습\nSQL로 데이터 웹어하우스 설계, 데이터 저장, 조회" },
              { step: "STEP 3", title: "Python을 활용한 데이터 수집 밎 저장", desc: "Python을 활용하여 뉴스, 신문기사, 주가정보, 환율정보, 앱사용자 리뷰등 수집\n수집한 자료를 전처리하여 Database에 저장하고 수집을 자동화하는 데이터 수집-저장 파이프라인 구축" },
              { step: "STEP 4", title: "Machine Learning, Deep Learning 을 활용한 데이터 분석", desc: "데이터분석에 대해서 배우고 각 알고리즘을 어떤 비즈니스 상황에서 사용해야 하는지 학습\n직접 수집한 자료로 데이터를 분석 한 후 얻은 인사이트를 서비스 기획에 반영" },
              { step: "STEP 5", title: "AutoML과 LLM을 활용한 서비스 MVP 개발 및 배포", desc: "Step3, Step4에서 수집한 자료와 분석기술을 LLM과 접목시켜 활용할 수 있는 서비스 MVP 개발\n개발한 서비스 MVP를 AWS 클라우드에 배포하여 서비스 기획 - 개발 - 배포 전과정 실습" },
              { step: "STEP 6", title: "데이터 기반 서비스 기획", desc: "Step1 - Step5까지 배운 내용을 종합하여 기존 서비스의 기능 개선 기획/신규 서비스 기획\n실제 데이터에 기반한 사용자 Needs와 서비스 개선 사항을 방영한 개선 기획서 작성\n아직 개발 되지 않은 영역의 서비스를 데이터에서 발굴하고 사회적 필요와 지속 성장이 가능한 방향으로 신규 서비스 기획" },
              { step: "STEP 7", title: "기업 연계 프로젝트", desc: "핀테크 기업 현업 과제 기반의 훈련생 팀 단위 기업상주형(인턴, on-site) 프로젝트 수행\n기업 문제 해결·신규사업 기획, 개발을 통한 성과 및 훈련생 현업 경험·포트폴리오·채용 연계 제공\n기업의 실제 프로젝트를 토대로 상용 서비스에 적용되는 핵심 기능을 구현하며, 현업과 동일한 환경에서 문제 해결 능력 강화" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-lg">
                    {item.step.replace("STEP ", "")}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line leading-relaxed break-keep">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-left text-sm text-gray-400 mt-8">* 로드맵 및 커리큘럼은 교육 과정 운영 상황에 따라 일부 변경될 수 있습니다.</p>
        </motion.div>
      </section>

      {/* Instructor & Projects */}
      <section className="py-24 bg-white" id="project">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="flex flex-col gap-16">
            {/* Projects */}
            <div>
              <h2 className="text-3xl font-bold mb-8">실전 경험 쌓는 팀 프로젝트</h2>
              <p className="text-gray-600 mb-8 text-lg break-keep">
                핀테크를 주제로 팀 프로젝트를 진행합니다. 실제 비즈니스에 적용할 수 있는 수준의 프로젝트 구현 경험을 쌓습니다. 수료까지 함께 달려온 팀원들과 완성도 높은 결과물을 만들어냅니다.
              </p>

              {/* 6-Step Roadmap */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {[
                  { step: "1단계", title: "프로젝트 명세서 설계" },
                  { step: "2단계", title: "실무 기반 주제 제공" },
                  { step: "3단계", title: "주제 선정 및 팀빌딩" },
                  { step: "4단계", title: "프로젝트 수행 및 멘토링" },
                  { step: "5단계", title: "프로젝트 발표회 및 시상" },
                  { step: "6단계", title: "취업 연계 지원" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex flex-col items-center justify-center text-center">
                    <div className="text-blue-600 font-bold text-sm mb-1">{item.step}</div>
                    <div className="text-gray-900 font-bold text-sm">{item.title}</div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Lightbulb className="w-8 h-8 text-yellow-500 mb-4" />
                  <h4 className="text-xl font-bold mb-3">다양한 프로젝트 주제</h4>
                  <p className="text-gray-600 text-sm leading-relaxed break-keep">
                    실제 기업이 다루는 현업 과제와 신규 사업 아이디어를 기반으로 실무 프로젝트를 경험합니다. 문제 정의부터 서비스 구조화, 핵심 기능 도출까지 전 과정에서 실무 중심의 사고를 익히며, 기획자가 현장에서 맞닥뜨리는 의사결정 방식과 업무 프로세스를 직접 체감할 수 있습니다.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Users className="w-8 h-8 text-blue-500 mb-4" />
                  <h4 className="text-xl font-bold mb-3">참여 기업 현직자 멘토링</h4>
                  <p className="text-gray-600 text-sm leading-relaxed break-keep">
                    현직자가 프로젝트 멘토로 참여해 밀착 지도 합니다. 실무적인 피드백 뿐만 아니라, 함께 문제를 해결하며 프로젝트 관리 역량을 키웁니다. 이 과정에서 최신 기술 트렌드와 업계 동향을 파악할 수 있습니다.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 md:col-span-2">
                  <Award className="w-8 h-8 text-purple-500 mb-4" />
                  <h4 className="text-xl font-bold mb-3">경진대회</h4>
                  <p className="text-gray-600 text-sm leading-relaxed break-keep">
                    프로젝트 최종 결과물을 발표해 실력을 평가 받습니다. 참여 기업에 실력을 인정받아 취업으로 연결시킬 있는 기회를 얻습니다. 또한 결과물은 포트폴리오로 활용할 수 있어 커리어 준비에 큰 자산이 됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Instructor */}
            <div id="instructor-section" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-8">기술적 깊이와 경험을 겸비한 전문 강사</h2>
              <div className="bg-gray-900 text-white rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <div className="text-blue-400 font-bold mb-2">서비스기획 강사</div>
                <h3 className="text-3xl font-extrabold mb-4">정아람</h3>
                <p className="text-gray-300 mb-8 leading-relaxed break-keep">
                  숫자 뒤에 숨겨진 비즈니스 기회를 포착하는 방법을 다룹니다. 데이터 리터러시를 기반으로 사업 전략을 수립하고 이를 구체적인 서비스 기획으로 연결하는 과정을 학습합니다. 가설 검증부터 비즈니스 적용까지 ‘성과로 이어지는 데이터 활용 역량’을 실전 중심으로 알려드리겠습니다.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold shrink-0 w-10">현재</span>
                    <span className="text-gray-300">구름 핀테크 인턴십 코스 서비스 기획자 강사<br/>인슈어테크 스타트업, CEO</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-500 font-bold shrink-0 w-10">이전</span>
                    <span className="text-gray-400">커넥팅더닷츠(째깍악어), 사업팀 매니저<br/>알리콘, 사업팀 리드</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Partners & Career Support */}
      <section className="py-24 bg-gray-900 text-white scroll-mt-20" id="partners">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">국내 최대 규모 한국핀테크지원센터가 함께합니다</h2>
            <p className="text-gray-400 text-lg max-w-3xl break-keep">
              핀테크 인턴십 코스는 한국핀테크지원센터와 구름이 함께 설계한 실무 중심 교육 과정입니다. 실제 핀테크 기업 수요를 교육 과정에 반영해, 실무 역량 강화부터 기업 연계와 채용 기회까지 이어지는 커리어 경험을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden">
              <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfODEg/MDAxNzc0NTA1NjQwNDQ2.SOvsitI7wNXa2j6DhyCiAjkTOC7Yuf7zot7cP3JJYNIg.yRLmsnjqYlf7_WslXjAp2U0yDpr04qZzifDCh0i6x0gg.JPEG/image_(38).jpg?type=w966" alt="한국핀테크지원센터" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">한국핀테크지원센터</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> 금융위원회 산하 국내 최대 핀테크 전문 지원 센터</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> 핀테크 기업 육성, 정책 지원 등 산업 전 주기 지원</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> 핀테크 규제 샌드박스 운영 기관</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> 일자리 매칭존 통한 핀테크 산업 전문 취업 연계</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden">
              <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfMjkw/MDAxNzc0NTA1NjQwNjMw.97ng_jouaFHb5yUYgVkB4luIwBrNQUYCY5TznUExU0Mg.OmjiNjtizRBb_t3Hjs1wyiwz0PtMt5nKjs9413Soh_Mg.JPEG/image_(39).jpg?type=w966" alt="구름 (goorm)" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-3 text-indigo-400">구름 (goorm)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" /> 고용노동부 인증 K-디지털 트레이닝 전문 훈련기관</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" /> 국내 대표 AX(AI Transformation) 전문 기업</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" /> 올해의 브랜드 대상 2024·2025 2년 연속 1위 수상</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" /> KDT 교육 과정 통해 1,800명의 누적 교육생 배출</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4 text-center">취업기회 확실한 기업 연계 코스</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { title: "우수 수료생 혜택", desc: "핀테크 인턴십 코스 연계 기업 지원 시 서류 전형 면제", highlight: true },
                { title: "대표 핀테크 기업 협력", desc: "국내 대표 핀테크 기업과 함께하는 실무 중심 커리큘럼" },
                { title: "기업 연계 프로젝트", desc: "핀테크 기업의 실제 프로젝트 수행 기회 제공" },
                { title: "맞춤형 잡 매칭 서비스", desc: "‘핀테크 일자리 매칭 플랫폼’ 통한 구인 등록 및 관리 지원" },
                { title: "전문 상담사의 취업 컨설팅", desc: "‘일자리매칭존’ 통한 전문가의 취업 상담 제공" },
                { title: "현직자 네트워킹 행사", desc: "전문가 만남 통해 최신 기술 및 업계 동향 파악" }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border ${item.highlight ? 'bg-blue-900 border-blue-500 shadow-lg' : 'bg-gray-800/50 border-gray-700/50'}`}>
                  <h4 className={`font-bold text-lg mb-2 ${item.highlight ? 'text-yellow-400' : 'text-blue-300'}`}>{item.title}</h4>
                  <p className={`text-sm break-keep ${item.highlight ? 'text-blue-100' : 'text-gray-400'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-4 text-left">
              <h3 className="text-2xl font-bold mb-2">현직자와 함께하는 멘토링 데이</h3>
              <p className="text-blue-100 max-w-2xl break-keep">
                국내를 대표하는 핀테크 기업의 현직자들과 매월 만납니다. 평소 취업 준비에 필요한 궁금증을 해결해보세요. 맞춤형 피드백을 통해 수강생 모두가 핀테크 인재로 성장할 수 있도록 돕습니다.
              </p>
            </div>
            <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfMTgg/MDAxNzc0NTA1NjQwMDA0.VmJPvNuxZjGol42g4ipXLdgYh_KRVR9ncLujH7TngAkg.rD3T2c_nO_UZdVG8VW3VMLSzjaxJ2Fitqc4k8WGDZVMg.JPEG/image_(40).jpg?type=w966" alt="현직자와 함께하는 멘토링 데이" className="w-full aspect-[1921/906] object-cover" referrerPolicy="no-referrer" />
          </div>
        </motion.div>
      </section>

      {/* Support & Location */}
      <section className="py-24 bg-white scroll-mt-20" id="support">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="flex flex-col gap-16">
            {/* Support (Moved to top) */}
            <div>
              <h2 className="text-3xl font-bold mb-8">실전 역량 키우는 밀착 지원</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Monitor, title: "성취도별 학습 관리", desc: "구름 LXP를 통한 학습 현황 모니터링 및 취약 분야 보완" },
                  { icon: MessageSquare, title: "언제든 가능한 질문", desc: "실시간 질문, 게시판, AI 튜터를 통해 궁금증 해결" },
                  { icon: UserCheck, title: "전문가 피드백", desc: "프로젝트 전 과정에서의 실무 피드백 제공" },
                  { icon: Users, title: "팀별 멘토링 진행", desc: "현직 개발자 멘토가 전담하여 팀별 성장 서포트" },
                  { icon: ShieldCheck, title: "전담 매니저의 관리", desc: "학습 집중을 위한 교육 운영 매니저의 전담 케어" },
                  { icon: Coffee, title: "오피스아워 with C-Level", desc: "구름 C-Level과의 1:1 대화 시간 지원" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed break-keep">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Center (Moved to bottom) */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-4">역삼역 1분 거리!<br/>집중하기 좋은 교육장</h2>
              <p className="text-gray-600 mb-8 break-keep">
                교육생은 강남 교육장 회의실을 무료로 이용할 수 있습니다.<br/>
                <span className="text-sm text-gray-500">(위치: 서울 강남구 테헤란로 145 13, 14층)</span>
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://postfiles.pstatic.net/MjAyNjAyMTNfNDMg/MDAxNzcwOTY4NDUxNjE5.591OWwUJSnBWA9DwlmaYSoDSYpAjriX0X57uKfwjdy4g.Jqib9AJzXW_lgPd-DoNFY5Gf3SzwgQm1w7YGZWaTHAQg.PNG/techup_learning_place_03.png?type=w966" alt="Lounge" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-center font-bold text-gray-800 text-lg">라운지</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://postfiles.pstatic.net/MjAyNjAyMTNfMTg2/MDAxNzcwOTY4NDUxNjEy.8amY2OKWNQ5xGWpz8qF3nEuUoujNVrKxq9-j9E101G0g._kNERBC0F2uyAJiWEvauAz3uZZQ2s4XTrrOWTU0uEHog.PNG/techup_learning_place_05.png?type=w966" alt="Meeting Room" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-center font-bold text-gray-800 text-lg">회의실</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-gray-900 text-white scroll-mt-20" id="selection-process">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">선발 절차</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: "01", title: "지원서 작성", desc: "수강하고 싶은 과정의 지원서를 작성합니다." },
              { step: "02", title: "HRD-Net 수강 신청", desc: "본 과정은 국민내일배움카드 소지자를 대상으로 진행합니다." },
              { step: "03", title: "지원자 평가", desc: "1차 서류 평가, 2차 비대면 인터뷰를 진행합니다." },
              { step: "04", title: "선발 발표", desc: "합격 여부는 개별 연락으로 안내드립니다." },
              { step: "05", title: "오리엔테이션", desc: "교육 과정에 대한 세부 사항을 안내드립니다." },
              { step: "06", title: "수강 시작", desc: "커리큘럼에 따라 본격적인 학습이 시작됩니다." }
            ].map((item, idx) => (
              <div key={idx} className="relative bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="text-blue-400 font-bold text-xl mb-4">STEP {item.step}</div>
                <h4 className="font-bold mb-2 break-keep">{item.title}</h4>
                <p className="text-sm text-gray-400 break-keep">{item.desc}</p>
                {idx < 5 && (
                  <ChevronRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-600 z-10" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-[#FFD600] scroll-mt-20" id="apply">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black tracking-tight">
              망설이지 마세요.<br/>
              국비교육 전문가가<br/>
              무료 상담해드립니다.
            </h2>
            <p className="text-lg text-black mb-12 font-medium break-keep">
              국비지원 자격 여부부터 취업 및 교육과정까지<br/>
              무료로 상담해드립니다.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#FFD600] shrink-0">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">교육방식</div>
                  <div className="text-2xl font-extrabold text-black">50%온라인 + 50%오프라인</div>
                </div>
              </div>
            </div>
            
            <div className="text-xl font-extrabold text-black">
              여러분의 꿈을 응원합니다!
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-2">
              빠른 교육상담 신청 <span className="w-2 h-2 rounded-full bg-red-600"></span>
            </h3>
            
            <form 
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitted(true);
                const formData = new FormData(e.currentTarget);
                const data = {
                  _form_id: "68aae499a65e4e8ccff02774469c5c70",
                  course: formData.get('course'),
                  name: formData.get('name'),
                  age: formData.get('age'),
                  phone: formData.get('phone'),
                  message: formData.get('message')
                };
                
                fetch("https://inputhaven.com/api/v1/submit", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                  keepalive: true
                }).catch(console.error);
              }}
            >
              {isSubmitted ? (
                <div className="text-center py-10 text-xl font-bold text-black">
                  상담 신청이 완료되었습니다!
                  <button 
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="block w-full mt-4 bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
                  >
                    추가 문의하기
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">과정명</label>
                    <input 
                      type="text" 
                      name="course"
                      readOnly 
                      value="핀테크 인텁십 코스-서비스기획" 
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-bold focus:outline-none" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">이름</label>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="홍길동" 
                        required
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-gray-400 font-medium" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">나이</label>
                      <input 
                        type="text" 
                        name="age"
                        placeholder="예: 30" 
                        required
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-gray-400 font-medium" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">연락처</label>
                    <input 
                      type="text" 
                      name="phone"
                      placeholder="010-0000-0000" 
                      required
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-gray-400 font-medium" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">문의내용</label>
                    <textarea 
                      name="message"
                      placeholder="궁금하신 점을 자유롭게 적어주세요." 
                      rows={2} 
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none placeholder:text-gray-400 font-medium"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-600 accent-red-600" 
                        defaultChecked 
                        required
                      />
                      <span className="text-sm font-bold text-gray-800">개인정보 수집 및 이용에 동의합니다.</span>
                    </label>
                    <button 
                      type="button" 
                      className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-800 font-medium"
                      onClick={() => {
                        const content = `개인정보 수집 및 이용 동의 (필수)
핀테크인턴쉽코스 실시간온라인문의 신청을 위해 다음과 같이 개인정보를 수집 및 이용합니다.

수집목적
온라인문의

수집항목
이름, 나이, 연락처, 문의내용

보유기간
60일`;
                        alert(content);
                      }}
                    >
                      자세히 보기
                    </button>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#111111] text-white font-bold text-lg py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-colors mt-4"
                  >
                    무료상담 신청하기 <Send className="w-5 h-5" />
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                    개인정보는 상담 목적으로만 사용됩니다.
                  </p>
                </>
              )}
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 text-center text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} goorm. All rights reserved.</p>
        </div>
      </footer>
      {/* Floating Apply Button */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="max-w-6xl mx-auto">
          <a 
            href="#apply" 
            className="block w-full bg-blue-600 text-white py-3 md:py-4 text-center font-bold text-base md:text-lg hover:bg-blue-700 transition-colors shadow-lg rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#apply');
              if (element) {
                const isMobile = window.innerWidth < 768;
                const offset = isMobile ? 400 : 0; // 모바일에서 20행(약 400px) 아래로 이동
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset + offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
          >
            상담 신청하기
          </a>
        </div>
      </motion.div>
    </div>
  );
}
