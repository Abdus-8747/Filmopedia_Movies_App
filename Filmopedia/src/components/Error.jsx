import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="text-center p-8">
        <h1 className="text-6xl font-extrabold text-teal-400 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-teal-500 text-white rounded-full font-semibold shadow-lg hover:bg-teal-600 transition-transform"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
