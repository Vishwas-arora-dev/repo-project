export interface Repository {
  id: string;
  name: string;
  language: string;
  size: string;
  visibility: 'Public' | 'Private';
  updatedAt: string;
  owner?: string;
  description?: string;
  stars?: number;
  forks?: number;
} 