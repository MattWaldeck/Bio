import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/content.json';

const SinglePostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = data.blog.posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link
          to="/blog"
          className="text-brand-teal hover:underline mt-4 inline-block"
        >
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
          {post.title}
        </h1>
        <p className="text-md text-gray-500 mb-8">
          By {post.author} on {post.date}
        </p>
        <div className="prose lg:prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>{post.content}</p>
        </div>
        <div className="mt-12 border-t pt-8">
          <Link
            to="/blog"
            className="text-brand-teal hover:text-brand-blue font-bold transition-colors"
          >
            &larr; Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
