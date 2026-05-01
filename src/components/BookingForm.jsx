"use client";

import { Button, Input, Card } from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";

const BookingForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    e.target.reset();
    
    toast.success('Booking Successful! We will contact you soon.', {
      duration: 5000,
      position: 'top-center',
      style: {
        background: '#15803d',
        color: '#fff',
        fontWeight: 'bold',
      },iconTheme: {
        primary: '#fff',
        secondary: '#15803d',
      },
    });
  };

  return (
    <Card className="p-8 border shadow-sm rounded-2xl">
      <h2 className="text-2xl font-bold mb-1">Book This Animal</h2>
      <p className="text-sm text-gray-500 mb-6">
        Requires user <Link href={`/signin`}><span className="text-blue-600 font-medium">login</span></Link>
      </p>


      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1 space-x-2">
          <label className="text-sm font-bold">Name</label>
          <Input name="name" placeholder="Your Name" variant="bordered" radius="sm" required />
        </div>
        
        <div className="space-y-1 space-x-2">
          <label className="text-sm font-bold">Phone</label>
          <Input name="phone" placeholder="Your Phone Number" variant="bordered" radius="sm" required />
        </div>

        <div className="space-y-1 space-x-2">
          <label className="text-sm font-bold">Address</label>
          <Input name="address" placeholder="Your Address" variant="bordered" radius="sm" required />
        </div>

        <Button 
          type="submit"
          className="w-full bg-green-700 text-white font-bold h-12 mt-4 hover:bg-green-800 transition-colors" 
          radius="sm"
        >
          Submit Booking
        </Button>
      </form>
    </Card>
  );
};

export default BookingForm;