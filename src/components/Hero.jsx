import React from 'react'

function Hero() {
    const downloadPDF = () => {
      
        window.location.href = 'https://drive.google.com/file/d/1uLzIiRSn4CDzI_FuwhI-sQKMFDJRVRvQ/view?usp=sharing';
      };
    
  return (
    <div className='bg-black text-white text-center py-16'>
       <img src='/src/assets/pic1.JPG' className='mx-auto mb-8 w-40 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
       <h1 className='text-4xl font-bold'>
        I'm {""}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Md Shahadat Hossain</span>
        , Front-End Developer
       </h1>
       <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications
       </p>
       <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'><a href="https://www.linkedin.com/in/shahadat1717/">Contact With Me</a></button>
        <button onClick={downloadPDF} className='bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
       </div>
    </div>
  )
}

export default Hero