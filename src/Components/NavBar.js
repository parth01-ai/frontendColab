import React from 'react';
import reserveLogo from '../Images/reserve.jpg';

export default function NavBar() {
  return (
    <div className='relative'>
        <div className='py-2 px-8 shadow-md flex justify-between'>
          <ul className='flex gap-10'>
            <li className='text-xl flex justify-center font-semibold'>
                <img width='40px' src={reserveLogo}/>
                <h3 className="text-2xl text-[#FF8700] uppercase font-bold mb-2 flex items-center justify-center md:justify-start">
                  Reserve
                </h3>
            </li>
            <li className='text-xl self-center font-medium'><a href="/">Ticket</a></li>
            <li className='text-xl self-center font-medium'><a href="/">Contact Us</a></li>
          </ul>
          <ul className='flex gap-10'>
            <li className='text-xl font-medium bg-orange-400 text-white rounded-md px-8 py-1'>Login</li>
            <li className='text-xl self-center font-medium'>Register</li>
          </ul>
        </div>
    </div>
  )
}
