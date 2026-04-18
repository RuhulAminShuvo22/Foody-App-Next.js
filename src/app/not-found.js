import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      
      <div className="text-center max-w-xl">
        
        {/* Big 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-primary drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page Not Found 😢
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-4">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          
          <Link href="/" className="btn btn-primary px-6">
            🏠 Go Home
          </Link>

          <Link href="/foods-cc" className="btn btn-outline btn-secondary px-6">
            🍔 Browse Foods
          </Link>

        </div>

        {/* Extra design glow */}
        <div className="mt-10">
          <div className="w-32 h-32 mx-auto rounded-full bg-primary opacity-20 blur-3xl"></div>
        </div>

      </div>
    </div>
  );
};

