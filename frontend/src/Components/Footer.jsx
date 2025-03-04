import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt="logo" className='mb-5 w-32' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quidem tenetur vel voluptatum voluptas similique ab perferendis asperiores. Porro, nihil illum architecto voluptas modi non quaerat fugit totam in maiores!
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1'>
            <li>+1-89-89-89-99-87</li>
            <li>foreveryou@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Full-width copyright section */}
      <div className='w-full'>
        <hr className='w-full border-gray-300' />
        <p className='py-5 text-sm text-center text-gray-600'>© 2025 Forever</p>
      </div>
    </>
  )
}

export default Footer
