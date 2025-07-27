import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col items-start justify-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/bannerImage01.jpg')] bg-no-repeat bg-cover bg-center h-screen">
      <p className="bg-[#49B9FF]/50 px-3 py-1 rounded-full mt-12 sm:mt-16 md:mt-20 text-sm sm:text-base">The Ultimate Travel Experience</p>
      <h1 className="font-playfair text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-tight md:leading-[1.2] font-bold md:font-extrabold max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mt-3 sm:mt-4">Journey Through the Heart of Bangladesh</h1>
      <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-130 mt-2 text-sm sm:text-base md:text-lg">Discover hidden gems, vibrant culture & unforgettable adventures with TourNest BD.</p>
      <form className="bg-white text-gray-500 rounded-lg px-4 sm:px-6 py-4 mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-full sm:max-w-3xl">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-800 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
            </svg>
            <label htmlFor="destinationInput" className="text-sm sm:text-base">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-800 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
            </svg>
            <label htmlFor="checkIn" className="text-sm sm:text-base">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-800 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
            </svg>
            <label htmlFor="checkOut" className="text-sm sm:text-base">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex-1 min-w-0 max-w-[80px] sm:max-w-[100px]">
          <div className="flex items-center gap-2">
            <label htmlFor="guests" className="text-sm sm:text-base">Guests</label>
          </div>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="0"
          />
        </div>

        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-2 sm:py-3 px-4 text-white text-sm sm:text-base cursor-pointer w-full sm:w-auto">
          <svg className="w-4 h-4 text-white flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Banner;