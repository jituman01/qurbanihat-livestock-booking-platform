import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaWeightHanging, FaMapMarkerAlt } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full aspect-[4/3] mb-3">
        <Image
          src={photo.image}
          fill
          unoptimized={true}
          priority={photo.id === 1}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo.name}
          className="object-cover rounded-lg"
        />
        <Chip size="sm" color="success" variant="flat" className="absolute right-2 top-2">
            {photo.category}
        </Chip>
      </div>

      <div className="space-y-2 mb-4">
        <h2 className="font-bold text-lg text-gray-800">{photo.name}</h2>
        <div className="flex items-center text-sm text-gray-600 gap-1">
            <FaMapMarkerAlt className="text-red-500" />
            <span>{photo.location}</span>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
          <div className="flex items-center gap-1 text-green-700 font-bold">
            <TbCurrencyTaka size={20} />
            <span>{photo.price?.toLocaleString()}</span>
          </div>
          <div className="w-[1px] h-4 bg-gray-300" /> {/* ম্যানুয়াল ডিভাইডার */}
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <FaWeightHanging />
            <span>{photo.weight} kg</span>
          </div>
        </div>
      </div>

      <Link href={`/all-animals/${photo.id}`} className="w-full">
        <Button color="primary" variant="shadow" className="w-full font-medium">
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default PhotoCard;