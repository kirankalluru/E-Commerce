import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets';
import NewsLetter from '../Components/NewsLetter'


const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="contact_img" />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-700'>Our Store</p>
        <p className='text-gray-500'>akkayyapalem,ramaraksha <br />vishakapatnam 226764</p>
        <p className='text-gray-500'>Tel: 6763-498-747</p>
        <p className='text-gray-500'>Email:kirankalluru@gmail.com</p>
        <p className='font-semibold text-xl text-gray-700'>Carrers at Forever</p>
        <p className=' text-gray-700'>Learn more about our Teams and Jpb Openings</p>
        <button className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer hover:bg-gray-600'>Explore Jobs</button>
      </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact
