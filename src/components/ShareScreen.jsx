import React from 'react';
//icons
import { XMarkIcon} from '@heroicons/react/24/solid';

const ShareScreen = ({close}) => {

  return (
    <div
      className='shareScreen absolute z-[1] top-[40px] bg-zinc-900/95 p-10'
    >
      <button
        onClick={close}
        className='absolute top-[5px] right-[5px]'
      >
        <XMarkIcon className='w-[30px] h-[30px]' />
      </button>
      <div 
        className='imgToShare w-[60vw] sm:w-[46vw] md:w-[380px]'
      ></div>
    </div>
  )
}

export default ShareScreen