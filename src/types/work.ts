export type WorkCategory = string;
export type Filter = string;
export type add_images = 'image' | 'video';

export interface Work {
  id: number;
  category: WorkCategory;
  tags: string[];
  title: string;
  thumbnail: string;
  description: string;
  start_date: string;
  end_date: string;
  part: string;
  skill: string;
  screenshot: (string | MediaItem)[] | null;
  screenshot_subscript?: string | null;
  additional: string[] | null;
  additional_subscript?: string | null; 
  artwork: string[] | null;
  artwork_subscript?: string | null; 
}

export interface MediaItem {
  url: string;
  label?: string;
}