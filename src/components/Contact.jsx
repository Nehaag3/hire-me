import React from 'react'
import {FiMail,FiMapPin,FiPhone} from 'react-icons/fi'

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-12 lg:px-24 bg-gray-50 bg-gradiant-to-t from-white to-yellow-50 '>
      <div className='flex flex-1 flex-col px-6 mb-14'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-gray-900'>Contact Us</h2>
        <p className='mb-6 text-gray-600'>We are comitted to processing the information to contact you and discuss your project</p>

      <div>
        <div className='space y-4 text-gray-600'>
        <FiMail className='text-yellow-500 w-6 h-6'/>
        <span>example@bytecrafter.com</span>
        </div>

        <div className='space y-4 text-gray-600'>
        <FiPhone className='text-yellow-500 w-6 h-6'/>
        <span>+9143256890</span>
        </div>

        <div className='space y-4 text-gray-600'>
        <FiMapPin className='text-yellow-500 w-6 h-6'/>
        <span>example@bytecrafter.com</span>
        </div>

        
      </div>





      </div>
      <div className='flex items-center justify-center p-6 w-11/12 max-w-screen-sm bg-white shadow-lg rounded-lg'>
        <form action='#' method='POST' className='11/12 space-y-4'>
            <div>
       <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name
       <span className='text-red-500'>*</span>
       </label>
      <input type='text'
              id='name'
              name='name'
              required placeholder='your name'
              className='mt-1 block  w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500' >

      </input>
            </div>

<div>

<label className='block text-sm font-medium text-gray-700'  htmlFor='website'>website</label>
<input type='url'
       id='website'
       name='website'
       placeholder='your website(option)'
       className='mt-1 block  w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500' >
</input>

</div>

<div>
  <label className=' block text-gray-700 text-sm font-medium' htmlFor='message'>
  
message
  </label>
  <textarea 
  id='message'
  placeholder='your message'

  row='4'
  
   className='border border-gray-300 rounded-md px-4 py-2 mt-1 w-full' >
 
   </textarea>
   
</div>

<button type='submit'    className='mt-1 block  w-full px-4 py-2 border border-gray-300  bg-yellow-500 hover:bg-yellow-200 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500' >Submit</button>



        </form>
      
      </div>
    
    </div>
  )
}

export default Contact
