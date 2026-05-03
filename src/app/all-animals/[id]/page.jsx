import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import BookingForm from "@/components/BookingForm"; 

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  
  const res = await fetch('https://qurbanihat-livestock-booking-platfo.vercel.app/data.json', { 
    next: { revalidate: 10 } 
  });
  const photos = await res.json();  
  const photo = photos.find(p => p.id == id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        <div className="flex-1 space-y-6 p-5 border rounded-2xl bg-white">
          <div className="rounded-3xl shadow-sm overflow-hidden">
            <Image
              src={photo.image}
              alt={photo.name}
              width={800}
              height={500}
              className="w-full object-cover aspect-[16/10]"
              unoptimized={true}
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">{photo.name}</h1>
            <div className="flex items-center gap-3 text-2xl text-green-600">
              <TbCurrencyTaka size={30} />
              <span className="font-bold text-green-600">{photo.price.toLocaleString()}</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 text-lg font-semibold">{photo.weight} kg</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {photo.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Animal Specs</h3>
            <div className="space-y-2 max-w-xs">
              <div className="flex justify-between border-b pb-1">
                <span className="text-gray-500">Breed</span>
                <span className="font-medium">{photo.breed}</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-gray-500">Category</span>
                <span className="font-medium">{photo.category}</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-gray-500">Weight</span>
                <span className="font-medium">{photo.weight} kg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[400px] space-y-4">
          <BookingForm /> 
        </div>

      </div>
    </div>
  );
};

export default PhotoDetailsPage;