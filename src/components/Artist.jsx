import React from 'react'

export const Artist = ({artist, number}) => {
  //adds number to an Artist
  const nr = parseInt(number, 10);
  return (
    <div className='flex items-center min-h-[90px] border-solid border-[1px] border-gray-600 rounded-md my-4 p-[3px] shadow-[10px_10px_25px_-10px_rgba(110,110,110,0.2)] md:min-w-max bg-inherit'>
      <p
        className='bg-inherit px-[8px] text-2xl font-semibold'
      >
        {nr + 1}
      </p>
      <div className='bg-inherit max-h-[120px] flex justify-items-center'>
        <img 
          src={window.innerWidth <= 650 ? artist.images[2].url : artist.images[1].url}
          className='max-h-[100px] my-[5px] mx-[10px]'
          alt='Artist'
        />
      </div>

      <div
        className='bg-inherit h-full flex flex-col justify-start'
      >
        <p className='bg-inherit font-semibold mb-[4px]'>{artist.name}</p>
      </div>
    </div>
  )
}
