// components/Blog.js
import React, { useEffect, useState } from 'react';
import useBlogStore from '../store/blogStore';
import { Link } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { setAuthToken } from '../lib/axios';
import Heart from '../Icon/Heart';

const Blog = () => {
  const {
    isLoading,
    blogs,
    error,
    fetchBlogs,
    selectedBlog,
    setSelectedBlog,
    toggleLike,
    likedBlogs,
  } = useBlogStore();
  const [likeError, setLikeError] = useState(null);
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    const initializeAuth = async () => {
      if (isSignedIn) {
        const token = await getToken();
        setAuthToken(token);
      }
      fetchBlogs();
    };
    initializeAuth();
  }, [fetchBlogs, isSignedIn, getToken]);

  const handleReadMore = (id) => {
    setSelectedBlog(id);
  };

  const handleLikeToggle = async (id) => {
    if (!isSignedIn) {
      setLikeError('Please sign in to like posts');
      return;
    }
    setLikeError(null);
    try {
      await toggleLike(id);
    } catch (error) {
      setLikeError(error.message);
      console.error('Like toggle failed:', error);
    }
  };

  return (
    <div className='min-h-screen py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-extrabold mb-8 text-center'>
          Explore Our Adventures
        </h1>
        {isLoading ? (
          <p className='text-center text-xl'>Loading...</p>
        ) : error ? (
          <p className='text-center text-red-500'>{error}</p>
        ) : (
          <>
            {likeError && (
              <p className='text-center text-red-500 mb-4'>
                {likeError}
                {likeError.includes('Unauthorized') && (
                  <Link to='/sign-in' className='underline ml-2'>
                    Sign In
                  </Link>
                )}
              </p>
            )}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {blogs.map((item) => (
                <div
                  key={item._id}
                  className='rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300'
                >
                  <img
                    src={item.images[0] || 'https://via.placeholder.com/400x300'}
                    alt={item.title}
                    className='w-full h-56 object-cover'
                  />
                  <div className='p-6'>
                    <h2 className='text-xl font-semibold mb-2'>{item.title}</h2>
                    <p className='text-sm mb-2'>
                      <i className='fas fa-map-marker-alt mr-1'></i>
                      {item.location}
                    </p>
                    <p className='leading-relaxed mb-4'>
                      {item.description.substring(0, 100)}...
                    </p>
                    <div className='flex justify-between items-center mt-4'>
                      <button
                        className={`btn btn-primary rounded-full ${
                          likedBlogs.has(item._id)
                            ? 'bg-red-500 hover:bg-red-600'
                            : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                        onClick={() => handleLikeToggle(item._id)}
                      >
                        <Heart />
                        {likedBlogs.has(item._id) ? 'Unlike' : 'Like'}
                      </button>
                      <span>
                        <i className='fas fa-thumbs-up mr-1'></i>
                        {item.likesCount} Likes
                      </span>
                    </div>
                    <button
                      className='block mt-4 text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-200'
                      onClick={() => handleReadMore(item._id)}
                    >
                      Read More <i className='fas fa-arrow-right ml-1'></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Link to='/create-blog' className='btn btn-primary mt-4 w-full text-2xl'>
              Post a Blog
            </Link>

            {selectedBlog && (
              <div className='fixed top-0 left-0 w-full h-full bg-base-100 bg-opacity-50 flex justify-center items-center'>
                <div className='rounded-xl shadow-lg overflow-hidden max-w-2xl w-full'>
                  <div className='p-8'>
                    <h1 className='text-3xl font-extrabold mb-4'>
                      {selectedBlog.title}
                    </h1>
                    <p className='mb-6'>
                      <i className='fas fa-map-marker-alt mr-1'></i>
                      {selectedBlog.location}
                    </p>
                    <img
                      src={
                        selectedBlog.images[0] || 'https://via.placeholder.com/800x400'
                      }
                      alt={selectedBlog.title}
                      className='w-full h-64 object-cover rounded-md mb-6'
                    />
                    <div className='leading-relaxed'>{selectedBlog.content}</div>
                    <div className='flex justify-between items-center mt-8'>
                      <div>
                        <button
                          className={`btn btn-primary rounded-full mr-4 ${
                            likedBlogs.has(selectedBlog._id)
                              ? 'bg-red-500 hover:bg-red-600'
                              : 'bg-blue-500 hover:bg-blue-600'
                          }`}
                          onClick={() => handleLikeToggle(selectedBlog._id)}
                        >
                          <Heart />
                          {likedBlogs.has(selectedBlog._id) ? 'Unlike' : 'Like'}
                        </button>
                        <span>
                          <i className='fas fa-thumbs-up mr-1'></i>
                          {selectedBlog.likesCount} Likes
                        </span>
                      </div>
                      <button
                        className='bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded-full'
                        onClick={() => setSelectedBlog(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;