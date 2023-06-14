import React from 'react';
import HappyClients from '../module/home/HappyClients';
import LastestBlogPost from '../module/home/LastestBlogPost';
import AboutUs from '../module/home/AboutUs';
import FeatureCars from '../module/home/FeatureCars';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="mt-24 px-3.5 xl:px-24">
      <FeatureCars></FeatureCars>
      <AboutUs></AboutUs>
      <LastestBlogPost></LastestBlogPost>
      <HappyClients></HappyClients>
      <div className="px-8 text-center ">
        <div className="xl:flex xl:justify-between">
          <div className="xl:text-start">
            <h2 className="mb-4 font-bold text-textBlue">
              Your questions and comments are important to us!
            </h2>
            <p className="mb-4 text-sm">Please contact us</p>
          </div>
          <Link to="/contact">
            <button className="w-full py-3 mb-32 text-sm text-white rounded bg-red xl:w-32">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="mb-24">
          <p className="font-light">COPYRIGHT © 2023 by Hieu Le </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
