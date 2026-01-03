
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  client: string;
  year: string;
  equipment: string[];
  gallery: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  features: string[];
  icon: string;
}
