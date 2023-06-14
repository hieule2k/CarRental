import React, { useEffect, useState } from 'react';
import data from '../../data/slider/slider.json';
import { useLocation } from 'react-router';

const Banner = () => {
  const location = useLocation();
  const [bannerData, setBannerData] = useState({});
  useEffect(() => {
    if (location.pathname === '/cars') {
      setBannerData({
        ...bannerData,
        imgSrc:
          'https://e1.pxfuel.com/desktop-wallpaper/930/680/desktop-wallpaper-need-for-speed-8-1280x720-car-full.jpg',
        header: 'Find Your Car',
      });
    } else if (location.pathname === '/aboutus') {
      setBannerData({
        ...bannerData,
        imgSrc:
          'https://c4.wallpaperflare.com/wallpaper/949/853/200/porsche-taycan-electric-car-hd-wallpaper-preview.jpg',
        header: 'ABOUT US',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <div className={`transition-all ease-in-out duration-700`}>
        <div className="w-full h-[356px] xl:h-[81vh]">
          <img
            src={bannerData.imgSrc}
            alt="nothing"
            className="object-cover w-full h-full "
          />
        </div>
        <div className="absolute flex justify-center w-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <h2 className="text-3xl font-bold text-red">{bannerData.header}</h2>
        </div>
      </div>
    </div>
  );
};

const DefaultSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = (index) => {
    setCurrentSlide(currentSlide === index ? currentSlide : index);
  };

  return (
    <div className="relative">
      <div className="absolute flex justify-center w-full gap-5 bottom-4">
        {data.map((item, index) => (
          <span
            key={index}
            onClick={() => {
              nextSlide(index);
            }}
            className={`z-20 w-[10px] h-[10px] bg-white rounded-full ${
              index === currentSlide ? 'opacity-100' : 'opacity-60'
            }`}
          ></span>
        ))}
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`transition-all ease-in-out duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-60'
          } `}
        >
          {index === currentSlide && (
            <div className="w-full h-[356px] xl:h-[81vh]">
              <img
                src={item.slider}
                alt="nothing"
                className="object-cover w-full h-full transition-all duration-300 ease-in-out"
              />
            </div>
          )}
          <div className="absolute flex justify-center w-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <h2 className="text-3xl font-bold text-red">{item.header}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

const Slider = () => {
  const location = useLocation();
  let Comp = DefaultSlider;
  if (location.pathname !== '/') Comp = Banner;
  return <Comp></Comp>;
};

export default Slider;
