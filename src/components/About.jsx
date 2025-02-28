import React from 'react'
import AboutImg from '../assets/womenabout.png'
import {FaRegHandshake } from 'react-icons/fa'
import {MdSupportAgent} from 'react-icons/md'
import CV from '../assets/cv.pdf'
import {BsDownload} from 'react-icons/bs'
const About = () => {
  return (
    <div id='about' className='py-16 bg-gray-50'>
    <div className='w-50 md:w-1/2 px-10 md:px-0 flex justify-center md:justify-end mb-20 md:mb-0 '>
       <div className='w-full md:w-1/2 ml-6 mr-4 md:ml-30 mb-8 md:mb-0'>
    <img className='w-full '
    src={AboutImg} alt='secondimg'/>
      </div>
      {/* right section */}
      <div className='w-full h-auto ml-10'>

     <h3 className='text-yellow-400 text-lg font-semibold uppercase m-4'>A bit</h3>
     <h2 className='font-semibold text-gray-800 mb-6 text-4xl md:text-6xl'>About me</h2>
     <p className='text-gray-600 mb-6 '>So how can you make sure your resume stands out from the rest? One way is to add a smartly crafted “About Me” section. This will allow potential employers to learn more about who you are, beyond your job titles and work experience. </p>
{/* handshake + 5years */}
      <div className='flex flex-wrap mb-6'>
      <div className='flex items-center w-1/2 mb-4'>
        <FaRegHandshake className='text-yellow-500 text-5xl mr-4'/>

{/* 5yr */}
<div>
  <h4 className='text-gray-700 font-semibold'>5+ years</h4>
  <p className='text-gray-700'>experience</p>
</div>


      </div>
      </div>
      {/*mdsupport + 27/4 */}
      <div className='flex flex-wrap mb-6'>
      <div className='flex items-center w-1/2 mb-4'>
        <MdSupportAgent className='text-yellow-500 text-5xl mr-4' />

{/* 24/7 */}
<div>
  <h4 className='text-gray-700 font-semibold'>24/7</h4>
  <p className='text-gray-700'>Custmor Support</p>
</div>


      </div>

      </div>
      {/* button */}
      <div className='flex items-center'>
     <button className='bg-yellow-500 px-8 py-3 hover:bg-amber-100 text-black rounded-lg mr-4 '>Hire me</button>
     <a className ='flex text-yellow-500 text-lg items-center hover:bg-amber-200'href={CV} download='cv.pdf'>Download CV 
     <BsDownload className='ml-2 text-lg'/>
     </a>
      </div>

      </div>
    </div>
    </div>
  )
}

export default About
