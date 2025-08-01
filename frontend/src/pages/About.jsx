import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets'
import NewsLetter from '../Components/NewsLetter'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about_img" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta, debitis fugiat quos placeat facere. Rem, aut! Minus, dignissimos sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum enim quam error iure possimus illum nulla laudantium architecto? Corporis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta, debitis fugiat quos placeat facere. Rem, aut! Minus, dignissimos sapiente.lorem20  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ad, omnis minus reiciendis odio eos veritatis dignissimos quod esse doloremque.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sint nostrum consequatur reiciendis provident beatae. Ratione consequatur laborum aperiam esse! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, vero.</p>
        </div>

      </div>

      <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border p-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Quality Assurence</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolore exercitationem dolorum tempore obcaecati eaque omnis fuga. Asperiores, molestiae laudantium.</p>

        </div>
        <div className='border p-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Convinnce</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolore exercitationem dolorum tempore obcaecati eaque omnis fuga. Asperiores, molestiae laudantium.</p>

        </div>
        <div className='border p-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Exceptional customer service</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolore exercitationem dolorum tempore obcaecati eaque omnis fuga. Asperiores, molestiae laudantium.</p>

        </div>

      </div>
      <NewsLetter/>
    </div>
  )
}

export default About
