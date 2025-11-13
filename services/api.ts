import axios from 'axios';
import { Movie, ApiResponse, CreateMovieRequest, UpdateMovieRequest } from '@/types/movie';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5291/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const movieService = {
  // Get all movies with optional search, filter, and sort
  getAllMovies: async (params?: {
    search?: string;
    genre?: string;
    sortBy?: string;
    ascending?: boolean;
  }): Promise<Movie[]> => {
    const response = await apiClient.get<ApiResponse<Movie[]>>('/movie', { params });
    return response.data.data || [];
  },

  // Get movie by ID
  getMovieById: async (id: string): Promise<Movie> => {
    const response = await apiClient.get<ApiResponse<Movie>>(`/movie/${id}`);
    if (!response.data.data) {
      throw new Error('Movie not found');
    }
    return response.data.data;
  },

  // Create movie
  createMovie: async (data: CreateMovieRequest): Promise<Movie> => {
    const formData = new FormData();
    formData.append('title', data.title);
    if (data.genre) {
      formData.append('genre', data.genre);
    }
    if (data.rating !== undefined && data.rating !== null) {
      formData.append('rating', data.rating.toString());
    }
    if (data.posterImage) {
      formData.append('posterImage', data.posterImage);
    }
    if (data.posterImageUrl) {
      formData.append('posterImageUrl', data.posterImageUrl);
    }

    const response = await apiClient.post<ApiResponse<Movie>>('/movie', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (!response.data.data) {
      throw new Error(response.data.message || 'Failed to create movie');
    }
    return response.data.data;
  },

  // Update movie
  updateMovie: async (id: string, data: UpdateMovieRequest): Promise<Movie> => {
    const formData = new FormData();
    formData.append('title', data.title);
    if (data.genre) {
      formData.append('genre', data.genre);
    }
    if (data.rating !== undefined && data.rating !== null) {
      formData.append('rating', data.rating.toString());
    }
    if (data.posterImage) {
      formData.append('posterImage', data.posterImage);
    }
    if (data.posterImageUrl) {
      formData.append('posterImageUrl', data.posterImageUrl);
    }

    const response = await apiClient.put<ApiResponse<Movie>>(`/movie/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (!response.data.data) {
      throw new Error(response.data.message || 'Failed to update movie');
    }
    return response.data.data;
  },

  // Delete movie
  deleteMovie: async (id: string): Promise<void> => {
    await apiClient.delete<ApiResponse<null>>(`/movie/${id}`);
  },
};
