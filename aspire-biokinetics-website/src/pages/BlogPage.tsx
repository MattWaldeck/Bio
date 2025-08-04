import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/content.json';

const BlogPage: React.FC = () => {
  const { blog } = data;

  return (
    <div className="bg-brand-light py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
            {blog.title}
          </h1>
          <p className="text-lg text-gray-600">
            Insights from our team to help you on your wellness journey.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-1 gap-12">
          {blog.posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <h2 className="text-2xl font-bold text-brand-teal mb-2">
                <Link to={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                By {post.author} on {post.date}
              </p>
              <p className="text-gray-700 mb-6">{post.summary}</p>
              <Link
                to={`/blog/${post.id}`}
                className="font-bold text-brand-teal hover:text-brand-blue transition-colors"
              >
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
