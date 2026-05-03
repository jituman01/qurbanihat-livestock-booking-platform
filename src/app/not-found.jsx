'use client';
import Link from 'next/link';
import { Button } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import notFoundImage from "/not-found.png"

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <Image
        src="/not-found.png"
        alt="Not Found"
        width={500}
        height={300}
        className="object-contain"
      />

      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page is temporarily unavailable.
        </p>

        <Button
          onClick={() => router.push('/')}
          color="primary"
          variant="primary"
          className="font-bold px-8"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
