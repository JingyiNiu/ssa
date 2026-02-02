export interface BlogPost {
  id: number;
  title: string;
  description?: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
}
