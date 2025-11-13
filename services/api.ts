import axios from 'axios';
import { Post, ApiResponse, CreatePostRequest, UpdatePostRequest } from '@/types/post';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5291/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postService = {
  // Get all posts
  getAllPosts: async (): Promise<Post[]> => {
    const response = await apiClient.get<ApiResponse<Post[]>>('/post');
    return response.data.data || [];
  },

  // Get post by ID
  getPostById: async (id: string): Promise<Post> => {
    const response = await apiClient.get<ApiResponse<Post>>(`/post/${id}`);
    if (!response.data.data) {
      throw new Error('Post not found');
    }
    return response.data.data;
  },

  // Create post
  createPost: async (data: CreatePostRequest): Promise<Post> => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    if (data.image) {
      formData.append('image', data.image);
    }

    const response = await apiClient.post<ApiResponse<Post>>('/post', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (!response.data.data) {
      throw new Error(response.data.message || 'Failed to create post');
    }
    return response.data.data;
  },

  // Update post
  updatePost: async (id: string, data: UpdatePostRequest): Promise<Post> => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    if (data.image) {
      formData.append('image', data.image);
    }

    const response = await apiClient.put<ApiResponse<Post>>(`/post/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (!response.data.data) {
      throw new Error(response.data.message || 'Failed to update post');
    }
    return response.data.data;
  },

  // Delete post
  deletePost: async (id: string): Promise<void> => {
    await apiClient.delete<ApiResponse<null>>(`/post/${id}`);
  },

  // Search posts by name
  searchPosts: async (name: string): Promise<Post[]> => {
    const response = await apiClient.get<ApiResponse<Post[]>>('/post/search', {
      params: { name },
    });
    return response.data.data || [];
  },

  // Sort posts by name
  sortPosts: async (ascending: boolean = true): Promise<Post[]> => {
    const response = await apiClient.get<ApiResponse<Post[]>>('/post/sort', {
      params: { ascending },
    });
    return response.data.data || [];
  },
};



