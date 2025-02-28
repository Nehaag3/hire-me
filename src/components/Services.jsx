import React from 'react'
import Services1 from '../assets/service1.png'
import Services2 from '../assets/service2.png'
import services3 from '../assets/service3.png'
import {FaArrowRight} from 'react-icons/fa'
const Services = () => {
  return (
    <div id='services'>
    {/* main container */}
    <div className='bg-white py-16 px-8'>
{/* container */}
    <div className='container mx-auto px-6 lg:px-24 text-center'>
    {/* h3+h1 */}
    <div className='mb-12'>
     <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-2'>Services</h3>
    <h1 className='text-gray-800 text-4xl font-bold mb-4'>check my services</h1></div>
    </div>
    
     <div className='grid grid-cols-1 md:grid-cols-3  md:col-span-3 gap-5 items-center w-full  '> 
     <div className=' rounded-lg shadow-lg p-6 w-full'>
        <img src={Services1} className='h-80 w-full object-cover rounded-2xl'/>
        <h1 className='font-bold text-gray-800 text-2xl text-center mt-2 mb-2'>Landin design page</h1>
        <p className='text-sm text-gray-600'>In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign. It’s where a visitor “lands” after they click on a link in an email, or ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web.</p>
     </div>
     <div className=' rounded-lg shadow-lg p-6'>
        <img src={Services2} className='h-80 w-full object-cover rounded-2xl'/>
        <h1  className='font-bold text-gray-800 text-2xl text-center mt-2 mb-2'>Backend Developer</h1>
        <p className='text-sm text-gray-600'>In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign. It’s where a visitor “lands” after they click on a link in an email, or ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web.</p>
     </div>
     <div className=' rounded-lg shadow-lg p-6'>
        <img src={services3} className='h-80 w-full object-cover rounded-2xl'/>
        <h1  className='font-bold text-gray-800 text-2xl text-center mt-2 mb-2'>Data Base</h1>
        <p className='text-sm text-gray-600'>In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign. It’s where a visitor “lands” after they click on a link in an email, or ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web.</p>
     </div>
     </div>
    </div>
    <div className='mt-8 text-right '>
    <a className ='flex justify-end items-center text-yellow-500 font-semibold hover:text-yellow-300'>Explore All Services<FaArrowRight className='ml-2'/>
     </a>
    </div>
    </div>
  )
}

export default Services
