import React from 'react';
import { NoSymbolIcon} from '@heroicons/react/24/outline';

const CardSkeleton = ({notEnoughData}) => {
  return (
    <div
      className='max-w-[70vw] flex justify-between border-solid border-[1px] border-gray-600 rounded-md my-4 p-[3px] shadow-[10px_10px_25px_-10px_rgba(110,110,110,0.2)] bg-inherit animate-fadeUp'
    >
      <div
        className='flex animate-pulse'
      >
        <div 
          className='number w-4 h-9 bg-zinc-700 my-auto mx-[5px]'
        > 
        </div>
        <div className={window.innerWidth <= 650 ? 'image w-[64px] h-[64px] bg-zinc-700 my-auto mx-[10px]' : 'image w-[100px] h-[100px] bg-zinc-700 my-auto mx-[10px] flex' }>
          {notEnoughData && <NoSymbolIcon className='w-[55px] h-[55px] m-auto bg-transparent'/>}
        </div>
        <div className='description flex flex-col gap-2 mt-[5px] text-[12px]'>
          <div 
            className='number w-[200px] h-4 bg-zinc-700'
          > 
            {notEnoughData && <p>Insufficient data.</p>} 
          </div>
          <div 
            className='number w-[200px] h-3 bg-zinc-700'
          > 
            {notEnoughData && <p> Check other time slots.</p>}
          </div>
          <div 
            className={notEnoughData ? 'number bg-zinc-700' : 'number w-[200px] h-3 bg-zinc-700'}
          >
            
          </div>
        </div>
      </div>

      <div
        className='popularity flex gap-1 items-end mb-[15px] mr-[13px] animate-pulse'
      >
        <div className='w-1 h-6 bg-zinc-700'></div>
        <div className='w-1 h-8 bg-zinc-700'></div>
        <div className='w-1 h-10 bg-zinc-700'></div>
        <div className='w-1 h-12 bg-zinc-700'></div>

      </div>
    </div>
  )
}

export default CardSkeleton