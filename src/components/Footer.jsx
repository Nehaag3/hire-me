import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white mt-12 flex flex-col items-center'>
      <div className='container flex flex-col md:flex-row justify-between px-5'>
        <div className='mb-8 md:mb-0 md:w-1/4 mr-6 text-center md:text-start'>
            <h2 className='text-3xl font-semibold  text-yellow-500'>byte crafter</h2>
            <p className='mt-1 text-gray-500 md:pr-5'>lets connect to know more</p>
        </div>
        <div className='flex justify-between w-full md:3/4'>

            <div className='space-y-4'>
                <h3 className='font-medium text-gray-600'>EXPLORE</h3>
                <ul className='text-gray-600 space-y-2'>
                    <li><a href='#'>Support </a> </li>
                    <li><a href='#'>About Us </a> </li>
                    <li><a href='#'>Blogs </a> </li>
                </ul>
            </div>
            <div >

            <h3 className='font-medium text-gray-600'>Legal</h3>
                <ul className='text-gray-600 space-y-2'>
                    <li><a href='#'>Terms of use </a> </li>
                    <li><a href='#'>Privacy policy </a> </li>
                   
                </ul>



            </div>
            <div>
            <h3 className='font-medium text-gray-600'>Social Media</h3>
                <ul className='text-gray-600 space-y-2'>
                    <li><a href='#'>Facebook</a> </li>
                    <li><a href='#'>LinkedIn </a> </li>
                    <li><a href='#'>instagram </a> </li>
                </ul>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
