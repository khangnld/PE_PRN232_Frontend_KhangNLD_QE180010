export interface Post {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostRequest {
  name: string;
  description: string;
  image?: File;
}

export interface UpdatePostRequest {
  name: string;
  description: string;
  image?: File;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}



