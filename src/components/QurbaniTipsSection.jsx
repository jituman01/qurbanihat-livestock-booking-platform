"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const QurbaniTipsSection = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (title, details, icon) => {
    setModalData({ title, details, icon });
  };

  return (
    <section className="bg-[#f1ede4] py-16 px-4  mt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#183f2d]">
          Qurbani Tips and Top Breeds
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Qurbani Tips</h3>

            <div className="bg-[#183f2d] p-5 rounded-2xl flex gap-5 shadow-sm border border-gray-100 items-center">
              <div className="w-24 h-24 bg-[#e8f0eb] rounded-2xl  flex items-center justify-center p-4">
                <img src="https://i.ibb.co.com/Pv1bpvHY/cattle.png" alt="Selection" className="w-full h-full " />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Selection Process</h4>
                <p className="text-sm text-gray-400 mb-3">Choose a healthy animal by checking its physical appearance...</p>
                <button 
                  onClick={() => openModal("Selection Process", "Ensure the animal is of the correct age (Cows 2 yrs, Goats 1 yr). Check for clear eyes, active movement, and a shiny coat. Avoid any animal with physical defects.", "https://i.ibb.co.com/Pv1bpvHY/cattle.png")}
                  className="px-5 py-1.5 border border-white text-white rounded-lg text-sm font-bold hover:bg-white hover:text-[#183f2d] "
                >
                  View More
                </button>
              </div>
            </div>

            <div className="bg-[#183f2d] p-5 rounded-2xl flex gap-5 shadow-sm border border-gray-100 items-center">
              <div className="w-24 h-24 bg-[#e8f0eb] rounded-2xl  flex items-center justify-center p-4">
                <img src="https://i.ibb.co.com/KpQgFq1X/harvest.png" alt="Feeding" className="w-full h-full " />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Feeding Rules</h4>
                <p className="text-sm text-gray-400 mb-3">Maintaining a proper diet before the sacrifice is essential...</p>
                <button 
                  onClick={() => openModal("Feeding Rules", "Give fresh grass and clean water. Stop solid food 12 hours before sacrifice to keep the stomach clean, which helps in a more hygienic slaughtering process.", "https://i.ibb.co.com/KpQgFq1X/harvest.png")}
                  className="px-5 py-1.5 border border-white text-white rounded-lg text-sm font-bold hover:bg-white hover:text-[#183f2d]"
                >
                  View More
                </button>
              </div>
            </div>

            <div className="bg-[#183f2d] p-5 rounded-2xl flex gap-5 shadow-sm border border-gray-100 items-center">
              <div className="w-24 h-24 bg-[#e8f0eb] rounded-2xl  flex items-center justify-center p-4">
                <img src="https://i.ibb.co.com/sJKnMvFC/knife.png" alt="Day of Qurbani" className="w-full h-full " />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Day of Qurbani</h4>
                <p className="text-sm text-gray-400 mb-3">Prepare yourself and the environment for a clean sacrifice...</p>
                <button 
                  onClick={() => openModal("Day of Qurbani", "Use a very sharp knife to minimize pain. Choose a clean, secluded spot. Ensure the animal is calm and follow all religious and hygienic protocols strictly.", "https://i.ibb.co.com/sJKnMvFC/knife.png")}
                  className="px-5 py-1.5 border border-white text-white rounded-lg text-sm font-bold hover:bg-white hover:text-[#183f2d] "
                >
                  View More
                </button>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Top Breeds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm relative group p-3">
                <img src="https://i.ibb.co.com/hxYb1TcK/Gemini-Generated-Image-dhfbsqdhfbsqdhfb.png" alt="Shahiwal" className="w-full h-48 object-cover rounded-2xl rounded-2xl" />

                <div className="p-4">
                  
                  <h4 className="font-bold text-[#183f2d] mt-2">Deshi Shahi Cow</h4>
                  <p className="text-xs text-gray-400 ">A strong cow, our local breed, slight hump and large ears...</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm relative p-3">
                <img src="https://i.ibb.co.com/zVp4sNgH/Gemini-Generated-Image-txtciytxtciytxtc.png" alt="Black Bengal" className="w-full h-48 object-cover rounded-2xl" />
                <div className="p-4">
                  
                  <h4 className="font-bold text-[#183f2d] mt-2">Black Bengal Goat</h4>
                  <p className="text-xs text-gray-400 ">Famous for high-quality meat and shiny black coat...</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm relative p-3">
                <img src="https://i.ibb.co.com/G4c7NDQk/Gemini-Generated-Image-s7o4xus7o4xus7o4.png.jpg" alt="Jamunapari" className="w-full h-48 object-cover rounded-2xl" />
                <div className="p-4">
                  
                  <h4 className="font-bold text-[#183f2d] mt-2">Jamunapari Goat</h4>
                  <p className="text-xs text-gray-400 ">Long ears, tall height, known for its elegant build...</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm relative p-3">
                <img src="https://i.ibb.co.com/F4tWpJ4C/Gemini-Generated-Image-ojw6d9ojw6d9ojw6.png" alt="Australian" className="w-full h-48 object-cover rounded-2xl" />
                <div className="p-4">
                  
                  <h4 className="font-bold text-[#183f2d] mt-2">Australian Friesian Cow</h4>
                  <p className="text-xs text-gray-400 ">Large size, high weight, and premium meat volume...</p>
                </div>
              </div>
            
            </div>

          </div>
        </div>
      </div>

      {modalData && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl ">
            <div className="bg-[#e8f0eb] p-6 flex justify-center">
              <Image src={modalData.icon} width={64} height={64} alt="Icon" className="w-16 h-16" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#183f2d] mb-4">{modalData.title}</h3>
              <p className="text-gray-600 ">
                {modalData.details}
              </p>
              <button 
                onClick={() => setModalData(null)}
                className="mt-6 w-full bg-[#183f2d] text-white py-2.5 rounded-xl font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default QurbaniTipsSection;