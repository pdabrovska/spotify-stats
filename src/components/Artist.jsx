import React from 'react'

export const Artist = ({artist, number}) => {
  const nr = parseInt(number, 10);
  return (
    <div className='flex items-center min-h-[90px] border-solid border-[1px] border-gray-600 rounded-md my-4 p-[3px] shadow-[10px_10px_25px_-10px_rgba(110,110,110,0.2)] md:min-w-max'>
      <p
        className='px-[8px] text-2xl font-semibold'
      >
        {nr + 1}
      </p>

      <img 
        src={window.innerWidth <= 650 ? artist.images[2].url : artist.images[1].url}
        className='max-h-[100px] my-[5px] mx-[10px]'
        alt='Artist'
      />

      <div
        className='h-full flex flex-col justify-start'
      >
        <p className='font-semibold mb-[4px]'>{artist.name}</p>
      </div>
    </div>
  )
}
