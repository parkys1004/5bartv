
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tighter mb-2">5barTV.</h2>
            <p className="text-gray-500 text-sm max-w-xs">
              빛과 시선으로 브랜드의 서사를 완성합니다. 감각적인 스토리텔링을 통해 귀하의 비전을 시각화합니다.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Vimeo</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} 5barTV. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
