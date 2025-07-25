import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-60 px-16 absolute text-white w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='w-1/4 text-lg py-6'>{overview}</p>
      <div className='flex gap-4'>
        <button className='bg-white text-black py-2 px-8 rounded-md hover:bg-opacity-80'>▶ Play</button>
        <button className='bg-gray-600 text-white bg-opacity-50 py-2 px-8 rounded-md hover:bg-opacity-100'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle