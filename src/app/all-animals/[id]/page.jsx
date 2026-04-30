import { Button, Input, Card, Divider } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";


const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);
  const res = await fetch('https://qurbanihat-livestock-booking-platfo.vercel.app/data.json', { next: { revalidate: 10 } });
  const photos = await res.json();  
  // console.log(photos);
  const photo = photos.find(p => p.id == id)
  // console.log(photo);
  

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        
        <div className="flex-1 space-y-6 p-5 border rounded-2xl">
          <div className="rounded-3xl  shadow-sm">
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
            <TbCurrencyTaka size={30} /><span className="font-bold text-green-600">{photo.price.toLocaleString()}</span>
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

        
        <div className="w-full lg:w-[400px] lg:top-24 space-y-4">
          <Card className="p-8 border shadow-sm rounded-2xl">
            <h2 className="text-2xl font-bold mb-1">Book This Animal</h2>
            <p className="text-sm text-gray-500 mb-6">
              Requires user <Link href={`/signin`}><span className="text-green-600 font-medium">login</span></Link>
            </p>

            <form className="space-y-5">
              <div className="space-y-1">
                <label className="text-sm font-bold">Name</label>
                <Input placeholder="Name" variant="bordered" radius="sm" />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-bold">Email</label>
                <Input placeholder="Phone" variant="bordered" radius="sm" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold">Address</label>
                <Input placeholder="Address" variant="bordered" radius="sm" />
              </div>

              <Button 
                className="w-full bg-green-700 text-white font-bold h-12 mt-4" 
                radius="sm"
              >
                Submit Booking
              </Button>
            </form>
          </Card>

        </div>

      </div>
    </div>
  );
};

export default PhotoDetailsPage;