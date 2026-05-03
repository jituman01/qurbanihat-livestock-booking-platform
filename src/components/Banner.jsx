import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url('https://i.ibb.co.com/twD5dqkF/1000-F-801880121-CJx-ACc-BCqz-JWt-GOII9-D5afr-B32y7-QXuo.jpg')` }}
  className="h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl "
>
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-7xl text-center">
            <span className="text-yellow-500 animate__animated animate__fadeIn animate__slower">Your Trusted Online Hat</span> <br /><span className="animate__animated animate__fadeIn animate__slower">for  Eid ul-Adha</span>.
          </h1>
          <p className="text-lg max-w-7xl md:text-2 mb-6  text-gray-200 text-center animate__animated animate__fadeIn animate__slower">
            Simplicity Your Qurbani, Fulfill Your Obligation.Secure booking and Shariah-compliant process guaranteed.
          </p>

          <div className="flex gap-4 flex-col items-center">
            <Link href="/all-animals">
              <Button className="bg-linear-to-r from-green-800 to bg-yellow-500 p-6 border font-bold hover:border-b-2 hover:text-black">
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