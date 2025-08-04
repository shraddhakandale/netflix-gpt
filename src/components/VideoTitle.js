import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-32 md:pt-60 px-16 absolute text-white w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className='md:text-6xl text-xl font-bold'>{title}</h1>
      <p className='w-1/4 text-lg py-6 hidden md:block'>{overview}</p>
      <div className='flex gap-4'>
        <button className='bg-white text-black ms:py-2 py-1 md:px-8 px-2 rounded-md hover:bg-opacity-80 text-sm md:text-md'>▶ Play</button>
        <button className='bg-gray-600 text-white bg-opacity-50 py-2 px-8 rounded-md hover:bg-opacity-100 hidden md:inline-block text-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle