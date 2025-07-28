import React from 'react';
import Marquee from 'react-fast-marquee';
import { Typewriter } from 'react-simple-typewriter';

const steps = [
  {
    id: 1,
    title: 'Choose Your Plan',
    description:
      "Select a travel plan tailored to your needs and budget. From solo adventures to group tours, we have the perfect option for you.",
    imageUrl: 'https://i.postimg.cc/BQqgfFCw/942c3237f0e5458df4d49f2c9a657c80.jpg',
  },
  {
    id: 2,
    title: 'Enjoy the Journey',
    description:
      "Immerse yourself in stunning landscapes and unforgettable moments. TourNest BD ensures a seamless travel experience.",
    imageUrl: 'https://i.postimg.cc/G2VZSQDN/979d087a49f05e58b2fecaf9f4796eb1.jpg',
  },
  {
    id: 3,
    title: 'Book with Ease',
    description:
      "Enjoy a hassle-free booking process with no hidden fees. Confirm your trip in just a few clicks and start your adventure!",
    imageUrl: 'https://i.postimg.cc/zfjzM9DQ/5d57c4ab76328dc76fee218781b38e08.jpg',
  },
];

const HowItWorks = () => (
  <section className="py-12 sm:py-16 lg:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-gray-900">
        <Typewriter
          words={["Here's How It Works", 'Only 3 Simple Steps', 'Get Started Now!']}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
      <p className="text-center text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 font-medium">
        Explore More, Worry Less with TourNest BD
      </p>
      <Marquee speed={60} pauseOnHover gradient={false}>
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center mx-4 sm:mx-6 lg:mx-8 w-64 sm:w-72 lg:w-80 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative mb-6">
              <img
                src={step.imageUrl}
                alt={step.title}
                className="h-48 sm:h-52 lg:h-56 w-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl ring-2 ring-offset-2 ring-blue-200 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </Marquee>
    </div>
  </section>
);

export default HowItWorks;