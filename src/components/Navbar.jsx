import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import CV from '../assets/cv.pdf'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [menu,setMenu] =useState(false)
  const items=[
    {id:1,Text:"About", to: "about"},
    {id:2,Text:"Services",to:'services'},
    {id:3,Text:"Work", to:'work'},
    {id:4,Text:"Testinomials", to:'testimonials'},
    {id:5,Text:"Contact", to:'contact'},
 
  ]
  return (
    <div className='bg-yellow-50 text-black w-full'>
    <div className='container mx-auto p-4 hidden md:flex justify-between items-center'>
      <div className='text-xl md:text-2xl font-bold flex items-center gap-1'>
        <span className='text-black '>Byte</span> 
        <span  className='text-yellow-500'>Crafter</span> 
        </div>
        <div className='hidden md:flex space-x-6 items-center list-none text-lg'>
        {items.map(({id,Text,to})=>(
        <li key={id}className='hover:text-yellow-500 duration-200 cursor-pointer'>
        
        <Link
      to={to}
      smooth={true}
      duration={500}
      
      >{Text}
        </Link>
      </li>
        
        ))}
         

        </div>
        <a  href = {CV} download='cv.pdf'className='bg-yellow-500 text-lg text-black px-4 py-2 rounded-2xl hover:bg-yellow-400'>Download CV</a>
        </div>
        <div className='flex w-full justify-between items-center md:hidden p-2 shadow-small'>
          <div className='text-xl font-bold items-center gap-2'>
            <span className='text-black'>Byte</span>
            <span className='text-yellow-500'>Crafter</span>
          </div>
          <div className='flex justify-center gap-2'>
            <div onClick={()=>setMenu(!menu)}>
            {menu ? (<IoCloseSharp size={30} className='text-black'/>):(<MdOutlineMenu  size={30} className='text-black'/>)}

            </div>
          </div>
        </div>
     
      {/* //map function for menu on phnone screen */}
      {
        menu&& (
          <div className='md:hidden bg-yellow-100 py-6 justify-center items-center gap-2 text-yellow-500 flex flex-col list-non shadow-sm'>
              {items.map(({id,Text,to})=>(
        <li key={id} className='hover: duration-200 cursor-pointer border-b w-11/12'>
        <Link
      to={to}
      smooth={true}
      duration={500}
      
      >{Text}
        </Link>
        
        </li>
        
        ))}

        <a  href = {CV} download='cv.pdf'className='bg-yellow-500 text-lg text-black px-4 py-2 rounded-2xl hover:bg-yellow-400'>Download CV</a>
          </div>
        )
      }
      </div> 
  )
}

export default Navbar
