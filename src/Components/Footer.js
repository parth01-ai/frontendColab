import React from 'react';
import reserveLogo from "../Images/reserve.jpg";

export default function Footer() {
  return (
    <footer className="text-center lg:text-left bg-gray-200 text-gray-600">
      <div className="mx-10 py-10 text-center md:text-left">
        <div className="grid grid-1 lg:grid-cols-5 gap-3">
          <div>
            <div className='flex gap-2 items-center'>
              <img width='37px'  className='pb-1 items-stretch h-10 rounded-md' src={reserveLogo}/>
              <h3 className="text-3xl text-[#FF8700] uppercase font-bold mb-4">
                Reserve
              </h3>
            </div>
            <p>When you have a choice. Choose Reserve</p>
            <p className="py-2">
              Reserve offers bus tickets booking through its website,ios and
              android mobile apps for all major cities.
            </p>
            <p className="py-2">reserve.bus@reserve.com</p>
          </div>
          <div></div>
          <div>
            <h6 className="uppercase font-bold mb-4 flex justify-center text-[20px] md:justify-start">
              About
            </h6>
            <div className="flex flex-col">
              <a href="#!" className="text-gray-600 mb-2">About us</a>
              <a href="#!" className="text-gray-600 mb-2">Contact us</a>
            </div>
          </div>
          <div>
            <h6 className="uppercase font-bold mb-4 flex justify-center text-[20px] md:justify-start">
              Useful links
            </h6>
            <div className="flex flex-col">
              <a href="#!" className="text-gray-600 mb-2">Careers</a>
              <a href="#!" className="text-gray-600 mb-2">FAQ</a>
              <a href="#!" className="text-gray-600 mb-2">T & C</a>
              <a href="#!" className="text-gray-600 mb-2">Privacy Policy</a>
              <a href="#!" className="text-gray-600 mb-2">Blog</a>
            </div>
          </div>
          <div className="">
            <h6 className="uppercase font-bold mb-4 flex justify-center text-[20px] md:justify-start">
              Follow us
            </h6>
            <div className="flex flex-col">
              <a href="#!" className="text-gray-600 mb-2">Instagram</a>
              <a href="#!" className="text-gray-600 mb-2">Twitter</a>
              <a href="#!" className="text-gray-600">Facebook</a>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-400 sm:mx-auto dark:border-gray-700 " />
      <div className="text-center p-3 font-semibold bg-gray-300">
          All rights reserved - 2022
      </div>
    </footer>
  )
}
