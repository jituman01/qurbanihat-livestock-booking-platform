import React from 'react';
import AnimalList from '@/components/AnimalList'; 

const AllAnimalsPage = async () => {
  const res = await fetch('https://qurbanihat-livestock-booking-platfo.vercel.app/data.json', { cache: 'no-store' });
  const photos = await res.json();

  return (
    <div>
      <h1 className='text-2xl font-bold m-4'>All Animals</h1>
      <AnimalList initialPhotos={photos} />
    </div>
  );
};

export default AllAnimalsPage;