export type WorkCategory = string;
export type Filter = string;

export interface Work {
  id: number;
  category: WorkCategory;
  tags: string[];
  title: string;
  description: string;
  start_date: number;
  end_date: number;
  part: string;
  skill: string;
  thumbnail: string;
  images: string[];
  color: string; 
  height: number; 
  dark?: boolean; // 마우스 호버 효과 임시 값
}

