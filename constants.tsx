
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Minimalist Essence',
    category: 'Product',
    imageUrl: 'https://picsum.photos/seed/p1/800/1200',
    description: '스타트업 브랜드의 미니멀리즘 철학을 시각화한 제품 촬영 프로젝트입니다. 그림자와 빛의 대비를 통해 제품의 본질적인 형태에 집중했습니다.',
    client: 'Design Co.',
    year: '2023',
    equipment: ['Sony A7R IV', '90mm Macro', 'Profoto B10X'],
    gallery: [
      'https://picsum.photos/seed/g1/1200/800',
      'https://picsum.photos/seed/g2/1200/800',
      'https://picsum.photos/seed/g3/1200/800'
    ]
  },
  {
    id: '2',
    title: 'Urban Narrative',
    category: 'Architecture',
    imageUrl: 'https://picsum.photos/seed/p2/800/600',
    description: '도시의 구조적 아름다움과 그 안에서 살아가는 사람들의 서사를 담아낸 건축 다큐멘터리 프로젝트입니다.',
    client: 'Urban Living',
    year: '2024',
    equipment: ['DJI Mavic 3 Pro', '16-35mm Wide'],
    gallery: [
      'https://picsum.photos/seed/g4/1200/800',
      'https://picsum.photos/seed/g5/1200/800'
    ]
  },
  {
    id: '3',
    title: 'Human Emotion',
    category: 'Portrait',
    imageUrl: 'https://picsum.photos/seed/p3/800/1000',
    description: '인물의 내면을 탐구하는 시네마틱 포트레이트 시리즈입니다. 강렬한 조명 설계를 통해 감정의 깊이를 더했습니다.',
    client: 'Solo Exhibition',
    year: '2023',
    equipment: ['Sony A1', '85mm f1.2', 'Aputure 600d'],
    gallery: [
      'https://picsum.photos/seed/g6/1200/800',
      'https://picsum.photos/seed/g7/1200/800'
    ]
  },
  {
    id: '4',
    title: 'Dynamic Brand Film',
    category: 'Video',
    imageUrl: 'https://picsum.photos/seed/p4/800/1100',
    description: '역동적인 카메라 워킹과 감각적인 편집이 돋보이는 브랜드 필름입니다.',
    client: 'Tech Startup X',
    year: '2024',
    equipment: ['Red V-Raptor', 'Cooke Anamorphic'],
    gallery: [
      'https://picsum.photos/seed/g8/1200/800'
    ]
  },
  {
    id: '5',
    title: 'Ethereal Spaces',
    category: 'Interior',
    imageUrl: 'https://picsum.photos/seed/p5/800/800',
    description: '공간이 주는 평온함을 포착한 인테리어 사진 프로젝트입니다.',
    client: 'ArchDaily',
    year: '2023',
    equipment: ['Canon R5', '24mm Tilt-Shift'],
    gallery: [
      'https://picsum.photos/seed/g9/1200/800'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'commercial',
    title: '상업 사진 (Commercial)',
    description: '브랜드 가치를 극대화하는 고퀄리티 제품 및 인물 촬영.',
    price: '₩500,000 ~',
    features: ['스튜디오 대관 포함', '색감 보정 및 정밀 리터칭', '고해상도 원본 제공'],
    icon: '📸'
  },
  {
    id: 'brand-film',
    title: '브랜드 필름 (Brand Film)',
    description: '스타트업의 스토리를 영상 언어로 번역하는 감각적인 쇼트 필름.',
    price: '₩1,500,000 ~',
    features: ['기획 및 스토리보드 제작', '4K 시네마틱 촬영', '사운드 믹싱 및 컬러그레이딩'],
    icon: '🎥'
  },
  {
    id: 'drone',
    title: '드론 촬영 (Drone)',
    description: '압도적인 시야로 브랜드의 규모감을 전달하는 항공 촬영.',
    features: ['합법적 비행 승인 대행', '고고도 풍경 촬영', '실시간 모니터링'],
    icon: '🛸'
  }
];
