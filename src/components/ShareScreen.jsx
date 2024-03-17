import React, {useRef} from 'react';
import html2canvas from 'html2canvas';
//icons
import { XMarkIcon, ArrowDownTrayIcon} from '@heroicons/react/24/solid';

const ShareScreen = ({close}) => {
  const imageRef = useRef(null);

  const download = () => {
    const src = imageRef.current.children[0].src;
    const link = document.createElement('a');
    link.href = src;
    link.download = 'share-image.jpg';
    link.click();
  };

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
      {/*To do download and sharing functions */}
      <div className='sharing-btns'>
        <button
          onClick={download}
        >
          <ArrowDownTrayIcon className='w-[25px] h-[25px]'/>
        </button>
      </div>

      <div 
        className='imgToShare w-[60vw] sm:w-[46vw] md:w-[380px]'
        ref={imageRef}
      ></div>
    </div>
  )
}

export default ShareScreen