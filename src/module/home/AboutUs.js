import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="mt-24 mb-16">
      <h2 className="relative text-2xl mb-24 font-medium font-logo after:absolute after:w-full after:h-[1px] after:bg-borderBarelyVisible after:bottom-[-12px] after:left-0 xl:text-2xl xl:font-bold">
        About Us
      </h2>
      <div className="xl:flex xl:gap-4">
        <div className="flex flex-col gap-6 text-[#4a4a4a]">
          <p className="text-sm font-light leading-6">
            If you’re looking for a reliable car that will not only be an
            amazing investment but also come with great features, then us is a
            perfect choice. We have put together this blog post to highlight the
            top 10 reasons why owning a Car should be your next priority!
          </p>
          <ul className="text-sm leading-6 list-disc pl-3.5">
            <li className="mb-2 font-medium text-textBlue">
              Powerful Engines and Great Performance
            </li>
            <li className="mb-2 font-medium text-textBlue">
              Dependable and Built to Last
            </li>
            <li className="mb-2 font-medium text-textBlue">
              Super Stylish Cars That Turn Heads Wherever They Go!
            </li>
            <li className="mb-2 font-medium text-textBlue">
              Super Stylish Cars That Turn Heads Wherever They Go!
            </li>
          </ul>
          <Link to="/aboutus">
            <button className="w-1/3 px-3 py-2 mb-5 font-medium text-white rounded bg-red hover:bg-black xl:w-1/4 xl:font-sm xl:px-1">
              Read More
            </button>
          </Link>
        </div>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/565/661/238/porsche-taycan-electric-car-hd-wallpaper-preview.jpg"
          alt="error"
          className="xl:w-[48%] xl:rounded xl:object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUs;
