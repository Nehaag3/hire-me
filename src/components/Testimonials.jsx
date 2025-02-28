import React, { useState } from 'react'
import TestimonialImg from '../assets/testimonial.png'
import TestimonialImg2 from '../assets/profilewomen.png'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import Slack from '../assets/slack logo.png'
import Tesla from '../assets/tesla logo.png'
import Dropboxlogo from '../assets/dropbox logo.png'
import Google from '../assets/google logo.png'

const Testimonial =[
    {
        name:'Leesha',
        position:'CEO of Amazon',
        image:TestimonialImg,
        feedback: 'very impressive.It is clear to see that you put in your absolute best and this is a sign you’ll achieve great success in your life in the future.',
    },
    {
        name:'joe',
        position:'CEO of google',
        image:TestimonialImg2,
        feedback: 'It is clear to see that you put in your absolute best and this is a sign you’ll achieve great success in your life in the future.',
    },
]

const Testimonials = () => {
    const[current,setCurrent] = useState(0);
    const TestimonialsCount = Testimonials.length;

    const nextTestimonial = () => {
       setCurrent(current === TestimonialsCount - 1 ? 0 : current + 1)
    }

    const prevTestimonial = () => {
        setCurrent(current === 0 ? TestimonialsCount - 1 : current - 1);
    }

    
  return (
    <div id='testimonials' className='w-full h-auto py-16 bg-white' >
    <div className='container mx-auto px-6 lg:px-24 text-center'>
        <div className='mb-12'>
            <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-2'>Testimonials</h3>
            <h2 className='text-4xl text-gray-800 mb-4'>What people say</h2>
        </div>
    
      <div className='relative max-w-4xl mx-auto bg-white shadow-lg rounded-lg px-6 '>
      <div className =  'flex justify-center items-center mb-4'>
        <img src={Testimonial[current].image} className='w-32 h-32 rounded-full border-4 border-yellow-400 object-cover'/>
     
        </div>
      <p className='text-gray-600 italic mb-6 px-14'>{Testimonial[current].feedback}</p>
      
      <h3 className='font-semibold text-lg '>{Testimonial[current].name}</h3>
    <p className='text-gray-600 ' > {Testimonial[current].position}</p>
   
<div className='absoulte inset-x-0 top-1/2 transform-translate-y-1/2 flex justify-between px-4'>
    <button className='text-yellow-500 bg-white p-2 rounded-full hover:bg-yellow-600 transition duration-300' onClick={prevTestimonial}><FaArrowLeft/></button>
    <button className='text-yellow-500 bg-white p-2 rounded-full hover:bg-yellow-600 transition duration-300' onClick={nextTestimonial}><FaArrowRight/></button>
</div>



      </div>
      <div className='mt-16'>
        <h4 className='text-gray-600 font-semibold text-xl '>Who makes me Proud</h4>
      </div>
      <div className='flex justify-center gap-4 md:gap-16 lg:gap-32 items-center flex-wrap mt-10'>
        <img src={Slack} className='h-6 ad:h-7 object-cover'/>
        <img src={Dropboxlogo} className='h-6 ad:h-7 object-cover'/>
        <img src={Tesla} className='h-8 ad:h-8 object-cover'/>
        <img src={Google} className='h-6 ad:h-7 object-cover'/>
      </div>
    </div>
    </div>
  )
}

export default Testimonials
