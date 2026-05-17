import { Button } from "@heroui/react";
import PhotoCard from "./PhotoCard";
import Link from "next/link";

const FeaturedAnimals = async () => {
  const res = await fetch('https://qurbanihat-livestock-booking-platfo.vercel.app/data.json', { next: { revalidate: 10 } });
  const photos = await res.json();
  // console.log(animals);
  const featuredPhotos = photos.slice(0, 4);
  // console.log(featuredPhotos);
  
  
  return (
    <div>
      <h1 className="text-2xl font-bold mt-5">Featured Animals</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {
          featuredPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
        }
      </div>
      <Link href={`/all-animals`} className="w-full flex justify-center">
              <Button color="primary" variant="shadow" className=" font-medium  border-2  mt-6 bg-green-800  text-center hover:bg-green-700 text-white">
                View All Animals
              </Button>
            </Link>
    </div>
  );
};

export default FeaturedAnimals;