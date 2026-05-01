"use client"; 
import React, { useState } from 'react';
import PhotoCard from '@/components/PhotoCard';

const AnimalList = ({ initialPhotos }) => {
  const [sortBy, setSortBy] = useState("");

  const price = [...initialPhotos].sort((a, b) => {
    if (sortBy === "low-to-high") return a.price - b.price;
    if (sortBy === "high-to-low") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <div className="flex justify-end mb-6 px-4 ">
        <select 
          className="select select-bordered w-full max-w-xs  border-2 p-2 rounded-md bg-gray-100"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {price.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;