'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-offwhite text-dark-green px-6 py-12 font-arya text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        404 – Page Not Found
      </h1>
      <p className="text-lg md:text-xl mb-10 font-bitter">
        The page you're looking for doesn't exist.<br />
        But something beautiful might be growing elsewhere.
      </p>
      <Link
        href="/"
        className="text-dark-green font-bold text-lg md:text-xl underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity duration-300"
      >
        Return to Sunflower Capital
      </Link>
    </div>
  );
}
