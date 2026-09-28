import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AboutLayout() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12">
        <Outlet />
      </div>
    </div>
  );
}
