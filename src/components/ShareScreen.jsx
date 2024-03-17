import React, {useRef, useState, useEffect} from 'react';
//icons
import { XMarkIcon, ArrowDownTrayIcon, InformationCircleIcon} from '@heroicons/react/24/solid';
import { FacebookMessengerShareButton, WhatsappShareButton, FacebookShareButton } from 'react-share';
import { FacebookMessengerIcon, FacebookIcon, WhatsappIcon } from 'react-share';

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
      className='shareScreen absolute z-[1] top-[30px] bg-zinc-900/95 py-3 px-6'
    >
      <button
        onClick={close}
        className='absolute top-[5px] right-[5px] bg-transparent'
      >
        <XMarkIcon className='w-[30px] h-[30px] bg-transparent' />
      </button>
      {/*To do download and sharing functions */}
      <div className='sharing-btns bg-transparent flex items-center flex-wrap gap-1 xxs:gap-3 mb-1 xxs:mb-2'>
        <button
          onClick={download}
          className='rounded-full w-[30px] h-[30px] xxs:w-[40px] xxs:h-[40px] bg-white'
        >
          <ArrowDownTrayIcon
            className='w-[20px] h-[20px] xxs:w-[30px] xxs:h-[30px] bg-transparent text-black m-auto'
          />
        </button>
          <FacebookMessengerShareButton
            url={'https://spotify-stats24.web.app/'} 
          >
            <FacebookMessengerIcon 
              className='rounded-full w-[30px] h-[30px] xxs:w-[40px] xxs:h-[40px]'
            />
          </FacebookMessengerShareButton>
          <FacebookShareButton
            url={'https://spotify-stats24.web.app/'} 
          >
            <FacebookIcon 
              className='rounded-full w-[30px] h-[30px] xxs:w-[40px] xxs:h-[40px]'
            />
          </FacebookShareButton>
          <WhatsappShareButton
            url={'https://spotify-stats24.web.app/'}
          >
            <WhatsappIcon 
              className='rounded-full w-[30px] h-[30px] xxs:w-[40px] xxs:h-[40px]'
            />
          </WhatsappShareButton>
      </div>

      <div 
        className='imgToShare w-[60vw] sm:w-[46vw] md:w-[380px]'
        ref={imageRef}
      ></div>
      <p
        className='text-[12px] bg-transparent w-[60vw] sm:w-[46vw] md:w-[380px] text-justify'
      >
        To avoid violating Spotify's privacy policy, the option to share this photo directly on social media is disabled. You can still download this image to your device and use it however you want. You may only share the URL of this website using the social media links above.
      </p>
    </div>
  )
}

export default ShareScreen