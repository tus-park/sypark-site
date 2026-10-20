export type WorkCategory = 'web' | 'graphics';
export type Filter = 'all' | WorkCategory;

export interface Work {
  id: number;
  // tags: string[];
  category: WorkCategory;
  tags: string[];
  title: string;
  dscription: string;
  start_date: Date;
  end_date: Date;
  part: string;
  skill: string;
  thumbnail: string;
  images: string[];
  // id: number;
  // title: string;
  color: string; 
  height: number; 
  dark?: boolean; // 마우스 호버 효과 임시 값
}

export interface SkillGroup {
  category: string;
  items: string[];
}
