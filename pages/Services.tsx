
import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-24">
          <span className="text-gray-500 uppercase tracking-[0.3em] text-sm font-semibold">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 leading-tight">
            스타트업의 비전을 <br />
            시각적 언어로 <span className="text-zinc-600 italic">번역합니다.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            단순히 카메라를 드는 것이 아니라, 브랜드의 본질을 이해하고 이를 가장 적절한 기술적 방식을 통해 전달합니다.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((service) => (
            <div key={service.id} className="p-10 bg-zinc-900 border border-white/5 hover:border-white/20 transition-all group">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 mb-8 h-12 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-3 mb-10">
                {service.features.map(f => (
                  <div key={f} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    {f}
                  </div>
                ))}
              </div>
              {service.price && (
                <div className="text-xl font-bold border-t border-white/5 pt-6 text-white/90">
                  {service.price}
                </div>
              )}
            </div>
          ))}
        </div>

        <section className="bg-zinc-900/50 p-12 md:p-24 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">작업 프로세스</h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Consultation', desc: '의뢰인의 브랜드 철학 및 프로젝트 목표를 심도 있게 청취합니다.' },
                  { step: '02', title: 'Concept Design', desc: '무드보드와 스토리보드를 통해 시각적 방향성을 합의합니다.' },
                  { step: '03', title: 'Production', desc: '최상급 장비와 전문 인력이 함께 현장 촬영을 진행합니다.' },
                  { step: '04', title: 'Post-Production', desc: '디테일한 보정 및 편집을 통해 최종 결과물을 완성합니다.' },
                ].map(item => (
                  <div key={item.step} className="flex gap-6">
                    <span className="text-zinc-700 font-black text-3xl">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://loremflickr.com/800/1000/filming,studio" alt="Studio Setup" className="w-full h-auto grayscale opacity-50" />
              <div className="absolute inset-0 border-[20px] border-[#121212] -m-4"></div>
            </div>
          </div>
        </section>

        <div className="mt-32 text-center">
          <h3 className="text-3xl font-bold mb-8">당신의 비즈니스를 시각화할 준비가 되셨나요?</h3>
          <Link to="/contact" className="inline-block px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-all">
            프로젝트 문의하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
