import React, { useEffect } from 'react';
import useBlogStore from '../store/blogStore';
import { Link } from 'react-router-dom'; // Import Link
import Heart from '../Icon/Heart';

const Blog = () => {
  const {
    isLoading,
    blogs,
    error,
    fetchBlogs,
    selectedBlog,
    setSelectedBlog,
    incrementLike,
  } = useBlogStore();

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handleReadMore = (id) => {
    setSelectedBlog(id);
  };

  const handleLike = (id) => {
    incrementLike(id);
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
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {blogs.map((item) => (
                <div
                  key={item._id}
                  className='rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300'
                >
                  <img
                    src={
                      item.images[0] || 'https://via.placeholder.com/400x300'
                    }
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
                        className='btn btn-primary rounded-full'
                        onClick={() => handleLike(item._id)}
                      >
                        <Heart />
                        Like
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

            {/* Always show the "Post a Blog" button */}
            <Link
              to='/create-blog'
              className='btn btn-primary mt-4 w-full text-2xl'
            >
              Post a Blog
            </Link>

            {/* Display selected blog details in a Modal */}
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
                        selectedBlog.images[0] ||
                        'https://via.placeholder.com/800x400'
                      }
                      alt={selectedBlog.title}
                      className='w-full h-64 object-cover rounded-md mb-6'
                    />
                    <div className='leading-relaxed'>
                      {selectedBlog.content}
                    </div>
                    <div className='flex justify-between items-center mt-8'>
                      <div>
                        <span>
                          <i className='fas fa-thumbs-up mr-1'></i>
                          {selectedBlog.likesCount} Likes
                        </span>
                      </div>
                      <button
                        className='bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-200'
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
