import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url('https://i.pinimg.com/1200x/06/6c/31/066c31b185449de30084a7e606d01d2f.jpg')` }}
  className="h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl"
>
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-7xl text-center">
            <span className="text-yellow-500">Your Trusted Online Hat</span> <br />for  Eid ul-Adha.
          </h1>
          <p className="text-lg max-w-7xl md:text-2 mb-6  text-gray-200 text-center">
            Simplicity Your Qurbani, Fulfill Your Obligation.Secure booking and Shariah-compliant process guaranteed.
          </p>

          <div className="flex gap-4 flex-col items-center">
            <Link href="#">
              <Button className="bg-linear-to-r from-green-800 to bg-yellow-500 p-6 border ">
                Browse All Animals
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;