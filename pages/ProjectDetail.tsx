
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-500 underline">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 text-sm text-gray-500 hover:text-white flex items-center gap-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          뒤로 가기
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-8">
            <div className="aspect-video bg-zinc-900 mb-8 overflow-hidden">
               <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-12">
              {project.gallery.map((img, idx) => (
                <img key={idx} src={img} alt={`Gallery ${idx}`} className="w-full h-auto bg-zinc-900" />
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="text-gray-500 uppercase tracking-widest text-xs font-semibold">{project.category}</span>
            <h1 className="text-5xl font-black mt-2 mb-8 leading-tight">{project.title}</h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              {project.description}
            </p>

            <div className="space-y-8 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Client</h4>
                <p className="text-white">{project.client}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Year</h4>
                <p className="text-white">{project.year}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Equipment</h4>
                <div className="flex flex-wrap gap-2">
                  {project.equipment.map(item => (
                    <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded-full text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Link 
                to="/contact" 
                className="block text-center w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors"
              >
                비슷한 프로젝트 의뢰하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
