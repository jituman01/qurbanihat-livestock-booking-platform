import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllAnimalsPage = async () => {
  const res = await fetch('https://qurbanihat-livestock-booking-platfo.vercel.app/data.json',{ cache: 'no-store' });
  const photos = await res.json();
  console.log(photos ,'allphotos');
  

  return (
    <div>
      <h1 className='text-2xl font-bold m-4'>All Animals</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {
                photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
              }
            </div>
    </div>
  );
};

export default AllAnimalsPage;