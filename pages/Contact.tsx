
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-8">✨</div>
          <h1 className="text-4xl font-bold mb-4">감사합니다.</h1>
          <p className="text-gray-400 mb-10 leading-relaxed">
            문의하신 내용을 성공적으로 접수했습니다. 검토 후 업무일 기준 48시간 이내에 입력하신 연락처로 회신 드리겠습니다.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
          >
            돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Connect with us</span>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8">의뢰하기</h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
              새로운 프로젝트 제안이나 협업 문의를 환영합니다. 구체적인 정보를 남겨주시면 더욱 정확한 견적 산출이 가능합니다.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Email</h4>
                <p className="text-2xl font-light hover:text-gray-400 transition-colors">hello@storyteller.studio</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Phone</h4>
                <p className="text-2xl font-light">+82 10 1234 5678</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Location</h4>
                <p className="text-2xl font-light text-gray-400">Seoul, South Korea</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-900/30 p-8 md:p-12 border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">성함 / 담당자명</label>
                  <input required type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">기업명 / 소속</label>
                  <input required type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors" placeholder="스토리텔러 스튜디오" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">이메일 주소</label>
                  <input required type="email" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">연락처</label>
                  <input required type="tel" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors" placeholder="010-0000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">문의 유형</label>
                <div className="flex flex-wrap gap-4">
                  {['상업 사진', '브랜드 필름', '제품 촬영', '공간/건축', '기타'].map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="hidden peer" />
                      <div className="px-6 py-2 border border-white/10 rounded-full text-sm peer-checked:bg-white peer-checked:text-black hover:border-white/40 transition-all">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">예산 범위</label>
                  <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors appearance-none">
                    <option className="bg-zinc-900">100만원 미만</option>
                    <option className="bg-zinc-900">100만원 ~ 300만원</option>
                    <option className="bg-zinc-900">300만원 ~ 500만원</option>
                    <option className="bg-zinc-900">500만원 ~ 1,000만원</option>
                    <option className="bg-zinc-900">1,000만원 이상</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">희망 일정</label>
                  <input type="date" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">상세 문의 내용</label>
                <textarea required rows={5} className="w-full bg-transparent border border-white/10 p-4 focus:border-white outline-none transition-colors resize-none" placeholder="프로젝트의 목적, 희망 무드, 분량 등을 자유롭게 적어주세요."></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] hover:bg-gray-200 transition-all transform active:scale-95">
                문의하기 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
