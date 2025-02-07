import React, { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState('');
  const [tags, setTags] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !content || !location) {
      setError('Please provide all required fields.');
      return;
    }

    setError('');

    const experienceData = {
      title,
      description,
      content,
      location,
      images: images ? images.split(',').map((img) => img.trim()) : [],
      tags: tags ? tags.split(',').map((tag) => tag.trim()) : [],
      rating: parseFloat(rating),
    };

    try {
      const response = await axios.post(
        'http://localhost:5001/api/experience/add',
        experienceData,
        {
          headers: {
            Authorization: `Bearer YOUR_AUTH_TOKEN`, // Replace with actual token
          },
        }
      );

      setMessage(response.data.message);

      // Clear form after successful submission
      setTitle('');
      setDescription('');
      setContent('');
      setLocation('');
      setImages('');
      setTags('');
      setRating(0);
    } catch (error) {
      setError(
        `Error adding experience: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <div className='min-h-screen p-6'>
      <h1 className='text-4xl font-bold mb-8 text-center'>
        Add New Experience
      </h1>
      <form
        onSubmit={handleSubmit}
        className='max-w-lg mx-auto  shadow-lg rounded-lg p-8'
      >
        {error && (
          <div className='text-red-500 text-sm italic mb-4'>{error}</div>
        )}
        {message && (
          <div className='text-green-500 text-sm italic mb-4'>{message}</div>
        )}

        <div className='mb-4'>
          <label htmlFor='title' className='block text-sm font-medium mb-2'>
            Title:
          </label>
          <input
            type='text'
            id='title'
            className='block w-full p-2  border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='description'
            className='block text-sm font-medium mb-2'
          >
            Description:
          </label>
          <textarea
            id='description'
            className='block w-full p-2  border   rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='content' className='block text-sm font-medium mb-2'>
            Content:
          </label>
          <textarea
            id='content'
            className='block w-full p-2 border   rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows='5'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='location' className='block text-sm font-medium mb-2'>
            Location:
          </label>
          <input
            type='text'
            id='location'
            className='block w-full p-2  border dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='images' className='block text-sm font-medium mb-2'>
            Images (comma-separated URLs):
          </label>
          <input
            type='text'
            id='images'
            className='block w-full p-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='tags' className='block text-sm font-medium mb-2'>
            Tags (comma-separated):
          </label>
          <input
            type='text'
            id='tags'
            className='block w-full p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='rating' className='block text-sm font-medium mb-2'>
            Rating (0-5):
          </label>
          <input
            type='number'
            id='rating'
            className='block w-full p-2  border dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min='0'
            max='5'
            step='0.1'
          />
        </div>

        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-600 hover:bg-blue-800  font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'
            type='submit'
          >
            Add Experience
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
