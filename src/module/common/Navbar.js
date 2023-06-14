import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { setIndex } from '../../features/checkIndexSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const nav = ['Home', 'Cars', 'Posts', 'About Us', 'Contact'];

const Navbar = () => {
  const location = useLocation();
  const length = useSelector((state) => state.cart.data.length);
  console.log(location.pathname);
  const dispatch = useDispatch();
  const [burger, setBurger] = useState(false);
  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <div className="relative flex items-center justify-around w-full h-24 bg-softBlack">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white">
          Car Dealer <span className="text-red">Website</span>
        </h1>
      </Link>
      <Link to="/cart">
        <div className="relative flex items-center justify-center xl:hidden">
          <span className="absolute top-[-8px] w-3 h-3 text-[12px] z-50 bg-black right-[-4px] text-center rounded-full text-white">
            {length}
          </span>
          <FontAwesomeIcon icon={faCartShopping} style={{ color: '#fff' }} />
        </div>
      </Link>

      <div
        onClick={handleBurger}
        className={`relative flex items-center  justify-center bg-white cursor-pointer w-14 h-9 before:absolute before:w-6 before:h-[3px] before:bg-red  after:absolute after:w-6 after:h-[3px] after:bg-red transition-all ease-in-out duration-300 before:transition-all before:ease-in-out before:duration-300 after:transiton-all after:duration-300 after:ease-in-out ${
          burger
            ? ' before:rotate-45 before:bottom-[17px]  after:-rotate-45 after:top-[16px]'
            : ' before:bottom-[10px]  after:top-[10px] '
        }
        xl:hidden
        `}
      >
        <p
          className={` h-[3px] bg-red transition-all ease-in-out duration-300 ${
            burger ? 'w-0' : 'w-6'
          } 
          `}
        ></p>
      </div>

      <ul
        className={`shadow-lg z-10 absolute bg-white transition-all ease-in-out duration-700 top-full w-full ${
          burger
            ? ' h-[342.67px] '
            : 'h-0 invisible opacity-0 pointer-events-none'
        }
        xl:visible xl:opacity-100 xl:pointer-events-auto xl:bg-inherit xl:relative xl:top-0 xl:w-auto xl:h-full xl:flex xl:items-center xl:gap-12 
        `}
      >
        {nav.map((item, index) => (
          <Link
            to={
              item === 'Home'
                ? '/'
                : `/${item.split(' ').join('').toLowerCase()}`
            }
            key={index}
            onClick={() => {
              dispatch(setIndex(index));
            }}
          >
            <li
              className={`border-b-[1px] border-[#eee] py-5 transition-all ease-in-out duration-300 text-lg font-bold text-center cursor-pointer hover:text-red ${
                burger ? 'visible' : 'invisible'
              } 
            xl:visible xl:inline xl:border-none   xl:py-0 xl:text-base
            ${
              location.pathname === `/${item.split(' ').join('').toLowerCase()}`
                ? 'xl:text-red'
                : 'xl:text-white'
            }
            ${location.pathname === '/' && item === 'Home' && 'xl:!text-red'}
            `}
            >
              <span
                className={`xl:relative xl:before:absolute xl:before:bottom-0 xl:before:bg-red xl:before:h-[1px]  xl:before:hover:w-full xl:before:transition-all xl:before:ease-in-out 'xl:before:w-0'
                  ${
                    location.pathname ===
                    `/${item.split(' ').join('').toLowerCase()}`
                      ? 'xl:before:w-full'
                      : null
                  }
                  ${
                    location.pathname === '/' &&
                    item === 'Home' &&
                    'xl:before:w-full'
                  }
                  `}
              >
                {item}
              </span>
            </li>
          </Link>
        ))}

        <Link to="/cart">
          <div className="relative items-center justify-center hidden xl:flex">
            <span className="absolute top-[-8px] w-3 h-3 text-[12px] z-50 bg-black right-[-4px] text-center rounded-full text-white">
              {length}
            </span>
            <FontAwesomeIcon icon={faCartShopping} style={{ color: '#fff' }} />
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
