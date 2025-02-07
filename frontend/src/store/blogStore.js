import { create } from 'zustand';
import axiosInstance from '../lib/axios';

const useBlogStore = create((set) => ({
  blogs: [],
  isLoading: false,
  error: null,
  selectedBlog: null,

  fetchBlogs: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get('/experience');
      set({ blogs: response.data.experiences });
    } catch (error) {
      set({ error: 'Failed to fetch data', blogs: [] });
    } finally {
      set({ isLoading: false });
    }
  },

  setSelectedBlog: async (id) => {
    set({ isLoading: true, selectedBlog: null });
    try {
      const response = await axiosInstance.get(`/experience/${id}`);
      set({ selectedBlog: response.data.experience });
    } catch (error) {
      set({ selectedBlog: null });
      console.error('Failed to fetch blog details:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  incrementLike: async (id) => {
    try {
      const response = await axiosInstance.post(`/experience/like/${id}`);
      const updatedExperience = response.data.experience;
      set((state) => ({
        blogs: state.blogs.map((blog) =>
          blog._id === id
            ? { ...blog, likesCount: updatedExperience.likesCount }
            : blog
        ),
      }));
    } catch (error) {
      console.error('Failed to like blog:', error);
    }
  },
}));

export default useBlogStore;
