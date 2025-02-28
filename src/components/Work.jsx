import React from 'react'
import Work1 from '../assets/work1.png'
import Work2 from '../assets/work2.png'
import Work3 from '../assets/work3.png'

const Work = () => {
    const CaseStudies =[
        {id:1,
            title:'Bakery Landing Page Design',
            description:'Address of a website also known as the URL of a website. When a user wants to open a website then they need to put the address or URL of the website into the web browser, and the asked website is delivered by the webserver.',
            workImage:Work1,
        },
        {id:2,
            title:'Shoes Store E-commerce website',
            description:'Address of a website also known as the URL of a website. When a user wants to open a website then they need to put the address or URL of the website into the web browser, and the asked website is delivered by the webserver.',
           
            workImage:Work2,
        },
        {id:3,
            title:'ClearMix Landing Page',
            description:'Address of a website also known as the URL of a website. When a user wants to open a website then they need to put the address or URL of the website into the web browser, and the asked website is delivered by the webserver.',
           
            workImage:Work3,
        }

        
    ]
  return (
    <div id='work' className='container mx-auto px-4 py-12'>
      <h3 className='text-yellow-500 font-semibold text-center uppercase mb-2'>My Work</h3>
      <h2 className='text-4xl font-bold text-center mb-12 text-gray-800'>My Case Studies</h2>
      {CaseStudies.map((study,index)=>(
      <div key={study.id} className={`flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 ${index %2 ===0 ? "lg:flex-row-reverse":" "}`}>
      <div className='w-full lg:w-1/3 p-4'>
        <img src={study.workImage} className='w-full h-full object-cover rounded-lg shadow-lg'/>
        </div>
        <div>
         <div>
         <span className='text-yellow-500 mr-2 font-bold'>{`0${index + 1}`}</span>
         
        </div>
        <div className='w-full lg:w-1/2 p-4'>
        
        <h3 className='text-2xl font-semibold'>{study.title}</h3>
        </div>
      <div>
        <p className='text-gray-600 mb-4'>{study.description}</p>
      </div>
      <button className='border-2 border-yollow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-amber-500  hover:text-white'>details</button>
</div>

        </div>
       



      
       
      ))}
    </div>
  )
}

export default Work
