import PhotoCard from "./PhotoCard";

const FeaturedAnimals = async () => {
  const res = await fetch('https://qurbanihat-livestock-booking-platfo.vercel.app/data.json');
  const photos = await res.json();
  // console.log(animals);
  const featuredPhotos = photos.slice(0, 4);
  // console.log(featuredPhotos);
  
  
  return (
    <div>
      <h1 className="text-2xl font-bold mt-5">Featured Animals</h1>

      <div>
        {
          featuredPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
        }
      </div>
    </div>
  );
};

export default FeaturedAnimals;