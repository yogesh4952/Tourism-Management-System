import { create } from 'zustand';
import axiosInstance from '../lib/axios.js';

const useBlogStore = create((set, get) => ({
  blogs: [],
  isLoading: false,
  error: null,
  selectedBlog: null,
  likedBlogs: new Set(),

  fetchBlogs: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get('/experience');
      set({ blogs: response.data.experiences });
    } catch (error) {
      console.error('Error fetching blogs:', error);
      set({ error: 'Failed to fetch blogs', blogs: [] });
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
      console.error('Failed to fetch blog details:', error);
      set({ selectedBlog: null });
    } finally {
      set({ isLoading: false });
    }
  },

  toggleLike: async (id) => {
    const { likedBlogs } = get();
    const isLiked = likedBlogs.has(id);

    try {
      const endpoint = isLiked ? `/experience/unlike/${id}` : `/experience/like/${id}`;
      const response = await axiosInstance.post(endpoint);
      const updatedExperience = response.data.experience;

      set((state) => {
        const newLikedBlogs = new Set(state.likedBlogs);
        if (isLiked) {
          newLikedBlogs.delete(id);
        } else {
          newLikedBlogs.add(id);
        }

        return {
          blogs: state.blogs.map((blog) =>
            blog._id === id ? { ...blog, likesCount: updatedExperience.likesCount } : blog
          ),
          likedBlogs: newLikedBlogs,
          selectedBlog:
            state.selectedBlog?._id === id
              ? { ...state.selectedBlog, likesCount: updatedExperience.likesCount }
              : state.selectedBlog,
        };
      });
    } catch (error) {
      console.error(`Failed to ${isLiked ? 'unlike' : 'like'} blog:`, error);
      throw error;
    }
  },
}));

export default useBlogStore;