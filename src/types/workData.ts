export type WorkCategory = string;
export type Filter = string;

export interface Work {
  id: number;
  category: WorkCategory;
  tags: string[];
  title: string;
  thumbnail: string;
  description: string;
  start_date: number;
  end_date: number;
  part: string;
  skill: string;
  screenshot: (string | MediaItem)[] | null;
  screenshot_info?: string | null;
  add_images: string[] | null;
  additional?: string | null; 
}

export interface MediaItem {
  url: string;
  label?: string;
}