
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://loremflickr.com/1920/1080/cinematic,camera" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
            빛과 시선으로<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">브랜드의 서사를 완성합니다.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            단순한 기록을 넘어 감각적인 스토리텔링을 제공합니다.<br className="hidden md:block" />
            기획부터 촬영, 편집까지 올인원 크리에이티브 솔루션을 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-all transform hover:-translate-y-1">
              프로젝트 의뢰하기
            </Link>
            <Link to="/about" className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all">
              소개 보기
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-gray-500 text-sm uppercase tracking-[0.3em] font-medium">Selected Works</span>
            <h2 className="text-4xl font-bold mt-2">포트폴리오</h2>
          </div>
        </div>

        <div className="masonry-grid">
          {PROJECTS.map((project) => (
            <Link 
              key={project.id} 
              to={`/project/${project.id}`} 
              className="masonry-item block group relative overflow-hidden bg-zinc-900"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-widest text-white/60 mb-1">{project.category}</span>
                <h3 className="text-2xl font-bold text-white leading-none">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
