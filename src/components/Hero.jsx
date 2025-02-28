import React from 'react'
import {BsDownload} from 'react-icons/bs'
import CV from '../assets/cv.pdf'
import HeroImg from '../assets/women.png'
function Hero() {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center text-black py-10 px- 5 sm:px-10 lg: px-40 gap-10 bg-gradient-to-t from-white-to-yellow-50'>
      <div className='w-full md:w-1/2 mb-10 text-center md:text-left'>
      <h3 className='text-yellow-400 font-semibold'>Hello I am</h3>
       <h1 className='text-black font-bold md:text-2xl py-0 md:py-2'>Byte Crafter</h1>
       <h3 className='text-green-400'>Web Developer & UI/UX Designer</h3>
        
        <p className='text-sm md:text-lg lg:text-l text-gray-700 '>If you are in Business you know how importance a website is. It is like your business identy. but when you want to create your own webiste and contact a webdesigner, they'll charge you thousand of dollars to create that. Because they know how write code to make a website and you don't. But think if you know how to write code and create your own website, it's not just save you money it also make you money, How? just create websites for others and they will pay you thousand of dolars just doing that. So that's why this course are. In this course I'll tech HTML and CSS the language behind every website</p>
     <div className='flex items-center justify-center md:justify-start gap-4 mt-5'>

     <button className='bg-yellow-500 py-2 px-4 rounded-lg mr-4 hover:bg-yellow-200'>Hire Me</button>
      <a className='bg-yellow-500 py-2 px-10 rounded-lg flex items-center font-semibold hover:bg-amber-200' href={CV} download='cv.pdf'>
        Download CV <BsDownload className='ml-2 text-lg'/>
       
    </a>
     </div>
     </div>
     <div>
     <div className='w-full md:w-1/2 px-10 md:px-0 flex justify-center md:justify-end mb-20 md:mb-0'>
    <img className='max-w-full h-auto' src={HeroImg} alt='avatar'></img>
    </div>
     </div>
     
      
    </div>
  )
}

export default Hero
