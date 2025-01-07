import React from 'react';
import blogImage1 from '../assets/images/blogImage1.png';
import blogImage2 from '../assets/images/blogImage2.png';
import blogImage3 from '../assets/images/blogImage3.png';
import profile1 from '../assets/images/profile.png';
import profile2 from '../assets/images/pheonix.svg';
import profile3 from '../assets/images/lana.svg';

function Blog() {
  const blogPosts = [
    {
      category: 'Design',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      date: '20 Jan 2024',
      image: blogImage1,
      profileImage: profile1
    },
    {
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      author: 'Phoenix Baker',
      date: '19 Jan 2024',
      image: blogImage2,
      profileImage: profile2
    },
    {
      category: 'Software Engineering',
      title: 'Building your API stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      date: '18 Jan 2024',
      image: blogImage3,
      profileImage: profile3
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-8 sm:mb-0">
          <h2 className="text-base font-semibold text-red-500 uppercase tracking-wide">Our blog</h2>
          <h1 className="mt-2 text-3xl sm:text-4xl leading-8 font-bold tracking-tight text-gray-900">
            Latest blog posts
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-500 max-w-2xl">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="w-full sm:w-auto bg-red-500 text-white px-5 py-2 rounded-lg text-lg sm:text-xl">
          View all posts
        </button>
      </div>

      {/* Blog Posts */}
      <div className="mt-12 grid gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
        {blogPosts.map((post, index) => (
          <div key={index} className="flex flex-col overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-red-500">
                  {post.category}
                </p>
                <a href="#" className="block mt-2">
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base sm:text-lg text-gray-500">{post.description}</p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <img className="h-10 w-10 rounded-full" src={post.profileImage} alt={post.author} />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {post.author}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 

export default Blog;
