
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative group">
              <img 
                src="https://loremflickr.com/1000/1200/photographer,portrait" 
                alt="Photographer Profile" 
                className="w-full h-auto grayscale filter brightness-90 group-hover:brightness-100 transition-all duration-500" 
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-zinc-900 border border-white/10 hidden lg:flex items-center justify-center p-8 text-center text-xs tracking-widest leading-relaxed">
                EST. 2018<br />SEOUL BASED<br />VISUAL DIRECTOR
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold">The Storyteller</span>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-10 leading-none">Lee Min-ho</h1>
            
            <div className="space-y-8 text-xl text-gray-400 font-light leading-relaxed">
              <p>
                저는 카메라를 단순히 도구로 보지 않습니다. 그것은 빛을 조각하고 시간을 박제하여 메시지를 전달하는 영혼의 확장입니다.
              </p>
              <p>
                지난 6년간 국내외 50개 이상의 스타트업 및 브랜드와 협업하며, 그들이 가진 고유한 가치를 시각적 언어로 번역해 왔습니다. 제 작업의 중심에는 항상 '사람'과 '진정성'이 있습니다.
              </p>
              <p className="text-white font-normal italic">
                "모든 픽셀에는 이유가 있어야 하며, 모든 프레임에는 감정이 담겨야 합니다."
              </p>
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6 font-bold">Awards & Recognition</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Sony World Photography Awards</span>
                    <span className="text-gray-600">Shortlisted / 2023</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Cannes Lions Visual Arts</span>
                    <span className="text-gray-600">Bronze / 2022</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Vimeo Staff Pick</span>
                    <span className="text-gray-600">Selected / 2021</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6 font-bold">Main Clients</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['SAMSUNG', 'NAVER', 'KAKAO', 'HYUNDAI', 'COUPANG', 'TOSS'].map(client => (
                    <div key={client} className="text-lg font-black text-zinc-800 hover:text-white transition-colors cursor-default">
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
