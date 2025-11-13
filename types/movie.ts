export interface Movie {
  id: string;
  title: string;
  genre?: string;
  rating?: number;
  posterImageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateMovieRequest {
  title: string;
  genre?: string;
  rating?: number;
  posterImage?: File;
  posterImageUrl?: string;
}

export interface UpdateMovieRequest {
  title: string;
  genre?: string;
  rating?: number;
  posterImage?: File;
  posterImageUrl?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}

